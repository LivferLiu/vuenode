const defaultState = () => {
  return {
    user_by_topic: {},
    name: 1
  };
};
const state = defaultState();

const mutations = {
  //重置state
  RESET_STATE: state => {
    Object.assign(state, defaultState);
  },
  //保存当前文章的作者
  STORE_USER_BY_TOPIC: (state, user) => {
    state.user_by_topic = user;
  }
};

const actions = {
  storeTopiAuthor: ({ commit }, userInfo) => {
    commit("STORE_USER_BY_TOPIC", userInfo);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
