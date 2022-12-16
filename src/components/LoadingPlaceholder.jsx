import { Grid, Skeleton } from '@mui/material';
import React from 'react';

export default function LoadingPlaceholder() {
  return (
    <Grid container spacing={2} justifyContent="start">
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton sx={{ mb: 1 }} variant="rounded" height={80} />
        <Skeleton variant="rounded" height={400} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton sx={{ mb: 1 }} variant="rounded" height={80} />
        <Skeleton variant="rounded" height={400} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton sx={{ mb: 1 }} variant="rounded" height={80} />
        <Skeleton variant="rounded" height={400} />
      </Grid>
    </Grid>
  );
}
