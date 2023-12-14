import { createStitches } from "@stitches/react"

const stitches = createStitches({
    media: {
        bp1: "(min-width: 320px)",
        bp2: "(min-width: 768px)",
        bp3: "(min-width: 1200px)",
    },
    theme: {
        colors: {
            primary: '#6e41c0',
            secondary: '#ae41c0',
            danger: '#dc3848',
            dark: '#0c0c0c',
            light: '#ffffff',
            grey: '#dee1e6',
            darkGrey: '#6b7278',
            lightGrey: '#cfd2d7',
            background: '#e8ecef',
            text: '#343435'
        },
        space: {
            xxs: "0.422rem",
            xs: "0.563rem",
            sm: "0.75rem",
            rg: "1rem",
            md: "1.33rem",
            lg: "1.77rem",
            xl: "2.369rem",
            xxl: "3.157rem",
        },
        fontSizes: {
            xxs: "0.422rem",
            xs: "0.563rem",
            sm: "0.75rem",
            rg: "1rem",
            md: "1.33rem",
            lg: "1.77rem",
            xl: "2.369rem",
            xxl: "3.157rem",
        }
    }
})

const injectGlobalStyles = stitches.globalCss({
    "*": { boxSizing: "border-box", fontFamily: "Open Sans" },
    "*:after": { boxSizing: "border-box"},
    "*:before": { boxSizing: "border-box"},
    body: { margin: 0, padding: 0 },
    h1: { margin: 0 },
    p: { margin: 0 }
})

injectGlobalStyles()

export default stitches
