import { Send } from "@mui/icons-material";
import { Box, Button, Container, Grid, IconButton, Paper, TextField } from "@mui/material";
import React from "react";
import CreateMessage from "./CreateMessage";
import Messages from "./Messages";

const ChatLayout = () => {
  return (
    <Box
      component={Paper}
      elevation={2}
      mt={0.5}
      mx={0.5}
      sx={{ height: "100%" , position : 'relative'}} 
    >
      <Messages/>

      <CreateMessage/>
    </Box>
  );
};

export default ChatLayout;
