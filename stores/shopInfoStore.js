import {ref, computed} from 'vue'

export const useShopInfoStore = defineStore('shopInfo', () => {

    const shopInfo = ref(null)

    const fetchShopInfo = async () => {
        // const res = await useFetch('/api/application/auth')
        // if (res.error)
        //     throw createError('Failed to fetch shop info')

        //shopInfo.value = res.data
        shopInfo.value = {
            shopId: 1,
            mallId: 1,
        }
    }

    const getShopInfo = async () => {
        if (!shopInfo.value) {
            await fetchShopInfo()
        }

        return shopInfo.value
    }

    return {
        shopInfo,
        getShopInfo
    }
})
