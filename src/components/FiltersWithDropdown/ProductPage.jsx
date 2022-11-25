import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Container from '../Container'
import FilterSize from './components/FilterSize/FilterSize'
import FilterPrice from './components/FilterPrice/FilterPrice'
import FilterColor from './components/FilterColor/FilterColor'
import FilterBrand from './components/FilterBrand/FilterBrand'
import SortBySelectBox from './components/SortBySelectBox/SortBySelectBox'
import Product from '../MinimallyDesigned/MinimallyDesigned'

function FiltersWithDropdown() {
  const theme = useTheme()
  return (
    <Container>
      <Box>
        <Typography variant="h4" fontWeight={700} marginTop={2}>
          Products
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        flexDirection={{ xs: 'column', md: 'row' }}
        marginY={4}
      >
        <Box width={1} display="flex">
          <Box display="flex" alignItems="center" paddingBottom={{ xs: 1, md: 0 }} overflow="auto">
            <Typography sx={{ whiteSpace: 'nowrap' }}>Filter by</Typography>
            <Box marginX={1}>
              <FilterSize />
            </Box>
            <Box marginX={1}>
              <FilterPrice />
            </Box>
            <Box marginX={1}>
              <FilterColor />
            </Box>
            <Box marginX={1}>
              <FilterBrand />
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" marginTop={{ xs: 1, md: 0 }}>
          <Typography sx={{ whiteSpace: 'nowrap' }} marginRight={1}>
            Sort by
          </Typography>
          <SortBySelectBox />
        </Box>
      </Box>
      <Box borderRadius={2} border={`4px dashed ${theme.palette.divider}`} height={400} >
        <Product />
      </Box>
    </Container>
  )
}

export default FiltersWithDropdown
