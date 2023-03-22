/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rale: ["Raleway"],
            },
            colors: {
                bgYellow: {
                    50: "#FDFBED",
                    100: "#FBF6DA",
                    200: "#F7EEB6",
                    300: "#F2E48D",
                    400: "#ECD95A",
                    500: "#E5CB1C",
                    600: "#D2BA18",
                    700: "#B7A115",
                    800: "#978511",
                    900: "#6E610D",
                },
                bgBlack: {
                    50: "#E9E9E7",
                    100: "#D2D2CB",
                    200: "#A7A79B",
                    300: "#777769",
                    400: "#44443C",
                    500: "#11110F",
                    600: "#0E0E0C",
                    700: "#0B0B0A",
                    800: "#080807",
                    900: "#030302",
                },
                bgMint: {
                    50: "#EBFFF9",
                    100: "#D1FFF0",
                    200: "#8AFFDA",
                    300: "#00FFAE",
                    400: "#00F0A4",
                    500: "#00DF9A",
                    600: "#00CC8B",
                    700: "#00B37A",
                    800: "#009465",
                    900: "#006B49",
                },
            },
        },
    },
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("tailwind-scrollbar"),
    ],
};
