import { Platform } from 'react-native'

const theme = {
    colors: {
        textPrimary: '#000',
        textSecondary: '#586069',
        primary: '#24292e',
        headingPrimary: '#f1f1f1',
        errorTheme: '#d73a4a'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
        heading: 20
    },
    fonts: {
        main: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
};

export default theme;