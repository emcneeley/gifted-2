import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService.js"

class GiftsService {
    async getGifts() {
        const res = await api.get('/api/gifts')
        // logger.log('[GETTING GIFTS]', res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
        // logger.log(AppState.gifts)


    }

    async openGift(giftId) {
        const foundGift = AppState.gifts.find(g => g.id == giftId)
        foundGift.opened = true
        const res = await api.put('/api/gifts/' + giftId, foundGift)
        const index = AppState.gifts.findIndex(g => g.id == giftId)
        AppState.gifts.splice(index, 1, new Gift(res.data))

    }


}

export const giftsService = new GiftsService