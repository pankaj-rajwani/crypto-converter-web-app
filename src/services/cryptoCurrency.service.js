import config from './config';

const instance = config('cryptoCurrency');

export const getCryptoAndFiatCurrencies = (limit = 100) => {
  return instance({
    method: 'GET',
    url: `/crypto-and-fiat/list`,
    params: { limit },
  });
};

export const convertCryptoCurrencyAmount = (amount, cryptoId, targetCurrency) => {
  return instance({
    method: 'GET',
    url: '/currency-converter',
    params: {
      amount,
      crypto_currency_cmc_id: cryptoId,
      fiat_currency_cmc_id: targetCurrency,
    },
  });
};
