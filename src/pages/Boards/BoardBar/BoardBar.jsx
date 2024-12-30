import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SyncLockIcon from '@mui/icons-material/SyncLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import { Button } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import { capitalizeFirstLetter } from '~/utils/formatters'


const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent', // Sửa lỗi chính tả
  border: 'none',
  px: '5px', // Sử dụng shorthand cho paddingX
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': { // Sửa cú pháp hover
    backgroundColor: 'primary.50' // Sử dụng tên hợp lệ
  }
}

function BoardBar({ board }) {

  return (
    <Box sx={{
      color: (theme) => theme.palette.mode === 'dark' ? 'white' : 'black', // Đặt màu chữ phù hợp với nền
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5',
      backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
      borderBottom: '1px solid #ffffff'
    }}>
      <Box sx={{ display: 'flex ', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex ', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>} sx={{ color: 'white', borderColor: 'white', '&: hover': { borderColor: 'white' } }}>Invite</Button>
        <AvatarGroup max={3}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root':{
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { backgroundColor: '#a4b0be' }
            }
          }}>
          <Tooltip title="TanVuongDev">
            <Avatar alt="TanVuongDev" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCsqRYLAFDdL4Ix_AHai7kNVyoPV9Ssv1xg&s" />
          </Tooltip>
          <Tooltip title="TanVuongDev">
            <Avatar alt="TanVuongDev" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCsqRYLAFDdL4Ix_AHai7kNVyoPV9Ssv1xg&s" />
          </Tooltip>
          <Tooltip title="TanVuongDev">
            <Avatar alt="TanVuongDev" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCsqRYLAFDdL4Ix_AHai7kNVyoPV9Ssv1xg&s" />
          </Tooltip>
          <Tooltip title="TanVuongDev">
            <Avatar alt="TanVuongDev" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCsqRYLAFDdL4Ix_AHai7kNVyoPV9Ssv1xg&s" />
          </Tooltip>
          <Tooltip title="TanVuongDev">
            <Avatar alt="TanVuongDev" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCsqRYLAFDdL4Ix_AHai7kNVyoPV9Ssv1xg&s" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
