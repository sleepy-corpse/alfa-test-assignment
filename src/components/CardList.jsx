import React, { useRef, useState } from 'react';
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
import FormGroup from '@mui/material/FormGroup';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Snackbar from '@mui/material/Snackbar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Alert from '@mui/material/Alert';
import { actions, selectors } from '../slices/cardsSlice';
import LoadingPlaceholder from './LoadingPlaceholder';

export default function CardList() {
  const { t } = useTranslation();
  const dogs = useSelector(selectors.selectEntities);
  const dispatch = useDispatch();
  const [filterByLike, setFilter] = useState(false);
  const [isToastOpen, setToastOpen] = useState(false);
  const switchRef = useRef(null);

  const toggleFilter = () => {
    setFilter(switchRef.current.checked);
  };

  const addToFavourites = (id) => () => {
    dispatch(actions.addToFavourites(id));
  };
  const removeFromFavourites = (id) => () => {
    dispatch(actions.removeFromFavourites(id));
  };
  const deleteCard = (id) => () => {
    setToastOpen(true);
    dispatch(actions.removeCard(id));
  };

  const handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setToastOpen(false);
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

  const dogsArray = filterByLike
    ? Object.values(dogs).filter(({ isLiked }) => isLiked)
    : Object.values(dogs);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <FormGroup sx={{ mb: 2, width: '230px' }}>
        <FormControlLabel
          control={<Switch inputRef={switchRef} color="error" onChange={toggleFilter} />}
          label={t('filterSwitch')}
        />
      </FormGroup>
      {Object.values(dogs).length ? null : <LoadingPlaceholder />}
      <Grid container spacing={2} justifyContent="start">
        {dogsArray.map((dog) => (
          <Grid item xs={12} sm={6} md={4} key={dog.id}>
            <MuiCard sx={{ boxShadow: 5 }}>
              <CardHeader
                title={t('card.title', { count: dog.id + 1 })}
                subheader={t('card.subheader')}
              />
              <CardMedia
                component="img"
                height="300"
                image={dog.img}
                alt="A card image"
              />
              <CardContent>
                {/* added a tooltip with the full text in case of
                a text overflow in the Typography component */}
                <Tooltip disableInteractive title={dog.msg}>
                  <Typography overflow="hidden" component="div" height={145}>
                    {dog.msg}
                  </Typography>
                </Tooltip>
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
      <Snackbar
        open={isToastOpen}
        onClose={handleToastClose}
        autoHideDuration={4000}
      >
        <Alert onClose={handleToastClose} severity="info" sx={{ width: '100%' }}>
          {t('toast.deleteCard')}
        </Alert>
      </Snackbar>
    </Container>
  );
}
