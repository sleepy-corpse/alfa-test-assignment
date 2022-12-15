import React from 'react';
// import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from './Card';

export default function CardList() {
  // const { t } = useTranslation();
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
    </Container>
  );
}
