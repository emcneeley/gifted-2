<template>
<section class="row container-fluid p-4" v-for="g in gifts" :key="g.id">

<GiftsComponents :giftProp="g"/>

</section>
</template>

<script>
import Pop from '../utils/Pop';
import{giftsService} from '../services/GiftsService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';


export default {
  setup() {
    async function getGifts(){
      try {
        await giftsService.getGifts()

      } catch (error) {
        Pop.error(error)
      }
    }
onMounted(()=>{
  getGifts()
})


    return {
gifts: computed(()=>AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
