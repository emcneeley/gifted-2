<template>
    <div class="col-4">
        <div class="elevation-4 rounded">
          <img v-if="giftProp.opened == false" @click="openGift(giftProp.id)" class="img-fluid rounded" src="https://images.unsplash.com/photo-1509024102370-fd7802f4a7a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="">
          <img v-else @click="openGift(giftProp.id)" class="img-fluid rounded" :src="giftProp.url" alt="">

          <p>{{giftProp.tag}}</p>
        </div>
      </div>
</template>


<script>
import { AppState } from '../AppState'
import { Gift } from '../models/Gift'
import { giftsService } from '../services/GiftsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'


export default {
props:{
    giftProp:{type:Gift, required:true}
},

    setup(){
        return {

             async openGift(giftId) {
            try {
                await giftsService.openGift(giftId)
            } catch (error) {
                Pop.error(error)
            }
                
            }
        }

       
    }
}
</script>


<style>

</style>