/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#AA367C',
                    dark: '#4A2FBD',
                },
                dark: {
                    DEFAULT: '#121212',
                    lighter: '#1a1a1a',
                },
                light: {
                    DEFAULT: '#ffffff',
                    muted: '#B8B8B8',
                },
            },
            fontFamily: {
                centra: ['Centra', 'sans-serif'],
            },
            fontWeight: {
                400: '400',
                500: '500',
                700: '700',
            },
            backgroundImage: {
                'banner': "url('./assets/img/banner-bg.png')",
                'footer': "url('./assets/img/footer-bg.png')",
            },
            animation: {
                'updown': 'updown 3s linear infinite',
            },
            keyframes: {
                updown: {
                    '0%': { transform: 'translateY(-20px)' },
                    '50%': { transform: 'translateY(20px)' },
                    '100%': { transform: 'translateY(-20px)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
