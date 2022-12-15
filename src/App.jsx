import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru';
import CardList from './components/CardList';

function App() {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        ru,
      },
      lng: 'ru',
    });

  return (
    <CardList />
  );
}

export default App;
