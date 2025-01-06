/** @type {import("prettier").Config} */
export default {
  bracketSameLine: true,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
