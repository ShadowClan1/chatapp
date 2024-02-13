import { Send } from '@mui/icons-material'
import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

const CreateMessage = () => {
  return (
    <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
          gap: 0.2,
          position : 'absolute' , bottom : 0
        }}
      >
        <Grid item xs={9}>
          <TextField
            sx={{ bgcolor: "#fff" }}
            fullWidth
            margin="normal"
            label="Enter message here"
          />
        </Grid>
        <Grid
          item
          xs={2}
          justifyContent="center"
          display="flex"
          alignItems="center"
        >
          <Button
            sx={{ bgcolor: (t) => t.palette.grey[200], px: 1, py: 2, color :'grey' }}
            size="large"
          >
            <Send></Send>
          </Button>
        </Grid>
      </Grid>
  )
}

export default CreateMessage