export class ReducerTakenPhotosHelper {
  /**
   *  Update the single comment.
   * @param payload
   * @param states
   */
  static pushSingleComment(payload: IWriteTakenPhotosPayload, states) {
    const { savedTakenPhotoInstance } = payload

    return states.push(savedTakenPhotoInstance)
  }
}
