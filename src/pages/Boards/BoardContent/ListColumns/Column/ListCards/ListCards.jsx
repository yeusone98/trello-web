
import Box from '@mui/material/Box'
import Card from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'


function ListCards( { cards } ) {
  return (
    <SortableContext items ={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          padding: '0 5px',
          margin: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: (theme) =>
            `calc(${theme.trello.boardContentHeight} - 
            ${theme.spacing(5)} - 
            ${(theme).trello.column_header_height} - 
            ${(theme).trello.column_footer_height})`,
          '&::-webkit-scrollbar': {
            width: '8px' // Đảm bảo bạn thiết lập chiều rộng scrollbar
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da',
            borderRadius: '8px'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf'
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f0f0f0'
          }
        }}
      >
        {/* Card */}
        {cards?.map((card) => (<Card key={card._id} card={card} />))}
      </Box>
    </SortableContext>
  )
}

export default ListCards