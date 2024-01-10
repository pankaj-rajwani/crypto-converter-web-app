import { debounce } from 'lodash';
import { useState, useEffect, useCallback } from 'react';
import { performInitialDataFetching, convertCryptoCurrencyIntoFiatCurrency } from './utils.func';

export const HandleStateProps = () => {
  const [cryptoCurrenciesListData, setCryptoCurrenciesListData] = useState([]);
  const [fiatCurrenciesListData, setFiatCurrenciesListData] = useState([]);
  const [selectedCryptoCurrency, setSelectedCryptoCurrency] = useState({ label: '', value: '' });
  const [selectedFiatCurrency, setSelectedFiatCurrency] = useState({ label: '', value: '', sign: '' });
  const [cryptoCurrencyAmount, setCryptoCurrencyAmount] = useState(100);
  const [fiatCurrencyAmount, setFiatCurrencyAmount] = useState(0);
  const [isCryptoCurrencyLoading, setIsCryptoCurrencyLoading] = useState(true);
  const [isFiatCurrencyLoading, setIsFiatCurrencyLoading] = useState(true);
  const [isAmountConverting, setIsAmountConverting] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const debouncedConversion = useCallback(
    debounce(async () => {
      if (cryptoCurrencyAmount > 0 && selectedCryptoCurrency.value.length && selectedFiatCurrency.value.length) {
        setIsAmountConverting(true);
        await convertCryptoCurrencyIntoFiatCurrency(
          cryptoCurrencyAmount,
          selectedCryptoCurrency,
          selectedFiatCurrency,
          setFiatCurrencyAmount,
          setIsAmountConverting,
          setErrorMessage
        );
      }
    }, 800),
    [cryptoCurrencyAmount, selectedCryptoCurrency, selectedFiatCurrency]
  );

  useEffect(() => {
    (async () => {
      setErrorMessage('');
      await performInitialDataFetching(
        setSelectedFiatCurrency,
        setCryptoCurrenciesListData,
        setSelectedCryptoCurrency,
        setFiatCurrenciesListData,
        setIsCryptoCurrencyLoading,
        setIsFiatCurrencyLoading,
        setIsAmountConverting,
        setErrorMessage
      );
    })();
  }, []);

  useEffect(() => {
    setErrorMessage('');
    debouncedConversion();
    return () => debouncedConversion.cancel();
  }, [debouncedConversion]);

  return {
    cryptoCurrenciesListData,
    setCryptoCurrenciesListData,
    fiatCurrenciesListData,
    setFiatCurrenciesListData,
    selectedCryptoCurrency,
    setSelectedCryptoCurrency,
    selectedFiatCurrency,
    setSelectedFiatCurrency,
    cryptoCurrencyAmount,
    setCryptoCurrencyAmount,
    fiatCurrencyAmount,
    setFiatCurrencyAmount,
    isCryptoCurrencyLoading,
    setIsCryptoCurrencyLoading,
    isFiatCurrencyLoading,
    setIsFiatCurrencyLoading,
    isAmountConverting,
    setIsAmountConverting,
    errorMessage,
    setErrorMessage,
  };
};
