import React from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, hoziontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns( { columns } ) {

  return (
    <SortableContext> 
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
      {/* Column */}
      {columns?.map((column) => (<Column key={column._id} column={column} />))}
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