import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { selectors } from '../slices/cardsSlice';

export default function CardList() {
  const { t } = useTranslation();
  const dogs = useSelector(selectors.selectEntities);
  const dogIds = useSelector(selectors.selectIds);
  console.log(dogs);
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={2} justifyContent="space-between">
        {Object.values(dogs).map((dog, index) => (
          <Grid item xs={12} sm={6} md={4} key={dogIds[index]}>
            <MuiCard sx={{ boxShadow: 5 }}>
              <CardHeader
                title={t('title', { count: index + 1 })}
                subheader={t('subheader')}
              />
              <CardMedia
                component="img"
                height="300"
                image={dog.img}
                alt="A card image"
              />
              <CardContent>
                <Typography component="div" height={150}>
                  {dog.msg}
                </Typography>
              </CardContent>
            </MuiCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
