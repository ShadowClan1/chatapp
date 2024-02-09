import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'

const HeaderRight = () => {
  return (
<Grid sx={{display : 'flex', justifyContent : 'space-between' , bgcolor : (t)=>t.palette.grey[200], py : 1.5, pl :2 }}>
<Box sx={{gap : 3 , display :'flex', alignItems : 'center'}}>
<Avatar sx={{height :64, width : 64}}>
</Avatar>
<Grid >
            <Typography variant='h5' component="h1">Name</Typography>
            <Typography variant='subtitle2' color='grey' component="h1"  >last seen</Typography>
        </Grid>
</Box>

<Box>

</Box>

</Grid>
  )
}

export default HeaderRight
