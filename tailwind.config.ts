import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                black: '#171717',
                indigo: '#818CF8',
            },
            fontSize: {
                m: '16px',
                sm: '14px',
                xs: '12px',
            },
        },
    },
    plugins: [],
} satisfies Config;
