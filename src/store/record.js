import firebase from 'firebase/app'
export default {
  actions: {
    async createRecord ({dispatch, commit}, record) {
      try {
        // eslint-disable-next-line no-unused-vars
        const uid = await dispatch('getUid')
        return await firebase.database().ref(`/users/${uid}/records`).push(record)
      } catch (e) {
        commit('setErrot', e)
      }
    }
  }
}
