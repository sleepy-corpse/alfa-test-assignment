import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { actions, selectors } from '../slices/cardsSlice';

export default function CardList() {
  const { t } = useTranslation();
  const dogs = useSelector(selectors.selectEntities);
  const dogIds = useSelector(selectors.selectIds);
  const dispatch = useDispatch();

  const addToFavourites = (id) => () => {
    dispatch(actions.addToFavourites(id));
  };
  const removeFromFavourites = (id) => () => {
    dispatch(actions.removeFromFavourites(id));
  };
  const deleteCard = (id) => () => {
    dispatch(actions.removeCard(id));
  };

  const renderLikeButton = (dogId) => (
    <IconButton aria-label="add to favorites" onClick={addToFavourites(dogId)}>
      <FavoriteBorderIcon fontSize="large" />
    </IconButton>
  );
  const renderActiveLikeButton = (dogId) => (
    <IconButton aria-label="remove from favorites" onClick={removeFromFavourites(dogId)}>
      <FavoriteIcon fontSize="large" color="error" />
    </IconButton>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={2} justifyContent="start">
        {Object.values(dogs).map((dog, index) => (
          <Grid item xs={12} sm={6} md={4} key={dogIds[index]}>
            <MuiCard sx={{ boxShadow: 5 }}>
              <CardHeader
                title={t('title', { count: dogIds[index] + 1 })}
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
              <CardActions>
                {dog.isLiked ? renderActiveLikeButton(dog.id) : renderLikeButton(dog.id)}
                <IconButton aria-label="delete" onClick={deleteCard(dog.id)}>
                  <DeleteOutlineIcon fontSize="large" />
                </IconButton>
              </CardActions>
            </MuiCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
