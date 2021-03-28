import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/database/review_helper.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/providers/review_state.dart';
import 'package:ieatta/src/utils/toast.dart';
import 'package:provider/provider.dart';

class ReviewPage extends StatefulWidget {
  final ParseModelReviews review;

  const ReviewPage({Key key, this.review}) : super(key: key);

  @override
  _ReviewPageState createState() => _ReviewPageState();
}

class _ReviewPageState extends State<ReviewPage> {
  final _formKey = GlobalKey<FormBuilderState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  // Review
  bool _isButtonDisabled = false;

  @override
  Widget build(BuildContext context) {
    ReviewState reviewState = Provider.of<ReviewState>(context, listen: false);
    final authProvider = Provider.of<AuthProvider>(context);
    return Scaffold(
        key: _scaffoldKey,
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(Icons.cancel),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(widget.review != null
              ? AppLocalizations.of(context)
                  .translate("reviewsCreateEditAppBarTitleEditTxt")
              : AppLocalizations.of(context)
                  .translate("reviewsCreateEditAppBarTitleNewTxt")),
          actions: <Widget>[
            FlatButton(
                onPressed: _isButtonDisabled
                    ? null
                    : () async {
                        if (_formKey.currentState.saveAndValidate()) {
                          FocusScope.of(context).unfocus();

                          setState(() {
                            _isButtonDisabled = true;
                          });

                          AuthUserModel authUserModel =
                              await authProvider.getAuthUserModel();

                          ParseModelReviews lastModel = widget.review != null
                              ? widget.review
                              : ParseModelReviews.emptyReview(
                                  authUserModel: authUserModel,
                                  reviewType: reviewState.getReviewType(),
                                  relatedId: reviewState.getRelatedId());

                          ParseModelReviews nextModel =
                              ParseModelReviews.updateReview(
                                  model: lastModel,
                                  nextRate: reviewState.getRate(),
                                  nextExtraNote: reviewState.getBody());

                          try {
                            final firestoreDatabase =
                                Provider.of<FirestoreDatabase>(context,
                                    listen: false);
                            await firestoreDatabase.setReview(
                                model: nextModel); // For Restaurant.
                            await ReviewHelper(
                                    lastReviewRate: reviewState.getLastRate(),
                                    selectedStar: reviewState.getRate(),
                                    isNew: widget.review == null)
                                .onSaveOrRemoveReviewAfterHook(
                                    reviewHookType: ReviewHookType.Add,
                                    reviewType: reviewState.getReviewType(),
                                    relatedId: reviewState.getRelatedId());
                          } catch (e) {
                            setState(() {
                              _isButtonDisabled = false;
                            });
                          }

                          ToastUtils.showToast(AppLocalizations.of(context)
                              .translate("toastForSaveSuccess"));
                          // Navigate
                          Navigator.of(context).pop();
                        }
                      },
                child: Text(AppLocalizations.of(context)
                    .translate("editModelAppBarRightSaveTitle")))
          ],
        ),
        body: SingleChildScrollView(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(height: 12),
            Container(
              padding: EdgeInsets.only(left: 12),
              width: 300,
              height: 50,
              child: _buildRatePanel(context),
            ),
            _buildShortcuts()
          ],
        )));
  }

  Widget _buildRatePanel(BuildContext context) {
    ReviewState reviewState = Provider.of<ReviewState>(context, listen: true);
    double rating = reviewState.getRate();
    return Stack(
      children: [
        Container(
            width: 300,
            height: 50,
            child: Image(
                image: AssetImage('assets/stars/large/$rating.png'),
                fit: BoxFit.cover)),
        ListView.builder(
            itemCount: 5,
            scrollDirection: Axis.horizontal,
            itemBuilder: (context, index) {
              return Container(
                padding: EdgeInsets.only(right: 10),
                width: 60,
                height: 50,
                child: InkWell(
                  onTap: () {
                    reviewState.setRate((index + 1).roundToDouble());
                  },
                  child: Container(
                      // color: Colors.red.withOpacity(0.2),
                      ),
                ),
              );
            })
      ],
    );
  }

  Widget _buildRatePanelxxx(BuildContext context) {
    ReviewState reviewState = Provider.of<ReviewState>(context, listen: false);
    // return RatingBar.builder(
    //     initialRating: reviewState.getRate(),
    //     minRating: 1,
    //     direction: Axis.horizontal,
    //     allowHalfRating: false,
    //     unratedColor:
    //         HotelAppTheme.buildLightTheme().primaryColor.withAlpha(50),
    //     itemCount: 5,
    //     itemSize: 40,
    //     itemPadding: EdgeInsets.symmetric(horizontal: 2.0),
    //     itemBuilder: (context, index) => Icon(
    //           Icons.star,
    //           color: HotelAppTheme.buildLightTheme().primaryColor,
    //         ),
    //     onRatingUpdate: (rating) {
    //       reviewState.setRate(rating);
    //     });
  }

  Widget _buildShortcuts() {
    return Shortcuts(
      shortcuts: <LogicalKeySet, Intent>{
        // Pressing enter on the field will now move to the next field.
        LogicalKeySet(LogicalKeyboardKey.enter): NextFocusIntent(),
      },
      child: FocusTraversalGroup(
        child: Form(
          onChanged: () {
            Form.of(primaryFocus.context).save();
          },
          child: _buildForm(context),
        ),
      ),
    );
  }

  Widget _buildForm(BuildContext context) {
    ReviewState reviewState = Provider.of<ReviewState>(context, listen: false);
    return Padding(
        padding: const EdgeInsets.all(10),
        child: FormBuilder(
            key: _formKey,
            autovalidateMode: AutovalidateMode.disabled,
            initialValue: {
              'body': reviewState.getBody(),
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'body',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("modelCreateEditNotesTxt"),
                  ),
                  onChanged: (String val) {
                    reviewState.setBody(val);
                  },
                  // valueTransformer: (text) => num.tryParse(text),
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                  ]),
                  maxLines: 15,
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
