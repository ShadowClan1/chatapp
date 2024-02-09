import { Box, Container, Grid, IconButton, TextField } from '@mui/material'
import React from 'react'
import HeaderRight from './HeaderRight'
import { Send } from '@mui/icons-material'

const RightComponent = () => {
  return (
   <>
   <HeaderRight/>
<Grid container sx={{position :'fixed', bottom : 0 , display :'flex'}}>

   <TextField
   sx={{ bgcolor :'#fff'}} 
   /> <IconButton sx={{bgcolor: 'white'}}><Send></Send></IconButton>
   </Grid>
   </>
  )
}

export default RightComponent
