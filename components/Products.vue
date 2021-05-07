<template>
  <div>
    <div v-for="product in products" :key="product.title">
      <div>{{ product.title }}</div>
      <div>{{ product.discription }}</div>
      <!-- <img :src="require(`@/assets/images/${product.imageName}`)" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export interface DataType {
  products: {
    title: string
    imageName: string
    discription: string
  }[]
}

export default Vue.extend({
  data: (): DataType => ({
    products: [
      {
        title: 'じゃんけんレーティング',
        imageName: 'myIcon1.jpeg',
        discription: 'じゃんけんのオンライン対戦が出来るwebアプリです',
      },
      {
        title: '過去問管理システム(KMS)',
        imageName: 'None',
        discription: '大量の過去問の仕分けをするwebアプリです',
      },
      {
        title: 'timetable-assistant',
        imageName: 'None',
        discription: '直近の時間割を答えてくれるgoogleアシスタントアプリです',
      },
    ],
  }),
})
</script>
