import i18n from '@/i18n'

// 产品ID映射：实际产品ID -> JSON中的ID
const productIdMap = {
  'ultra-50k': 'Vapanda_Ultra_50K',
  'star-100k': 'VAAPEE_STAR_100K',
  'pro-40k': 'VAPANDA_PRO_40K',
  '4in1-120k': 'VAPANDA_4_IN_1_120K',
  // ProductDetailAll 系列ID直接匹配
  'Vapanda_2_In_1_80K': 'Vapanda_2_In_1_80K',
  'VAAPEE_DOUBLE_45K': 'VAAPEE_DOUBLE_45K',
  'VAAPEE_X_30K': 'VAAPEE_X_30K',
  'Vaapee_Tornado_25K': 'VAAPEE_Tornado_25K',
  'Vapanda_Tornado_18K': 'Vapanda_Tornado_18K',
  'VAPLIQ_e_liquid': 'VAPLIQ_e_liquid'
}

// 获取产品营销文案
export const getProductMarketing = (productId) => {
  const mappedId = productIdMap[productId]
  if (!mappedId) return null
  const items = i18n.global.tm('productMarketing.items')
  if (!Array.isArray(items)) return null
  const match = items.find((item) => item.id === mappedId)
  return match ? { description: match.description, flavors: match.flavors } : null
}

// 格式化描述文本（将换行符转换为段落）
export const formatDescription = (text) => {
  if (!text) return []
  return text.split('\n').filter(line => line.trim() !== '').map(line => line.trim())
}

export default {
  getProductMarketing,
  formatDescription
}
