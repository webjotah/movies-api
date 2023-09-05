/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': 'hsl(var(--background))', //preto
        'foreground': 'hsl(var(--foreground))', //branco
        'primary': 'hsl(var(--primary))', //vermelho
        'primary-foreground': 'hsl(var(--primary-foreground))', //smoke white
        'primary-dark': 'hsl(var(--destructive))', //vermelho escuro
        'secondary': 'hsl(var(--secondary))', //cinza
        'secondary-foreground': 'hsl(var(--secondary-foreground))', //smoke white
        'dark-foreground': 'hsl(var(--muted-foreground))', //cinza claro
      }
    },
  },
  plugins: [],
}
