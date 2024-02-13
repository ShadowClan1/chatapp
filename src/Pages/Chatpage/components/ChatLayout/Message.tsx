import React from "react";
import { MessageIF } from "../../../../interfaces/messagesIF";
import { Box, Grid, Typography } from "@mui/material";

interface messageProps {
  message: MessageIF;
}

const MessageComp = ({ message }: messageProps) => {
  const fromUser: boolean = message.from === "ritik";
  return (
    <Grid
      container
      sx={{
        justifyContent: fromUser ? "end" : "start",
        "&:hover": {
          backgroundColor: "grey",
          // Add other styles for hover state
        },

        transition: "1s",
      }}
    >
      <Box
        sx={{
          px: 1,
          py: 0.5,
          bgcolor: (t) =>
            fromUser ? t.palette.grey[200] : t.palette.grey[400],
          borderRadius: 4,

          
        }}
      >
        <Box>

        {message.message}
        </Box>
      </Box>
    </Grid>
  );
};

export default MessageComp;
