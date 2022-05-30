<template>
  <div>
  <div class="container">
    <Hero-file />
    <Large-Card-Display
      v-for="cardInfo in largeCardInfo"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
    <Small-Card-Display
      v-for="cardInfo in smallCardSections"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
  </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "@/assets/data.js"
export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections
    }
  }
}
</script>
<style scoped>
</style>
