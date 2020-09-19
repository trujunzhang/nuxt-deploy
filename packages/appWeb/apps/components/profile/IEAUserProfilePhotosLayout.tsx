import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { PageFormHelper, PaginationTerms } from '@appUtils/index'
import { loadPhotosBrowser } from '@web/actions'
import { FilterPosts, FilterRoutes } from '@appFilter/index'
import { connect } from 'react-redux'

interface IIEAUserProfilePhotosLayoutStateProps {
  listContainerTasks: IListContainerTasks
}

interface IIEAUserProfilePhotosLayoutDispatchProps {
  loadPhotosBrowserAction: any
}

interface IIEAUserProfilePhotosLayoutProps
  extends IIEAUserProfilePhotosLayoutStateProps,
  IIEAUserProfilePhotosLayoutDispatchProps {
  userProfile: IParseModelUsers
}

interface IIEAUserProfilePhotosLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEAUserProfilePhotosLayoutPropsWithRouter = IIEAUserProfilePhotosLayoutProps &
  IIEAUserProfilePhotosLayoutWithRouterProps

interface IIEAUserProfilePhotosLayoutState {
  photosTerms: IParseQueryPhotoTerm
  photosListTask: IListWithPhotosDictTask
  photosBrowserPageForm: string
  selectPhotoIndex: number
}

function mapDispatchToProps(dispatch) {
  return {
    // List
    loadPhotosBrowserAction: (terms) => dispatch(loadPhotosBrowser(terms))
  }
}

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks
  }
}

@(withRouter as any)
class IEAUserProfilePhotosLayout extends React.Component<
IIEAUserProfilePhotosLayoutProps,
IIEAUserProfilePhotosLayoutState
> {
  constructor(props: IIEAUserProfilePhotosLayoutProps) {
    super(props)

    const { router } = props as IEAUserProfilePhotosLayoutPropsWithRouter
    const photosBrowserPageForm = PageFormHelper.getPageFormType(
      Types.model.PARSE_USERS,
      props as IEAUserProfilePhotosLayoutPropsWithRouter
    )
    const photosTerms = PaginationTerms.generatePhotoTerm({
      objectSchemaName: Types.model.PARSE_USERS,
      forObjectUniqueId: props.userProfile.id,
      pageForm: photosBrowserPageForm,
      router,
      creatorId: props.userProfile.id
    })
    this.state = {
      // photos
      photosTerms,
      photosListTask: FilterPosts.getDefaultPhotosListTask(photosTerms),
      selectPhotoIndex: -1,
      // Common
      photosBrowserPageForm
    }
  }

  componentWillReceiveProps(nextProps: IIEAUserProfilePhotosLayoutProps) {
    const { router } = nextProps as IEAUserProfilePhotosLayoutPropsWithRouter
    const { photosBrowserPageForm: lastPageForm, photosTerms: lastPhotosTerms } = this.state
    const newPageForm = PageFormHelper.getPageFormType(
      Types.model.PARSE_USERS,
      nextProps as IEAUserProfilePhotosLayoutPropsWithRouter,
      this.state.photosBrowserPageForm
    )

    const newPhotosTerms = PaginationTerms.generatePhotoTerm({
      objectSchemaName: Types.model.PARSE_USERS,
      forObjectUniqueId: nextProps.userProfile.id,
      pageForm: newPageForm,
      router,
      creatorId: nextProps.userProfile.id
    })

    const photosListTask = FilterPosts.photosListByListId(
      nextProps,
      this.state.photosTerms,
      this.state.photosListTask
    )
    this.setState({
      // photos
      photosTerms: newPhotosTerms,
      photosListTask,
      selectPhotoIndex: FilterRoutes.getSelectPhoto(
        nextProps as IEAUserProfilePhotosLayoutPropsWithRouter,
        photosListTask,
        this.state.selectPhotoIndex
      ),
      // Common
      photosBrowserPageForm: newPageForm
    })
    this.checkNeedUpdate(lastPageForm, lastPhotosTerms, newPageForm, newPhotosTerms, photosListTask)
  }

  checkNeedUpdate(lastPageForm, lastPhotosTerms, newPageForm, newPhotosTerms, photosListTask) {
    if (
      FilterRoutes.checkNeedUpdatePhotosTask(lastPageForm, newPageForm) ||
      lastPhotosTerms.pageIndex !== newPhotosTerms.pageIndex // Change page index.
    ) {
      this.setState({
        // photos
        photosTerms: newPhotosTerms,
        photosListTask: FilterPosts.getDefaultPhotosListTask(newPhotosTerms, photosListTask),
        selectPhotoIndex: -1
      })
      this.props.loadPhotosBrowserAction(newPhotosTerms)
    }
  }

  componentDidMount() {
    this.props.loadPhotosBrowserAction(this.state.photosTerms)
  }

  render() {
    const { userProfile } = this.props
    const { photosListTask, photosBrowserPageForm } = this.state
    if (photosListTask.ready) {
      switch (photosBrowserPageForm) {
        case Types.common.PAGE_SINGLE_SELECTED_PHOTO_FORM: {
          return (
            <Telescope.IEAPhotosSingleLayout
              photoTitleType={Types.photoBrowserTitle.PHOTO_BROWSER_LOGGED_USER_TITLE}
              forObject={userProfile}
              objectSchemaName={Types.model.PARSE_USERS}
              photosListTask={photosListTask}
            />
          )
        }
        case Types.common.PAGE_PHOTOS_BROWSER_FORM:
        case Types.common.PAGE_PHOTOS_BROWSER_FORM_WITH_PHOTO_OVERLAY: {
          return (
            <div>
              <Telescope.IEAPhotosBrowserLayout
                userProfile={this.props.userProfile}
                forObject={userProfile}
                objectSchemaName={Types.model.PARSE_USERS}
                photosListTask={this.state.photosListTask}
                photoTitleType={Types.photoBrowserTitle.PHOTO_BROWSER_LOGGED_USER_TITLE}
                barType={Types.paginationNavBar.PAGINATION_NAVIGATION_BAR_FOR_NORMAL}
              />
            </div>
          )
        }
        default: {
          throw new Error(`Not found photosBrowserPageForm to render! ${photosBrowserPageForm}`)
        }
      }
    }
    return <Telescope.F8LoadingView loadingClass="placeholder_1WOC3" />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAUserProfilePhotosLayout)
