module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      none: "none",
    },
    extend: {
      colors: {
        'accent-primary': '#E439F4',
        'accent-secondary': '#07EDF8',
        'bg-deep': '#010124',
        'bg-mid': '#1A1A30',
        'gradient-dark': '#04233d',
        'gradient-darker': '#05132b',
        'accent-purple': '#65334D',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, var(--background-start), var(--background-end))',
        'gradient-vertical': 'linear-gradient(180deg, var(--background-start), var(--background-end))',
        'gradient-radial': 'radial-gradient(circle, var(--gradient-dark) 0%, var(--gradient-darker) 40%)',
        'gradient-services': 'linear-gradient(180deg, var(--gradient-darker) 0%, var(--accent-purple) 100%)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
