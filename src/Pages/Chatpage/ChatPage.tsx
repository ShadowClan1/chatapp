import { CssBaseline, Grid } from "@mui/material";
import React from "react";
import LeftComponent from "./components/LeftComponents/LeftComponent";
import RightComponent from "./components/RightComponents/RightComponent";

const ChatPage = () => {
  return (
    <Grid container sx={{ height: "100vh", p: 1 }}>
      <CssBaseline />
      <Grid xs={false} sm={4} md={5} sx={{ bgcolor: "white" }}>
        <LeftComponent />
      </Grid>
      <Grid
        xs={12}
        sm={8}
        md={7}
        sx={{ bgcolor: (t) => t.palette.grey[200], height: "100%" }}
      >
        <RightComponent />
      </Grid>
    </Grid>
  );
};

export default ChatPage;
