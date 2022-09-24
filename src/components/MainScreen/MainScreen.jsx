import * as React from "react";
import { Button, Grid, Box } from "@mui/material";

export default function BasicButtons() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#323232",
          minHeight: "100vh",
          padding: 1,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "rgb(80 80 80/ 33%)",
                boxShadow: 0,
                padding: "15% 40%",
              }}
            >
              301
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "rgb(80 80 80/ 33%)",
                boxShadow: 0,
                padding: "15% 40%",
              }}
            >
              302
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "rgb(80 80 80/ 33%)",
                boxShadow: 0,
                padding: "15% 40%",
              }}
            >
              303
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "rgb(80 80 80/ 33%)",
                boxShadow: 0,
                padding: "15% 40%",
              }}
            >
              304
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "rgb(80 80 80/ 33%)",
                boxShadow: 0,
                padding: "15% 40%",
              }}
            >
              305
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "rgb(80 80 80/ 33%)",
                boxShadow: 0,
                padding: "15% 40%",
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
