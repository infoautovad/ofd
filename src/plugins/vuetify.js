import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'ofd',
    themes: {
      ofd: {
        dark: true,
        colors: {
          background: '#070B14',
          surface: '#101A2E',
          primary: '#5EEAD4',
          secondary: '#7AA2FF',
          accent: '#9B8CFF',
          error: '#F0A3A8',
          info: '#7DD3FC',
          success: '#5EEAD4',
          warning: '#7DD3FC',
          'on-primary': '#041018',
          'on-secondary': '#041018',
          'on-surface': '#F4F8FF',
          'on-background': '#F4F8FF',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: 'pill',
      elevation: 0,
      ripple: false,
      variant: 'flat',
    },
    VChip: {
      rounded: 'pill',
      elevation: 0,
      variant: 'flat',
    },
    VCard: {
      rounded: 'lg',
      elevation: 0,
      flat: true,
    },
  },
})
