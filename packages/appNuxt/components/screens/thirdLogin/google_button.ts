import { Component, Prop, Vue } from 'vue-property-decorator'
import firebase from 'firebase/app'
import { namespace } from 'vuex-class'
import { FirebaseHelper} from '~/database/firebase_helper'
import { IAuthUser } from '~/database/models/auth_user_model'
const auth = namespace('auth')

@Component({
  components: {}
})
export default class GoogleLoginButton extends Vue {
  @auth.Mutation
  public SET_AUTH_USER!: (payload: IAuthUser) => void

  async afterSignInWithGoogle (res: any) {
    const model:IAuthUser = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      photoURL: res.user.photoURL
    }
    // Update vue's store status.
    this.SET_AUTH_USER(model)
    // Update the firebase's user info.
    await FirebaseHelper.onLoginAfterHook(
      this.$fireStore,
      model)
  }

  onButtonClick (event) {
    // debugger
    // const currentUser = this.$fireAuth.currentUser
    // debugger

    const provider = new firebase.auth.GoogleAuthProvider()
    this.$fireAuth.signInWithPopup(provider).then(
      this.afterSignInWithGoogle
    ).catch((ex) => {
      // debugger
    })
  }
}
