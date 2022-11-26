import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { getAllUserMethod } from '../../../../../utils/serverRequest'

function SortBySelectBox({ setfilteredProducts }) {
  const theme = useTheme()
  const [sortBy, setSortBy] = useState("")

  const handleSelectChange = async (event) => {
    setSortBy(event.target.value)
   const updatedData = await getAllUserMethod(event.target.value)
   setfilteredProducts(updatedData)
  }

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={sortBy}
          onChange={handleSelectChange}
          sx={{
            '.MuiSelect-select.MuiSelect-outlined': {
              paddingY: '9px !important',
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.divider,
            },
          }}
        >
          <MenuItem value={"reviewScore=desc"}>Review</MenuItem>
          <MenuItem value={"reviewCount=desc"}>ReviewCount</MenuItem>
          <MenuItem value={"price=asc"}>Price: low to high</MenuItem>
          <MenuItem value={"price=desc"}>Price: high to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SortBySelectBox
