import * as admin from 'firebase-admin'

admin.initializeApp()

const db = admin.firestore()

// https://github.com/hidjou/classsed-react-firebase-functions/blob/master/functions/util/admin.js
export { admin, db }
