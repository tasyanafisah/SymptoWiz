/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                neutral: {
                    50: "#EDEBED",
                    100: "#DBD7DB",
                    300: "#B6B0B6",
                    500: "#A49CA4",
                    700: "#625E62",
                    900: "#211F21",
                },
                purple: {
                    50: "#AFADC1",
                    100: "#8783A1",
                    300: "#5F5A82",
                    500: "#373163",
                    700: "#2C274F",
                    900: "#211D3B",
                },
                pink: {
                    50: "#EFE3E7",
                    100: "#E8D5DB",
                    300: "#E0C7CF",
                    500: "#D8B9C3",
                    700: "#AD949C",
                    900: "#826F75",
                },
            },
            fontSize: {
                h1: ["3rem", "4.5rem"],
                h2: ["2rem", "3rem"],
                h3: ["1.5rem", "2.25rem"],
                h4: ["1.25rem", "1.875rem"],
                "b-xl": ["1.125rem", "2rem"],
                "b-lg": ["1rem", "1.75rem"],
                "b-md": ["0.75rem", "1.3rem"],
            },
            backgroundImage: {
                hero: "url('./assets/bg-hero.png')",
            },
        },
    },
    plugins: [],
};
