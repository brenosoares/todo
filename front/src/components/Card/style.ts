import stitches from '../../styles/theme';

const { styled } = stitches;

export const Container = styled('div', {
    backgroundColor: '$light',
    borderRadius: 8,
    display: 'block',
    height: '100%',
    marginBottom: '$sm',
    padding: '$sm',
    width: '100%'
})

export const Header = styled('div', {
    alignItems: 'center',
    borderBottom: '1px solid $grey',
    display: 'flex',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    height: '100%',
    padding: '$xxs',
    width: '100%',
    '& > div': {
        marginLeft: 5
    }
})

export const Description = styled('div', {
    display: 'block',
    maxHeight: 200,
    fontSize: 12,
    overflow: 'auto',
    overflowWrap: 'anywhere',
    padding: '$xxs',
    whiteSpace: 'break-spaces',
    width: '100%',
    '&>*': {
        textWrap: 'wrap'
    },
    '&::-webkit-scrollbar': {
        width: 4
      },
      '&::-webkit-scrollbar-track': {
        boxShadow:' inset 0 0 6px rgba(0, 0, 0, 0.2)'
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '$primary',
        borderRadius: 2,
        outline: '0px solid',
      }
})

export const DescriptionEmpty = styled(Description, {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
})

export const Footer = styled('div', {
    borderTop: '1px solid $grey',
    display: 'flex',
    fontSize: 14,
    justifyContent: 'space-between',
    height: '100%',
    padding: '$xxs',
    width: '100%'
})

export const DeleteAction = styled('div', {

})
