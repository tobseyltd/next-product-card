/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.35em',
    },
    extend: {
      colors: {
        'cream' : 'hsl(30, 38%, 92%)',
        'light-red' : 'hsl(0, 100%, 67%)',
        'orange-yellow' : 'hsl(39, 100%, 56%)',
        'green-teal' : 'hsl(166, 100%, 37%)',
        'cobalt-blue' : 'hsl(234, 85%, 45%)',
        'light-slate-blue' : 'hsl(252, 100%, 67%)',
        'light-royal-blue' : 'hsl(241, 81%, 54%)',
        'violet-blue' : 'hsla(256, 72%, 46%, 1)',
        'persian-blue' : 'hsla(241, 72%, 46%, 0)',
        'dark-gray-blue' : 'hsl(224, 30%, 27%)',
        'dark-blue' : 'hsl(213, 19%, 18%)',
        'very-dark-blue' : 'hsl(216, 12%, 8%)',
        'medium-grey' : 'hsl(216, 12%, 54%)',
        'light-grey' : 'hsl(217, 12%, 63%)',
        'orange' : 'hsl(25, 97%, 53%)',
        'cool-blue' : 'hsl(239, 59%, 31%)',
        'moderate-violet' : 'hsl(263, 55%, 52%)',
        'dark-grayish-blue' : 'hsl(217, 19%, 35%)',
        'dark-blackish-blue' : 'hsl(219, 29%, 14%)'
      },
      backgroundImage: {
        'hero-pattern' : "url('/media/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}
