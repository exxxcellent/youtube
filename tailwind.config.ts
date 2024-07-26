import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            mb: '320px',
            lt: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        colors: {
            black: '#0F0F0F',
            white: '#FFFFFF',
            gray: '#AAAAAA',
            lightgray: '#FFFFFF20',
            darkgray: '#FFFFFF10',
            red: '#CC0000',
            blue: '#1c62b9',
        },
    },
    plugins: [],
};
export default config;
