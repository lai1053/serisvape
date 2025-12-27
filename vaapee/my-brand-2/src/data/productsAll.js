// 所有产品的单品图片数据
// 注意：VAPLIQ_e_liquid 放在最后，用于在 Command Center 中最后展示
export const allProducts = {
  'Vapanda_2_In_1_80K': {
    name: 'VAPANDA 2 IN 1 80K',
    basePath: '/img/all_img/product/Vapanda_2_In_1_80K',
    imageType: 'single_product',
    images: [
      'Blue_Razz_Lemonade_Apple_Peach.png',
      'Blueberry_Ice_Mixed_Berries.png',
      'Blueberry_Mint_Strawberry_Raspberry_Cherry.png',
      'Blueberry_Watermelon_Strawberry_Watermelon.png',
      'Double_Apple_Peach_Ice.png',
      'Kiwi_Passion_Fruit_Guava_Sour_Apple_Blueberry.png',
      'Lemon_Lime_Peach_Ice.png',
      'Peach_Mango_Watermelon_Watermelon_Ice.png',
      'Red_Bull_Blue_Razz_Ice.png',
      'Red_Energy_Ice_Cherry_Cola.png'
    ]
  },
  'VAAPEE_DOUBLE_45K': {
    name: 'VAAPEE DOUBLE 45K',
    basePath: '/img/all_img/product/VAAPEE_DOUBLE_45K',
    imageType: 'front',
    images: [
      'BLUEBERRY_WATERMELON_STRAWBERRY_MANGO.png',
      'CHERRY_COLA_WATERMELON_ICE.png',
      'DOUBLE_APPLE_ICE_STRAWBERRY_DRAGONFRUIT.png',
      'GUMMY_BEAR_RAINBOW_CANDY.png',
      'KIWI_PASSION_FRUIT_GUAVA_BLUEBERRY_ICE.png',
      'RED_BULL_BLUEBERRY_WATERMELON.png',
      'STRAWBERRY_RASPBERRY_CHERRY_ICE_BLUEBERRY_MINT.png',
      'STRAWBERRY_RASPBERRY_CHERRY_ICE_GRAPE_ICE.png',
      'STRAWBERRY_WATERMELON_COLA_ICE.png',
      'TRIPLE_MELON_PINEAPPLE_COCONUT.png'
    ]
  },
  'VAAPEE_X_30K': {
    name: 'VAAPEE X 30K',
    basePath: '/img/all_img/product/VAAPEE_X_30K',
    imageType: 'single_product',
    images: [
      'BlueBerry_Ice.png',
      'Blue_Razz_Ice.png',
      'Cola_Ice.png',
      'Double_apple.png',
      'Fruit_Gum.png',
      'Kiwi_Passion_Fruit.png',
      'Monster_Drink.png',
      'Peach_Ice.png',
      'Pina_colada.png',
      'Strawberry_Watermelon.png',
      'grape_ice.png',
      'lush_ice.png'
    ]
  },
  'Vaapee_Tornado_25K': {
    name: 'VAAPEE TORNADO 25K',
    basePath: '/img/all_img/product/Vaapee_Tornado_25K',
    imageType: 'single_product',
    images: [
      'Blue_Raspberry_Ice.png',
      'Blueberry_Ice.png',
      'Blueberry_Orange_gummy.png',
      'Cherry_Cola.png',
      'Kiwi_Berry_Mango.png',
      'Kiwi_Passion_Fruit_Guava.png',
      'Lemone_Bubble_Gum.png',
      'Peach_Ice.png',
      'Red_BERRIES.png',
      'Strawberry_Raspberry_Cherry.png',
      'Strawberry_Watermelon.png',
      'Watermelon_Ice.png'
    ]
  },
  'Vapanda_Tornado_18K': {
    name: 'VAPANDA TORNADO 18K',
    basePath: '/img/all_img/product/Vapanda_Tornado_18K',
    imageType: 'single_product',
    images: [
      'Blue_RAZZ_Lemonade.png',
      'Blue_razz_ice.png',
      'Blueberry_ice.png',
      'CHERRY_COLA.png',
      'Cranberry_Grape.png',
      'Grape_ice.png',
      'Gummy_bear.png',
      'Kiwi_passion_fruit_guava.png',
      'Mixed_berries.png',
      'PEACH_ICE.png',
      'STRAWBERRY_ICE_CREAM.png',
      'Strawberry_mango.png',
      'Strawberry_raspberry_cherry.png',
      'Strawberry_watermelon.png',
      'Watermelon_ice.png'
    ]
  },
  'VAPLIQ_e_liquid': {
    name: 'VAPLIQ E-Liquid',
    basePath: '/img/all_img/product/VAPLIQ_e_liquid',
    imageType: 'single_product',
    images: [
      'BLUE_RAZZ_LEMONADE.png',
      'Blue_Razz_Ice.png',
      'Blueberry_CRANBERRY_GRAPE.png',
      'Blueberry_Ice.png',
      'Cherry_Cola.png',
      'Double_Apple_Ice.png',
      'Grape_Ice.png',
      'Gummy_Bear.png',
      'KIWI_PASSION_FRUIT_GUAVA.png',
      'Kiwi_Berry_Mango.png',
      'Mixed_Berries.png',
      'PEACE_MANGO_PINEAPPLE.png',
      'Peach_Ice.png',
      'Straw_Raspberry_Cherry.png',
      'Strawberry_Banana.png',
      'Strawberry_Ice.png',
      'Strawberry_Kiwi.png',
      'Strawberry_Watermelon.png',
      'Triple_Mango.png',
      'Watermelon_Ice.png'
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
