import React from "react";
import MessagesBlock from "./MessagesBlock";
import { Container, Grid } from "@mui/material";
import { MessagesIF } from "../../../../interfaces/messagesIF";


const Messages = () => {
    const obj : MessagesIF = {
        'day1' :[
            {from : 'ritik', to : 'krishna', message : 'Hare krishna', date : new  Date ()},
            {from : 'ritik', to : 'krishna', message : 'Hare krishna', date : new  Date ()},
            {from : 'ritik', to : 'krishna', message : 'Hare krishna', date : new  Date ()},
            {from : 'ritik', to : 'krishna', message : 'Hare krishna', date : new  Date ()},
            {from : 'ritik', to : 'krishna', message : 'Hare krishna', date : new  Date ()},
            {from : 'ritik', to : 'krishna', message : 'Hare krishna', date : new  Date ()},
            {from : 'ritik', to : 'krishna', message : 'Hare krishna', date : new  Date ()},
            {from : 'ritik', to : 'krishna', message : 'Hare krishna', date : new  Date ()},
            {from : 'krishna', to : 'ritik', message : 'something here', date : new  Date ()},
            {from : 'krishna', to : 'ritik', message : 'something here', date : new  Date ()},
            {from : 'ritik', to : 'krishna', message : 'something here', date : new  Date ()},
            {from : 'ritik', to : 'krishna', message : 'something here', date : new  Date ()},
            {from : 'krishna', to : 'ritik', message : 'something here', date : new  Date ()},
        
        ] ,
        'day2' :[{from : 'ritik', to : 'krishna', message : 'something here', date : new  Date ()}] 
    }


    const blocks : string[] = Object.keys(obj);


  return (
    <>
    {/* Module for messing this is module for messaging */}
      <Grid
        sx={{ display: "flex", flexDirection: "row", height :'100%' }} className="grid-messages----------------------------------"
      >
        <Container  sx={{  mx: 2, height: "90%", display : 'flex', flexDirection : 'column', justifyContent : 'end', overflow  : 'scroll'}} className="container-messages------------------------------">

        {
            blocks.map((e:string)=>{
                return (<MessagesBlock key={e} blockKey={e} messages={obj[e]}/>)
            })
        }

      
      


        </Container>
      </Grid>
    </>
  );
};

export default Messages;
