import React from 'react';
import { Grid, Card, CardHeader, CardContent, CardActions, Typography, Button } from '@mui/material';

const ViewAllUsersPage = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader>
            <Typography variant="h6">Customer dashboard</Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1">View a summary of all your customers over the last month.</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">View here</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader>
            <Typography variant="h6">Customer dashboard</Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1">View a summary of all your customers over the last month.</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">View here</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader>
            <Typography variant="h6">Customer dashboard</Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body1">View a summary of all your customers over the last month.</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">View here</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ViewAllUsersPage;
