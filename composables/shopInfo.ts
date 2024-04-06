export function useShopInfo() {
    const shopInfo = useState('shopInfo', () => null);
    return shopInfo;
}

export function useAuthenticatedShopInfo() {
    const shopInfo = useState('shopInfo', () => null);
    return computed(() => {
        const shopInfoValue = unref(shopInfo)
        if (!shopInfoValue) {
            throw createError('Shop info not found')
        }
        return shopInfoValue;
    })
}