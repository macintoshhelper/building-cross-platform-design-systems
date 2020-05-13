import highlight from './themes/highlight';

export const light = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#08f',
    secondary: '#f0f',
    darkgray: '#333',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],
  styles: {
    pre: {
      color: 'secondary',
      bg: 'darkgray',
      p: 4,
      borderRadius: 4,
    },
    code: {
      fontSize: 20,
      color: 'secondary',
    },
  },
  ...highlight,
}
