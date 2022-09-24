import * as React from "react";
import { Button, Grid, Box } from "@mui/material";

export default function BasicButtons() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={4} lg={3}>
            <Button
              variant="outlined"
              sx={{
                color: "rgb(144, 202, 249)",
                border: "1px solid rgb(144, 202, 249)",
              }}
            >
              301
            </Button>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Button
              variant="outlined"
              sx={{
                color: "rgb(144, 202, 249)",
                border: "1px solid rgb(144, 202, 249)",
              }}
            >
              302
            </Button>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Button
              variant="outlined"
              sx={{
                color: "rgb(144, 202, 249)",
                border: "1px solid rgb(144, 202, 249)",
              }}
            >
              303
            </Button>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Button
              variant="outlined"
              sx={{
                color: "rgb(144, 202, 249)",
                border: "1px solid rgb(144, 202, 249)",
              }}
            >
              304
            </Button>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Button
              variant="outlined"
              sx={{
                color: "rgb(144, 202, 249)",
                border: "1px solid rgb(144, 202, 249)",
              }}
            >
              305
            </Button>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Button
              variant="outlined"
              sx={{
                color: "rgb(144, 202, 249)",
                border: "1px solid rgb(144, 202, 249)",
              }}
            >
              306
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
