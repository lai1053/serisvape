// 所有产品的单品图片数据
// 注意：VAPLIQ_e_liquid 放在最后，用于在 Command Center 中最后展示
export const allProducts = {
  'Vapanda_2_In_1_80K': {
    name: 'VAPANDA 2 IN 1 80K',
    basePath: '/img/all_img/product/Vapanda_2_In_1_80K',
    imageType: 'single_product',
    images: [
      'Blue_Razz_Lemonade_Apple_Peach.webp',
      'Blueberry_Ice_Mixed_Berries.webp',
      'Blueberry_Mint_Strawberry_Raspberry_Cherry.webp',
      'Blueberry_Watermelon_Strawberry_Watermelon.webp',
      'Double_Apple_Peach_Ice.webp',
      'Kiwi_Passion_Fruit_Guava_Sour_Apple_Blueberry.webp',
      'Lemon_Lime_Peach_Ice.webp',
      'Peach_Mango_Watermelon_Watermelon_Ice.webp',
      'Red_Bull_Blue_Razz_Ice.webp',
      'Red_Energy_Ice_Cherry_Cola.webp'
    ]
  },
  'VAAPEE_DOUBLE_45K': {
    name: 'VAAPEE DOUBLE 45K',
    basePath: '/img/all_img/product/VAAPEE_DOUBLE_45K',
    imageType: 'front',
    images: [
      'BLUEBERRY_WATERMELON_STRAWBERRY_MANGO.webp',
      'CHERRY_COLA_WATERMELON_ICE.webp',
      'DOUBLE_APPLE_ICE_STRAWBERRY_DRAGONFRUIT.webp',
      'GUMMY_BEAR_RAINBOW_CANDY.webp',
      'KIWI_PASSION_FRUIT_GUAVA_BLUEBERRY_ICE.webp',
      'RED_BULL_BLUEBERRY_WATERMELON.webp',
      'STRAWBERRY_RASPBERRY_CHERRY_ICE_BLUEBERRY_MINT.webp',
      'STRAWBERRY_RASPBERRY_CHERRY_ICE_GRAPE_ICE.webp',
      'STRAWBERRY_WATERMELON_COLA_ICE.webp',
      'TRIPLE_MELON_PINEAPPLE_COCONUT.webp'
    ]
  },
  'VAAPEE_X_30K': {
    name: 'VAAPEE X 30K',
    basePath: '/img/all_img/product/VAAPEE_X_30K',
    imageType: 'single_product',
    images: [
      'BlueBerry_Ice.webp',
      'Blue_Razz_Ice.webp',
      'Cola_Ice.webp',
      'Double_apple.webp',
      'Fruit_Gum.webp',
      'Kiwi_Passion_Fruit.webp',
      'Monster_Drink.webp',
      'Peach_Ice.webp',
      'Pina_colada.webp',
      'Strawberry_Watermelon.webp',
      'grape_ice.webp',
      'lush_ice.webp'
    ]
  },
  'Vaapee_Tornado_25K': {
    name: 'VAAPEE TORNADO 25K',
    basePath: '/img/all_img/product/Vaapee_Tornado_25K',
    imageType: 'single_product',
    images: [
      'Blue_Raspberry_Ice.webp',
      'Blueberry_Ice.webp',
      'Blueberry_Orange_gummy.webp',
      'Cherry_Cola.webp',
      'Kiwi_Berry_Mango.webp',
      'Kiwi_Passion_Fruit_Guava.webp',
      'Lemone_Bubble_Gum.webp',
      'Peach_Ice.webp',
      'Red_BERRIES.webp',
      'Strawberry_Raspberry_Cherry.webp',
      'Strawberry_Watermelon.webp',
      'Watermelon_Ice.webp'
    ]
  },
  'Vapanda_Tornado_18K': {
    name: 'VAPANDA TORNADO 18K',
    basePath: '/img/all_img/product/Vapanda_Tornado_18K',
    imageType: 'single_product',
    images: [
      'Blue_RAZZ_Lemonade.webp',
      'Blue_razz_ice.webp',
      'Blueberry_ice.webp',
      'CHERRY_COLA.webp',
      'Cranberry_Grape.webp',
      'Grape_ice.webp',
      'Gummy_bear.webp',
      'Kiwi_passion_fruit_guava.webp',
      'Mixed_berries.webp',
      'PEACH_ICE.webp',
      'STRAWBERRY_ICE_CREAM.webp',
      'Strawberry_mango.webp',
      'Strawberry_raspberry_cherry.webp',
      'Strawberry_watermelon.webp',
      'Watermelon_ice.webp'
    ]
  },
  'VAPLIQ_e_liquid': {
    name: 'VAPLIQ E-Liquid',
    basePath: '/img/all_img/product/VAPLIQ_e_liquid',
    imageType: 'single_product',
    images: [
      'BLUE_RAZZ_LEMONADE.webp',
      'Blue_Razz_Ice.webp',
      'Blueberry_CRANBERRY_GRAPE.webp',
      'Blueberry_Ice.webp',
      'Cherry_Cola.webp',
      'Double_Apple_Ice.webp',
      'Grape_Ice.webp',
      'Gummy_Bear.webp',
      'KIWI_PASSION_FRUIT_GUAVA.webp',
      'Kiwi_Berry_Mango.webp',
      'Mixed_Berries.webp',
      'PEACE_MANGO_PINEAPPLE.webp',
      'Peach_Ice.webp',
      'Straw_Raspberry_Cherry.webp',
      'Strawberry_Banana.webp',
      'Strawberry_Ice.webp',
      'Strawberry_Kiwi.webp',
      'Strawberry_Watermelon.webp',
      'Triple_Mango.webp',
      'Watermelon_Ice.webp'
    ]
  }
}

// 生成所有产品的扁平列表用于展示
export const getAllProductsFlat = () => {
  const flatList = []
  Object.keys(allProducts).forEach(productKey => {
    const product = allProducts[productKey]
    product.images.forEach(imageFile => {
      flatList.push({
        series: product.name,
        seriesKey: productKey,
        image: `${product.basePath}/${product.imageType}/${imageFile}`,
        fileName: imageFile,
        color: getColorForProduct(productKey)
      })
    })
  })
  return flatList
}

// 为每个产品系列分配颜色
const getColorForProduct = (productKey) => {
  const colors = {
    'VAPLIQ_e_liquid': '#FF00FF',
    'Vapanda_2_In_1_80K': '#00FFFF',
    'VAAPEE_DOUBLE_45K': '#FFD700',
    'VAAPEE_X_30K': '#FF1493',
    'Vaapee_Tornado_25K': '#9370DB',
    'Vapanda_Tornado_18K': '#39FF14'
  }
  return colors[productKey] || '#39FF14'
}
