import { Message, MoreVert, Search } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const HeaderOne = () => {
  return (
    <>
    
    <Grid
      container
      sx={{
        bgcolor: (t) => t.palette.grey[200],
        display: "flex",
        justifyContent: "space-between",
        py: 0.5,
        px: 2,
      }}
    >
      <Box>
        <IconButton>
        <Avatar sx={{}}>K</Avatar>
        </IconButton>
      </Box>
      <Box sx={{display : 'flex' , gap :3 , px:2}}>
        <IconButton>
          <Message />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Box>
    </Grid>
    <Grid sx={{py:0.5, bgcolor : (t)=> t.palette.grey[300]}}>
        <TextField fullWidth sx={{bgcolor :'white'}} 
        InputLabelProps={{shrink : false, sx :{ pl :7}}}
        InputProps={{startAdornment : (<InputAdornment position="start">
            <Search/>
        </InputAdornment>) }}
        
        label="Search or Start new chat" 
        
        />
    </Grid>
    </>
  );
};

export default HeaderOne;
