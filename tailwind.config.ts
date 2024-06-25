import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "black": "#0F0F0F",
            "white": "#FFFFFF",
            "lightgray": "#FFFFFF20",
            "darkgray": "#FFFFFF10",
            "red": "#CC0000",
            "blue": "#1c62b9"
        }
    },
    plugins: [],
};
export default config;
