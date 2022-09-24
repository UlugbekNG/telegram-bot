import * as React from "react";
import { Button, Grid, Box } from "@mui/material";
import { groups } from "../../data/data";

export default function MainScreen() {
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
          {groups.map((group) => (
            <Grid key={group.id} item xs={6} sm={6} md={4} lg={3}>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  backgroundColor: "rgb(80 80 80/ 33%)",
                  boxShadow: 0,
                  padding: "15% 40%",
                }}
              >
                {group.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
