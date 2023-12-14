import stitches from "../../styles/theme";

const { styled } = stitches;

export const ButtonContainer = styled('div', {
    alignItems: 'center',
    backgroundColor: '$primary',
    borderRadius: 8,
    boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.2)',
    color: '$light',
    cursor: "pointer",
    display: 'flex',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: '$sm',
    transition: 'all 0.5s linear',
    width: 'fit-content',
    '&:hover':{
        boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.1)',
        opacity: 0.8
    },
    variants: {
        color: {
            primary: {
                backgroundColor: '$primary',
                color: '$light'
            },
            secondary: {
                backgroundColor: '$secondary',
                color: '$light'
            },
            danger: {
                backgroundColor: '$danger',
                color: '$light'
            },
        },
        size: {
            sm: {
                padding: '$xs',
                fontSize: 8
            },
            md: {
                padding: '$sm',
                fontSize: 14
            },
            lg: {
                padding: '$md',
                fontSize: 20
            },
        }
    }
})

export const Icon = styled('span', {
    marginRight: '$xxs',
    variants: {
        position: {
            right: {
                marginLeft: '$xxs',
                marginRight: 0
            },
            only: {
                marginLeft: 0,
                marginRight: 0
            }
        }
    }
})
