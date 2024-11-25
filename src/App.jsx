
import Button from '@mui/material/Button'
import {
  useColorScheme
} from '@mui/material/styles'
import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
// import { useMediaQuery } from '@mui/material/useMediaQuery'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
function SelectMode() {
  const { mode, setMode } = useColorScheme()
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    const selectedMode =  event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <LightModeIcon /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <DarkModeOutlinedIcon />Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <SettingsBrightnessIcon />  System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}


function App() {
  return (
    <>
      <SelectMode/>
      <hr />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
