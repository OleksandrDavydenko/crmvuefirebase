import firebase from 'firebase/app'

export default {
  actions: {
    async fetchCategories ({commit, dispatch}) {
      try {
        // eslint-disable-next-line no-unused-vars
        const uid = await dispatch('getUid')
        // eslint-disable-next-line no-unused-vars
        const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
        /* const cats = []
        Object.keys(categories).forEach(key => {
          cats.push({
            title: categories[key].title,
            limit: categories[key].limit,
            id: key
          })
        })
        return cats */

        // строка ниже вместо кода закоментированого выше.
        return Object.keys(categories).map(key => ({...categories[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async createCategory ({commit, dispatch}, {title, limit}) {
      try {
        // eslint-disable-next-line no-unused-vars
        const uid = await dispatch('getUid')
        // eslint-disable-next-line no-unused-vars
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, limit})
        return {title, limit, id: category.key}
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
