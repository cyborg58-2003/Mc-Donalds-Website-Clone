module.exports = {
  content: ["./*.html"], // or adjust to match your files
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
