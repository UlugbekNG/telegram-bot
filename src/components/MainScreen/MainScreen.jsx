import * as React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="overline"
          textAlign="center"
          color="white"
          gutterBottom
        >
          Расписание занятий от 24.09.2022
        </Typography>
        <Grid container spacing={2}>
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
                <Typography variant="h5" display="block">
                  {group.name}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
