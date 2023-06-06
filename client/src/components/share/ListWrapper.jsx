import { Box, IconButton } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const ListWrapper = ({children}) => {

    const handleScroll = (scrollOffset) => {
        if ( scrollOffset === 0 ) {
            return;
        }

        children.props.refList.current.scrollLeft += scrollOffset;
    }

  return (
    <Box sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '1rem',
      }}>
        <IconButton
          sx={{
            height: '100%',
            width: 'fit-content',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
            }
          }}
          onClick={ () => handleScroll(-200) }
        >
          <ChevronLeftIcon />
        </IconButton>
  
        { children }
  
        <IconButton
          sx={{
            height: '100%',
            width: 'fit-content',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
            }
          }}
          onClick={ () => handleScroll(200) }
        >
          <ChevronRightIcon/>
        </IconButton>
      </Box>
  )
}
