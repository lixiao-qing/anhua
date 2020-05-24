export const mutations = {
  changeData(state, data) {
    state[data.key] = data.value;
  },

  changeLikeData(state, index) {
    state.likeData.splice(index, 1);
  }
}