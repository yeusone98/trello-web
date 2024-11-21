
import Button from '@mui/material/Button'
import {
  useColorScheme
} from '@mui/material/styles';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  // const { mode, setMode } = useColorScheme()
  // return (
  //   <Button
  //     onClick={() => {
  //       setMode(mode === 'light' ? 'dark' : 'light')
  //     }}
  //   >
  //     {mode === 'light' ? 'Turn dark' : 'Turn light'}
  //   </Button>
  // );
}

function App() {

  return (
    <>
      <SelectMode/>
      <hr />
      <ModeToggle/>
      <hr />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
