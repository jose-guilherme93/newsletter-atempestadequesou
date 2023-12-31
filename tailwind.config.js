module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#F6DC4C",
                   
          "secondary": "#3b82f6",
                   
          "accent": "#8b5cf6",
                   
          "neutral": "#5eead4",
                   
          "base-100": "#ffffff",
                   
          "info": "#7e22ce",
                   
          "success": "#fbbf24",
                   
          "warning": "#fb7185",
                   
          "error": "#be123c",
          "chat-buble": "#22C55E",
        }
      }
    ],
    darkTheme: "false", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root" // The element that receives theme color CSS variables
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("daisyui"),
    require("@tailwindcss/typography")
  ]
};
