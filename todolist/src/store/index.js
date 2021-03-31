import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import vuexPersist from "vuex-persist";
export default new Vuex.Store({
  state: {
    todolist: [],
    todo: [],
    history: []
  },
  mutations: {
    add(state, obj) {
      state.todolist.push(obj)
    },
    change(state, i) {
      state.todolist.forEach((item, index) => {
        if (index == i) {
          if (item.state == 1) {
            item.state = 2
          } else {
            item.state = 1
          }
        }
      })
    },
    cancel(state, i) {
      state.todolist.forEach((item, index) => {
        if (index == i) {
          if (item.state == 1) {
            item.state = 3
          } else if (item.state == 2) {
            item.state = 3
          } else {
            item.state = 1
          }
        }
      })
    },
    app(state, sel) {
      state.todo = []
      state.todolist.forEach((item) => {
        if (item.title == sel) {
          state.todo.push(item)
        }
      })
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
})
