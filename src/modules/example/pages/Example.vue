<script lang="ts" setup>
  import { mapActions, storeToRefs } from "pinia"
  import { onMounted, ref } from "vue"
  // import Hello from "@/components/HelloWorld.vue"
  import { useCounterStore } from "@/store/modules/example"
  import { usePokemonStore } from "@/store/modules/pokemon"

  const welcome = ref("Vue 3 + TypeScript + Vite + Pinia")

  // Instance to store
  const main = useCounterStore()
  const pokemon = usePokemonStore()
  // Make data reactive
  const { counter, doubleCounter } = storeToRefs(main)
  const { pokemonsName } = storeToRefs(pokemon)
  // Mapping actions
  const { increment } = mapActions(useCounterStore, ["increment"])
  // Reset store data
  const reset = () => main.$reset()
  // Call action from store to get pokemons on mounted lifecycle
  onMounted(() => pokemon.getPokemons())
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<template>
  <h1>{{ welcome }}</h1>
  <!-- <Hello msg="I'm a example component with composition API" /> -->
  <h3>使用状态管理 pinia</h3>
  <p>数量: {{ counter }}</p>
  <p>加倍: {{ doubleCounter }}</p>
  <el-button type="primary" @click="increment">增加</el-button>
  <el-button type="primary" @click="reset">重置</el-button>

  <div v-for="(poke, i) of pokemonsName" :key="i">{{ poke }}</div>
</template>
