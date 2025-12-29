/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#1A1A40',       // 深蓝紫背景
                    dark: '#0B0B15',     // 更深的黑色（用于Footer或遮罩）
                    primary: '#39FF14',  // 核心：荧光毒液绿
                    secondary: '#FF00FF', // 辅助：霓虹粉
                    text: '#FFFFFF',     // 纯白文字
                }
            },
            fontFamily: {
                // 建议在 index.html 引入 Google Fonts: 'Rajdhani' 或 'Inter'
                sans: ['Rajdhani', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/src/img/bg.webp')", // 赛博朋克风格占位图
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0)' },
                    '50%': { transform: 'translate(-50%, -50%) translateY(-20px)' }, // 上下浮动 20px
                }
            }
        },

    },
    plugins: [],
}
