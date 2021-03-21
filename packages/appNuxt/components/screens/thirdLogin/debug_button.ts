import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase/app'
import { namespace } from 'vuex-class'
import Cookies from 'universal-cookie'
import { FirebaseHelper } from '~/database/firebase_helper'
import { IAuthUser } from '~/database/models/auth_user_model'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class GoogleLoginButton extends Vue {
  @auth.Mutation
  public SET_AUTH_USER!: (payload: IAuthUser | null) => void

  private isLogging = false

  async afterSignInWithGoogle (res: any) {
    const model: IAuthUser = {
      uid: 'OEuYzdWrgSukOS6KxKSOx7LsfvL2',
      email: 'chery@gmail.com',
      displayName: 'Cheryl Philly',
      photoURL: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg'
    }
    // Update vue's store status.
    this.SET_AUTH_USER(model)
    const cookies = new Cookies()
    cookies.set('credential', true, { path: '/' })
    // Update the firebase's user info.
    await FirebaseHelper.onLoginAfterHook(
      this.$fire.firestore,
      model)
    // Finally, return the last page.
    this.isLogging = false
    this.goBack()
  }

  goBack () {
    const returnUrl = (this.$route.query.return_url as string) || '/'
    this.$router.push(returnUrl, () => {
    })
  }

  async onButtonClick (event) {
    if (this.isLogging) {
      return
    }
    this.isLogging = true
    await this.afterSignInWithGoogle({})
  }

  onButtonClickxxx (event) {
    if (this.isLogging) {
      return
    }
    this.isLogging = true
    const provider = new firebase.auth.GoogleAuthProvider()
    this.$fire.auth.signInWithPopup(provider)
      .then(this.afterSignInWithGoogle).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential
        console.log('google error:', errorMessage)
        this.isLogging = false
      // debugger
      })
  }

  mounted () {
  }
}
