import React from 'react';
import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Card() {
  return (
    <MuiCard sx={{ boxShadow: 5 }}>
      <CardHeader
        title="The Card"
        subheader="here's a subheader"
      />
      <CardMedia
        component="img"
        height="400"
        image=""
        alt="A card image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Some very interesting information about something
        </Typography>
      </CardContent>
    </MuiCard>
  );
}
