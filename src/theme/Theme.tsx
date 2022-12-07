import { extendTheme } from '@chakra-ui/react';
import '@fontsource/dm-sans';

const theme = extendTheme({
  fonts: {
    heading: `'DM Sans', sans-serif`,
    body: `"DM Sans", sans-serif`
  },
  colors: {
    pallete: {
      green: '#27AE60',
      white: '#FFFFFF',
      black: '#000000',
      lightGrey: '#F2F2F2',
      grey: '#828282'
    }
  }
})

export default theme;