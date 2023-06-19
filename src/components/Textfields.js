import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: 'Monsoon plants',
  },
  {
    value: 'EUR',
    label: 'summer plants',
  },
  {
    value: 'BTC',
    label: 'flower bulbs',
  },
  {
    value: 'kt',
    label: 'winter plants',
  },
];
  const current = [
    {
      value: 'USD1',
      label: '1',
    },
    {
      value: 'EUR2',
      label: '2',
    },
    {
      value: 'BTC3',
      label: '3',
    },
    {
      value: 'kt4',
      label: '4',
    },
  ];
export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-plant"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your plant"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <TextField
          id="outlined-select-plant"
          select
          label="Select"
          defaultValue="EUR1"
          helperText="Please select quantity of plants"
        >
          {current.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}