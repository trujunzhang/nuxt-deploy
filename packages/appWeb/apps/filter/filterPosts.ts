import { UpdatePhotosListTask } from '@appActionUtils/index' // '@app/library' //  '@app/actions-utils'

export class FilterPosts {
  /**
   * 1. Special Task for Photos List.
   *    when the last task already fetched the total photos count.
   *    So this time need to keep the 'total' field value.
   * @param terms
   * @param lastTask
   * @returns {{id: Any.listId, ready: boolean, totalCount: number, limit: Any.limit, firstPagination: boolean, pageIndex: (Any.pageIndex|number), results: Array}}
   */
  static getDefaultListTask(terms: IParseQueryBaseTerm, lastTask: any = {}): IListTask {
    const { listId, allItems = false, limit = 10, pageIndex } = terms
    return {
      id: listId,
      ready: false,
      totalCount: lastTask.totalCount || -1,
      limit,
      allItems,
      firstPagination: true,
      pageIndex: pageIndex || 1,
      results: []
    }
  }

  static getDefaultPhotosListTask(
    terms: IParseQueryBaseTerm,
    lastTask: any = {}
  ): IListWithPhotosDictTask {
    return {
      ...FilterPosts.getDefaultListTask(terms, lastTask),
      listPhotosDict: {}
    }
  }

  /**
   * Filter the taskList.
   *
   * @param listContainerTasks
   * @param listId
   * @param lastTask
   * @returns {Any}
   */
  static byListId(
    { listContainerTasks },
    { listId }: IParseQueryBaseTerm,
    lastTask: IListTask
  ): IListTask {
    // TODO: DJZHANG(25/12/2018)
    const task: any = listContainerTasks[listId || '']
    if (!!task) {
      return task
    }
    return lastTask
  }

  /**
   * Filter the photosList.
   * Also can be updated when owned different users for single photo.
   * @param {any} listContainerTasks
   * @param {any} listId
   * @param lastTask
   * @returns {any}
   */
  static photosListByListId(
    { listContainerTasks },
    { listId }: IParseQueryBaseTerm,
    lastTask: IListWithPhotosDictTask
  ): IListWithPhotosDictTask {
    let photosList = lastTask
    // TODO: DJZHANG(25/12/2018)
    const task = listContainerTasks[listId || '']
    if (!!task) {
      photosList = task
    }
    const updatedPhotoModel = listContainerTasks.updatedPhotoModel
    if (!!updatedPhotoModel) {
      photosList = UpdatePhotosListTask.update(photosList, updatedPhotoModel)
    }

    return photosList
  }

  static getModelByObjectId(
    { detailedModelsOverlay },
    forParseId,
    lastModel: any = null,
    payLoadKey = 'currentModel'
  ) {
    const payLoad = detailedModelsOverlay[payLoadKey]
    if (!!payLoad) {
      const { parseId, model } = payLoad
      if (!!parseId && parseId === forParseId) {
        return model
      }
    }
    return lastModel
  }
}
