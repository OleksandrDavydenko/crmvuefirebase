import firebase from 'firebase/app'


// asdasdasd dsadasd
//// TEST BRANCH

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    }
  }
}
