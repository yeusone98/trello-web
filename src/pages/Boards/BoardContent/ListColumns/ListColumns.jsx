import React from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns( { columns } ) {

  /**
   * Thằng SortableContext yêu cầu items là một mảng dạng ['id-1', 'id-2', 'id-3', ...] chứ không phài là [{_id: 'id-1', ...}, {_id: 'id-2', ...}, {_id: 'id-3', ...}, ...]
   * Nếu không đúng thì vẫn kéo thả được nhưng không có hiệu ứng animation
   */
  return (
    <SortableContext items ={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        backgroundColor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}>
        {columns?.map(column => <Column key={column._id} column={column} />)}
        {/* Add new column */}
        <Box sx={{ minWidth: '200px',
          maxWidth: '200px',
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          backgroundColor: '#ffffff3d' }}>
          <Button startIcon={<NoteAddIcon />} sx={{ color: 'white', width: '100%', justifyContent: 'flex-start', paddingLeft: 2.5, paddingY: 1 }} >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>

  )
}

export default ListColumns