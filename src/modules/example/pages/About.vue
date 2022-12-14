<script lang="ts" setup>
  import { usePokemonStore } from "@/store/modules/pokemon"
  import { storeToRefs } from "pinia"

  const pokemon = usePokemonStore()
  const { pokemonsName } = storeToRefs(pokemon)
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<template>
  <h3>欢迎来到欢迎页面</h3>
  <p>接口数据</p>
  <div>{{ pokemonsName }}</div>
</template>
