export const state = () => ({
  photos: []
})

export const mutations = {
  setPhotos(state, photos) {
    state.photos = photos
  }
}

export const actions = {
  async fetch({ commit }) {
    const photos = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos?_limit=1')
    commit('setPhotos', photos)
  }
}

export const getters = {
  photos: s => s.photos
}
