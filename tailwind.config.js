/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        'olive-soft': '#6b7243',
        'brown-dark': '#54360f',
        'red-palestina': '#ff3131',
      },
      // De 'typography' key moet een 'DEFAULT' of specifieke kleur-key bevatten
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.olive-soft'),
            '--tw-prose-links': theme('colors.red-palestina'),
            '--tw-prose-bold': theme('colors.brown-dark'),
            '--tw-prose-body': theme('colors.brown-dark'),
            '--tw-prose-counters': theme('colors.olive-soft'),
            '--tw-prose-bullets': theme('colors.olive-soft'),
            '--tw-prose-hr': theme('colors.olive-soft / 0.2'), // Optioneel: kleur van de lijn
            hr: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}