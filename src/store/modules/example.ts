import { defineStore } from "pinia"

export const useCounterStore = defineStore("main", {
  state: () => ({
    name: "jeskson",
    counter: 0,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
  },
})
