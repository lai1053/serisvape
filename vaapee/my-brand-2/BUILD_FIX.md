# 构建图片路径修复说明

## 问题
构建后的 dist 目录中没有 img 文件，图片路径 404。

## 原因
图片路径使用了 `/src/img/...`，Vite 在构建时不会处理这些路径。

## 解决方案

### 1. 图片目录已迁移
- ✅ `src/img` 已复制到 `public/img`
- ✅ 所有路径已从 `/src/img/...` 更新为 `/img/...`

### 2. 清理缓存并重新构建
```bash
# 清理构建缓存
rm -rf dist node_modules/.vite

# 重新构建
npm run build
```

### 3. 验证构建结果
构建完成后，检查 `dist/img` 目录是否存在：
```bash
ls -la dist/img
```

### 4. 浏览器缓存
如果构建后仍然看到 404 错误：
1. 清除浏览器缓存（Ctrl+Shift+Delete 或 Cmd+Shift+Delete）
2. 硬刷新页面（Ctrl+F5 或 Cmd+Shift+R）
3. 或者使用无痕模式测试

## 路径更新清单

### 数据文件
- ✅ `src/data/products.js` - 4个产品路径
- ✅ `src/data/products4n1.js` - 1个产品路径  
- ✅ `src/data/productsAll.js` - 6个产品路径

### 视图文件
- ✅ `src/view/NewsCenter.vue` - 6个图片路径
- ✅ `src/view/NewsDetail.vue` - 3个图片路径
- ✅ `src/view/Performance.vue` - 3个图片路径
- ✅ `src/vaapee4.vue` - 1个图片路径

## Vite 工作原理
- `public` 目录下的文件会直接复制到 `dist` 根目录
- 路径 `/img/...` 在构建后指向 `dist/img/...`
- 不需要 import，直接使用路径即可




