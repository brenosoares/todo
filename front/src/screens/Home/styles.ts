import stitches from '../../styles/theme';

const { styled } = stitches;

export const Container = styled('div', {
    backgroundColor: '$background',
    display: 'block',
    minHeight: '100svh',
    height: '100%',
    width: '100%'
})

export const Header = styled('header', {
    borderBottom: '1px solid $grey',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '$sm',
    width: '100%'
})

export const Main = styled('main', {
    display: 'block',
    padding: '$rg',
    margin: ' 0 auto',
    maxWidth: '1620px',
    width: '100%'
})
