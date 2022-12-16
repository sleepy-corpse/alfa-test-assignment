import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import store from './slices/index';
import { actions } from './slices/cardsSlice';
import en from './locales/en';
import CardList from './components/CardList';
import Header from './components/Header';

function App() {
  useEffect(() => {
    const fetchData = () => {
      try {
        const imgResponse = axios.get('https://dog.ceo/api/breeds/image/random/9');
        const factsResponse1 = axios.get('https://dogapi.dog/api/v2/facts?limit=5'); // this api have a limit of 5 facts per request
        const factsResponse2 = axios.get('https://dogapi.dog/api/v2/facts?limit=4');
        Promise.all([imgResponse, factsResponse1, factsResponse2]).then((values) => {
          const facts = [...values[1].data.data, ...values[2].data.data]
            .map((fact) => fact.attributes.body);
          const imgs = values[0];
          const dogInfo = imgs.data.message.map((img, index) => (
            {
              id: index,
              img,
              msg: facts[index],
              isLiked: false,
            }));
          store.dispatch(actions.addCards(dogInfo));
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en,
      },
      lng: 'en',
    });

  return (
    <Provider store={store}>
      <Header />
      <CardList />
    </Provider>
  );
}

export default App;
