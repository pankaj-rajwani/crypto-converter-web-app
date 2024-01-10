import { homeConstants } from '@/utils/constants';
import { CryptoCurrencyService } from '@/services';

export const performInitialDataFetching = async (
  setSelectedFiatCurrency,
  setCryptoCurrenciesListData,
  setSelectedCryptoCurrency,
  setFiatCurrenciesListData,
  setIsCryptoCurrencyLoading,
  setIsFiatCurrencyLoading,
  setIsAmountConverting,
  setErrorMessage
) => {
  await CryptoCurrencyService.getCryptoAndFiatCurrencies()
    .then(async (resp) => {
      const formattedCryptoData = resp.data.data.cryptoCurrencies.map(({ id, name, symbol }) => {
        return {
          label: `${name} (${symbol})`,
          value: id.toString(),
        };
      });
      const formattedFiatData = resp.data.data.fiatCurrencies.map(({ id, name, symbol, sign }) => {
        const data = {
          label: `${name} (${symbol})`,
          value: id.toString(),
          sign,
        };
        if (symbol === 'USD') {
          setSelectedFiatCurrency(data);
        }
        return data;
      });
      setCryptoCurrenciesListData(formattedCryptoData);
      setSelectedCryptoCurrency(formattedCryptoData[0]);
      setFiatCurrenciesListData(formattedFiatData);
      setIsCryptoCurrencyLoading(false);
      setIsFiatCurrencyLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setErrorMessage(homeConstants.CRYPTO_AND_FIAT_CURRENCIES_FETCH_ERROR);
      setIsCryptoCurrencyLoading(false);
      setIsFiatCurrencyLoading(false);
      setIsAmountConverting(false);
    });
};

export const convertCryptoCurrencyIntoFiatCurrency = async (
  cryptoCurrencyAmount,
  selectedCryptoCurrency,
  selectedFiatCurrency,
  setFiatCurrencyAmount,
  setIsAmountConverting,
  setErrorMessage
) => {
  await CryptoCurrencyService.convertCryptoCurrencyAmount(
    cryptoCurrencyAmount,
    selectedCryptoCurrency.value,
    selectedFiatCurrency.value
  )
    .then((resp) => {
      const convertedAmount = parseFloat(resp.data.data.quote[selectedFiatCurrency.value].price);
      setFiatCurrencyAmount(convertedAmount.toFixed(2));
      setIsAmountConverting(false);
    })
    .catch((err) => {
      console.log(err);
      setErrorMessage(homeConstants.CURRENCY_CONVERSION_ERROR);
      setIsAmountConverting(false);
    });
};

export const handleDropdownOptionSelection = (val, options, setterMethod) => {
  const selected = options.find((option) => option.value === val);
  setterMethod(selected);
};

export const delayFunctionCall = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
