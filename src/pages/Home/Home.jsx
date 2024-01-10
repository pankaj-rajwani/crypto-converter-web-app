import { Container } from '@/components/core';
import { Header, CurrencyConverterForm } from './components';

import style from './home.module.css';

export const Home = () => {
  return (
    <Container className={style.landing_container}>
      <Header />
      <CurrencyConverterForm />
    </Container>
  );
};
