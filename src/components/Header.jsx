import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Header() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h1"
        align="center"
        fontWeight="medium"
        gutterBottom
      >
        {t('header')}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
      >
        {t('subheader')}
      </Typography>
    </Container>
  );
}
