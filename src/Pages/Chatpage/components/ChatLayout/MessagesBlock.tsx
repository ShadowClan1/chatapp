import React from "react";
import MessageComp from "./Message";
import { MessageIF } from "../../../../interfaces/messagesIF";
import { Box, Grid } from "@mui/material";
interface MessageBlockParms {
  key: string;
  blockKey: string;
  messages: MessageIF[];
}
const MessagesBlock = ({ blockKey, messages }: MessageBlockParms) => {
  return (
    <Grid container >
      <Grid container justifyContent={'center'} >
       <Box sx={{bgcolor : (t)=>t.palette.grey[300], px:2, py :0.7 , borderRadius : 5}}>
          {blockKey}
        </Box>
        </Grid>
      <Grid container flexDirection={'column'} gap={3} >
      {messages.map((e: MessageIF) => {
          return (
              <>
            <MessageComp message={e}/>
          </>
        );
    })}
    </Grid>
    </Grid>
  );
};

export default MessagesBlock;
