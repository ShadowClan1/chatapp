import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TypingAnimation from '../../../../components/TypingAnimation'
import { WhatsApp } from '@mui/icons-material'

const HeroBanner = () => {
    const [render, setRender] = useState({second :false, third :false});
    useEffect(()=>{
        setTimeout(()=>{
            setRender((prev)=>({...prev, second :true}))
            setTimeout(()=>{
                setRender((prev)=>({...prev, third :true}))
            },2000)
        },2000)
    },[])


  return (
    <Grid  sx={{ height :"100%", justifyContent :'space-between', alignItems :'center', display : 'flex'}} >
    <Grid container component='main' sx={{bgcolor :'grey', height :'40%', flexDirection :'column', display :'flex' ,   }}>
    <Grid sx={{ height : '40%', display :'flex'  , alignItems :'center', justifyContent :'center'}} >
      <WhatsApp sx={{height :108, width :108}}/>
    </Grid>
    
    <Grid container justifyContent='center'>
      {/* <Typography variant="body1" component='h1'>
        INTRODUCING TO
      </Typography> */}
      <TypingAnimation
            text="INTRODUCING TO"
            speed={100}
            // containerStyle={
            // {  border: '1px solid #ccc',
            //   padding: '10px',
            //   borderRadius: '5px',
            //   backgroundColor: '#f0f0f0'}
            // }
            textVariant="body1"
            textComponent="h1"
          />
    
    </Grid>
    <Grid container justifyContent='center'>
      {/* <Typography variant="h3" component='h1'>
        Grey Whatsapp
      </Typography> */}
    
    { render.second  &&(<TypingAnimation
            text="Grey Whatsapp"
            speed={100}
            // containerStyle={
            // {  border: '1px solid #ccc',
            //   padding: '10px',
            //   borderRadius: '5px',
            //   backgroundColor: '#f0f0f0'}
            // }
            textVariant="h3"
            textComponent="h1"
          />)}
    
    </Grid>
    <Grid sx={{display :'flex', justifyContent :'center'}}>
    
    {render.third && <TypingAnimation
            text="Hare Krishna !!"
            speed={100}
            containerStyle={
            {  border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: '#f0f0f0'}
            }
            textVariant="h6"
            textComponent="div"
          />}
    </Grid>
    </Grid>
      </Grid>
  )
}

export default HeroBanner