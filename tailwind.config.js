/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#0a0e1a',
                'dark-card': '#111827',
                'accent-green': '#10b981',
                'accent-blue': '#3b82f6',
                'accent-cyan': '#06b6d4',
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
