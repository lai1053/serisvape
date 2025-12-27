# GEMINI_DESIGN.v1

## 1. 品牌与气质

- **关键词**：Electric (带电的)、Cyberpunk (赛博朋克)、Bold (大胆)、High-Energy (高能)。
- **整体氛围说明**： 页面应当呈现出一种“夜晚霓虹灯”的视觉张力。利用高饱和度的蓝紫色背景营造深邃的科技感，通过高亮的荧光绿作为视觉引导（Action），传达“Full Power, Full Fun”的品牌核心，让用户感受到产品的爆发力和娱乐属性。

## 2. 设计 Tokens

### 颜色（基于 VAAPEE 视觉稿提取）

这里采用了你设计中最大胆的撞色方案，并规范了语义：

- **brand.bg**: `#1A1A40` (深蓝紫，用于 Hero 区域或页面底层，保持深邃感) 或 `#2B45FF` (设计稿中出现的大面积电光蓝，作为主视觉背景)
- **brand.primary**: `#39FF14` (荧光毒液绿，核心强调色，用于按钮、Slogan、图标)
- **brand.secondary**: `#FF00FF` (霓虹粉，辅助强调，用于渐变或次级标签，增加赛博感)
- **brand.text.main**: `#FFFFFF` (纯白，用于所有主标题和正文，保证在深色背景下的极致对比)
- **brand.card.bg**: `#000000` (纯黑，用于卡片背景，让上方的产品图和绿色文字更跳脱)

### 字体层级（Desktop 标准，Mobile 等比缩放）

建议使用宽体无衬线字体（如 *Inter, Roboto, 或 Rajdhani*）来强化科技感。

- **H1 (Display)**: 96px / 1.0 / Heavy / 用于 "Full Power, Full Fun" 这种超级 Slogan。
- **H2 (Section Title)**: 48px / 1.2 / Bold / 用于 "NEW ARRIVAL", "ALL COLLECTIONS"。
- **H3 (Product Name)**: 24px / 1.4 / Bold / 用于卡片内的产品名称。
- **Body**: 16px / 1.6 / Regular / 用于产品描述或次要信息。
- **Button**: 18px / 1.0 / Bold / 全大写，强调行动力。

### 间距系统（Tailwind 尺度映射建议）

- **sectionY**: `py-24` (96px) / 模块与模块之间保持巨大的呼吸感，不要挤在一起。
- **cardPadding**: `p-6` (24px) / 卡片内部留白。
- **gridGap**: `gap-8` (32px) / 栅格之间的间距。
- **componentSpacing**: `mb-4` (16px) / 标题与内容的间距。

## 3. 布局约定

- **主容器宽度**：`max-w-[1440px]` 或 `container` (Tailwind 默认)，在大屏上居中。
- **响应式断点变化**：
  - **Mobile**: 单栏流式布局，所有横向排列变为纵向堆叠。Hero 图在字上方。
  - **Desktop**: 保持设计稿中的多列布局（2列、3列或 Bento 风格）。
- **页面滚动节奏**：
  1. **Hero**: 视觉冲击（黑/蓝背景）。
  2. **Product List**: 节奏紧凑的产品展示（蓝色背景）。
  3. **Lifestyle**: 错落有致的图片墙（Bento Grid）。
  4. **Slogan**: 巨大的文字排版区，视觉暂留（纯色背景）。
  5. **Social/Footer**: 黑色底收尾。

## 4. 组件规范

### NavBar（顶栏）

- **背景变化**：
  - 初始状态：透明背景（Transparent），文字白色，融入 Hero 区域。
  - 滚动后：变为磨砂黑（`bg-black/80` + `backdrop-blur`），固定在顶部。
- **结构**：
  - 左侧：品牌 Logo（白色或荧光绿）。
  - 中间：导航链接（Desktop 显示，Mobile 隐藏收入汉堡菜单）。
  - 右侧：搜索、购物车图标。
- **顶部警告条**：必须保留顶部的黑色警告条（尼古丁警告），这是行业合规要求，字体需极小且清晰。

### Hero Section（首屏大图）

- **视觉**：产品必须是主角。建议使用“手持产品”的特写图，增强代入感。
- **遮罩**：图片底部叠加一层从透明到 `brand.bg` 的线性渐变，保证文字区域的可读性。
- **文案**：主标题 "VAAPEE STAR" 需使用发光效果（Text Shadow）。
- **交互**：鼠标移动时，背景可能会有轻微的视差移动。

### New Arrival & Carousel（新品/轮播区）

- **布局**：
  - **New Arrival**: 左右两栏大卡片。左侧人物，右侧产品，形成“人与物”的呼应。
  - **Carousel**: 下方的绿色背景小卡片区。
- **卡片视觉**：设计稿中使用了鲜艳的绿色背景作为卡片底色，这很特别。建议保留，但要给产品图加投影，让他“浮”在绿色背景上。
- **交互**：支持横向拖拽（Swiper），Hover 卡片时，产品图轻微放大（Scale 1.05）。

### Lifestyle Grid (All Collections / New Trending)

- **布局**：采用 **Bento Grid（便当盒布局）**。不是死板的九宫格，而是大小不一的矩形拼贴。
- **内容**：混合展示——有的格是纯模特图，有的格是特写图，有的格是纯色块加文字。
- **对齐**：图片填满容器（`object-cover`），文字浮在图片之上（左下角对齐）。

### Slogan Section (Full Power, Full Fun)

- **视觉**：这是一个纯排版区域。不要放图。
- **排版**：字体要巨大（`text-9xl`），颜色使用 `brand.primary`（荧光绿），背景使用 `brand.bg`。
- **动效**：当用户滚动到这里时，文字可以从左/右飞入，或者逐字显现。

### Footer (底部)

- **视觉**：由于你设计了一个巨大的绿色 Logo 图形在底部，建议将其作为 Footer 的背景水印或者主要视觉元素。
- **结构**：上方是巨大的抽象 Logo，下方分为四列链接（About, Contact, Support等）。背景回归纯黑。

## 5. 禁止项

- **禁止过度圆角**：保持卡片圆角在 `rounded-xl` 或更小，不要做成全圆（Pill shape），这会削弱科技感和力量感。
- **禁止使用衬线体**：不要使用 Times New Roman 等传统字体。
- **禁止低对比度**：不要在深蓝背景上使用深灰文字，必须使用白色或荧光色。
- **禁止杂乱的阴影**：尽量使用扁平化或高光霓虹效果，避免脏脏的黑色弥散阴影。

## 6. 对实现层的建议（给未来的开发者）

### Vue 3 + Tailwind 结构建议

- **Layout**: 使用 `Grid` (Grid Layout) 来实现中间那个复杂的图片墙区域，Tailwind 的 `col-span-2` 等类名非常适合处理这种不规则布局。
- **Colors**: 在 `tailwind.config.js` 中扩展 `theme.colors`，把 `#39FF14` 命名为 `neon-green`，这样你可以直接写 `text-neon-green`。
- **Component**: 把 "ProductCard" 封装成一个 Vue 组件，因为你在 New Arrival 和 Carousel 里都用到了类似结构，只是背景色不同（通过 Props 传参控制）。

### 动效建议 (AOS / Swiper)

- **Scroll Reveal**: 推荐使用 `AOS` (Animate On Scroll) 库。给所有板块加上 `data-aos="fade-up"`，让页面滚动时元素有节奏地浮现，避免生硬。
- **Carousel**: 那个横向的一排绿色产品卡片，必须使用 `Swiper.js`，设置 `slidesPerView: 'auto'`，让用户可以在移动端流畅地左右滑。