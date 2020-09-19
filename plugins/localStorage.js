import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'ieatta',
    paths: ['auth.user']
  })(store)
}
