import 'package:flutter/material.dart';
import 'package:ieatta/core/database/review_helper.dart';
import 'package:ieatta/src/logic/bloc.dart';
import 'package:ieatta/src/utils/toast.dart';
import 'package:smooth_star_rating/smooth_star_rating.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:provider/provider.dart';

class CreateEditReviewScreenObject {
  final ParseModelReviews reviewModel;
  final String restaurantId;

  CreateEditReviewScreenObject(
      {@required this.reviewModel, @required this.restaurantId});
}

class CreateEditReviewScreen extends StatefulWidget {
  @override
  _CreateEditReviewScreenState createState() => _CreateEditReviewScreenState();
}

class _CreateEditReviewScreenState extends State<CreateEditReviewScreen> {
  TextEditingController _extraNoteController;
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  ParseModelReviews _review;
  String restaurantId;
  bool _isButtonDisabled = false;

  @override
  void initState() {
    super.initState();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    final CreateEditReviewScreenObject _object =
        ModalRoute.of(context).settings.arguments;

    assert(_object.restaurantId != null, 'RestaurantId');
    _review = _object.reviewModel;

    double _rate = _review != null ? _review.rate : 0;
    String _extraNote = _review != null ? _review.body : "";
    _extraNoteController = TextEditingController(text: _extraNote);

    bloc.rateVal(_rate);
    bloc.noteVal(_extraNote);
    setState(() {
      restaurantId = _object.restaurantId;
    });
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: bloc.rateStream,
        builder: (BuildContext context, AsyncSnapshot rateSnapshot) {
          return StreamBuilder(
              stream: bloc.noteStream,
              builder: (BuildContext context, AsyncSnapshot noteSnapshot) {
                double selectedStar = rateSnapshot.data;
                String noteVal = noteSnapshot.data;
                return _buildBody(context, selectedStar, noteVal);
              });
        });
  }

  Widget _buildBody(BuildContext context, double selectedStar, String noteVal) {
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
        title: Text(_review != null
            ? AppLocalizations.of(context)
                .translate("reviewsCreateEditAppBarTitleEditTxt")
            : AppLocalizations.of(context)
                .translate("reviewsCreateEditAppBarTitleNewTxt")),
        actions: <Widget>[
          FlatButton(
              onPressed: _isButtonDisabled
                  ? null
                  : () async {
                      if (_formKey.currentState.validate()) {
                        FocusScope.of(context).unfocus();

                        setState(() {
                          _isButtonDisabled = true;
                        });
                        AuthUserModel authUserModel =
                            await authProvider.getAuthUserModel();

                        double lastReviewRate =
                            (_review == null ? 0.0 : _review.rate);
                        ParseModelReviews lastModel = _review != null
                            ? _review
                            : ParseModelReviews.emptyReview(
                                authUserModel: authUserModel,
                                restaurantId: restaurantId);

                        ParseModelReviews nextModel =
                            ParseModelReviews.updateReview(
                          model: lastModel,
                          nextRate: selectedStar,
                          nextExtraNote: (noteVal != null && noteVal.length > 0)
                              ? noteVal
                              : "",
                        );

                        ReviewReturnModel returnModel =
                            ReviewReturnModel(selectedStar, noteVal);
                        try {
                          final firestoreDatabase =
                              Provider.of<FirestoreDatabase>(context,
                                  listen: false);
                          await firestoreDatabase.setReview(
                              model: nextModel); // For Review.


                          await ReviewHelper.onSaveReviewAfterHook(restaurantId,
                              lastReviewRate, selectedStar, _review == null);
                        } catch (e) {
                          setState(() {
                            _isButtonDisabled = false;
                          });
                        }

                        ToastUtils.showToast(AppLocalizations.of(context)
                            .translate("toastForSaveSuccess"));
                        // Navigate
                        Navigator.of(context).pop(returnModel);
                      }
                    },
              child: Text(AppLocalizations.of(context)
                  .translate("editModelAppBarRightSaveTitle")))
        ],
      ),
      body: _buildForm(context, selectedStar),
    );
  }

  @override
  void dispose() {
    _extraNoteController.dispose();
    super.dispose();
  }

  Widget _buildRatePanel(BuildContext context, double rateVal) {
    return SmoothStarRating(
        allowHalfRating: false,
        onRated: (v) {
          bloc.rateVal(v);
        },
        starCount: 5,
        rating: rateVal,
        size: 40.0,
        color: Colors.green,
        borderColor: Colors.green,
        spacing: 0.0);
  }

  Widget _buildForm(BuildContext context, double rateVal) {
    return Form(
      key: _formKey,
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.max,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Container(
                child: _buildRatePanel(context, rateVal),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 16),
                child: TextFormField(
                  onChanged: (String txt) {
                    bloc.noteVal(txt);
                  },
                  controller: _extraNoteController,
                  style: Theme.of(context).textTheme.bodyText2,
                  maxLines: 15,
                  validator: (value) => value.isEmpty
                      ? AppLocalizations.of(context)
                          .translate("ReviewCreateEditTaskNoteValidatorMsg")
                      : null,
                  decoration: InputDecoration(
                    enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                            color: Theme.of(context).iconTheme.color,
                            width: 2)),
                    labelText: AppLocalizations.of(context)
                        .translate("modelCreateEditNotesTxt"),
                    alignLabelWithHint: true,
                    contentPadding: new EdgeInsets.symmetric(
                        vertical: 10.0, horizontal: 10.0),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
