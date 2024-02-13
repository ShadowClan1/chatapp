import { Avatar, Divider, Grid, Typography } from '@mui/material'
// import {} from '@mui/system'

import React from 'react'
type chatDetail = {
    name  :string 
    lastmessage : string
    imageUrl? : string
}
// const useStyles :any = makeStyles((theme:any)=>({
//   chatItem : {
//     '&:hover': {
//       backgroundColor: theme.palette.primary.dark,
//       // Add other styles for hover state
//     },
//   }
// }))
const ChatComponent = ({name="Name", lastmessage = 'this is my last message', imageUrl} : chatDetail) => {

  // const styleClass = useStyles()
  return (
    <>
    <Grid container sx={{py:1, pl : 2, display :'flex', gap:2, alignItems : 'center', '&:hover': {
      backgroundColor: 'grey',
      // Add other styles for hover state
    }, transition: '1s'}}>
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
