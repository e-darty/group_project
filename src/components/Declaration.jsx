import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DateChoice from './DateChoice'
import Country from './County'
import Gender from './Gender'
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

export default function FormPropsTextFields() {
  return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
         <div style={{  justifyContent:'center', alignItems:'center', height: '100vh'}}> <h1> Birth Declaration</h1>
         <h4>Please fill up all the needed Information</h4> </div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
          <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="First Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Last Name"
        />
        </div>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Place of Birth"
        />
        <Gender/>
        </div>
        <DateChoice/>
        <Country/>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Father's Full Name"
        />
        <TextField
          id="outlined-number"
          label="Father's CIN"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Mother's Full Name"
        />
        <TextField
          id="outlined-number"
          label="Mother's CIN"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <Button
  variant="contained"
  component="label"
>
  Upload the Clinic File
  <input
    type="file"
    hidden
  />
</Button>
      </div>
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label="I confirm that all the submitted data submitted are correct" />
    </FormGroup>
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Submit</Button>
     
    </Stack>
    </Box>
    
    </div>
  );
}
