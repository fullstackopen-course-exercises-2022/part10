import { Text as NativeText, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
        fontFamily: theme.fonts.main
    },
    colorHeadingPrimary: {
        color: theme.colors.headingPrimary
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary
    },
    colorErrorText: {
        color: theme.colors.errorTheme
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
})

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'textPrimary' && styles.colorPrimary,
        color === 'headingPrimary' && styles.colorHeadingPrimary,
        color === 'errorTheme' && styles.colorErrorText,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        styles
    ]
    return <NativeText style={textStyle} {...props} />

}

export default Text