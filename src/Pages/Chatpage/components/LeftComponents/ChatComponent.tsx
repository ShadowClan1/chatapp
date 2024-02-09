import { Avatar, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
type chatDetail = {
    name  :string 
    lastmessage : string
    imageUrl : string
}
const ChatComponent = ({name="Name", lastmessage = 'this is my last message', imageUrl} : chatDetail) => {
  return (
    <>
    <Grid container sx={{py:1, pl : 2, display :'flex', gap:2, alignItems : 'center'}}>
        <Avatar sx={{height :64, width :64}}></Avatar>
        <Grid >
            <Typography variant='h5' component="h1">{name}</Typography>
            <Typography variant='subtitle2' color='grey' component="h1"  >{lastmessage}</Typography>
        </Grid>
    </Grid>
    <Divider/>
    </>
  )
}

export default ChatComponent
