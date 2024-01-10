import { Grid } from '@mantine/core';
import { IconAlertCircle, IconX } from '@tabler/icons-react';
import { CoinLoader } from '@/components/misc';
import { homeConstants } from '@/utils/constants';
import { HandleStateProps, funcUtils } from './utils';
import { Inputfield, Dropdown } from '@/components/core';

import style from '../../home.module.css';

export const CurrencyConverterForm = () => {
  const state = HandleStateProps();

  return (
    <Grid className={style.form_wrapper}>
      {state.errorMessage ? (
        <div className={style.error_message}>
          <IconAlertCircle />
          <p>{state.errorMessage}</p>
          <IconX className={style.err_cross_icon} onClick={() => state.setErrorMessage('')} />
        </div>
      ) : null}
      <Grid.Col span={5}>
        <Dropdown
          data={state.cryptoCurrenciesListData}
          value={state.selectedCryptoCurrency.value}
          onChange={(val) =>
            funcUtils.handleDropdownOptionSelection(
              val,
              state.cryptoCurrenciesListData,
              state.setSelectedCryptoCurrency
            )
          }
          isDisabled={
            state.isFiatCurrencyLoading ||
            state.isAmountConverting ||
            state.isCryptoCurrencyLoading ||
            state.errorMessage
          }
        />
        <Inputfield
          variant='number'
          numConfig={{
            placeholder: homeConstants.CRYPTO_CURRENCY_AMOUNT_FIELD_PLACEHOLDER,
            value: state.cryptoCurrencyAmount,
            noOfDecimalPlaces: 2,
            minValue: homeConstants.MIN_CRYPTO_CURRENCY_AMOUNT,
            maxValue: homeConstants.MAX_CRYPTO_CURRENCY_AMOUNT,
            onChange: state.setCryptoCurrencyAmount,
            isDisabled:
              state.isFiatCurrencyLoading ||
              state.isAmountConverting ||
              state.isCryptoCurrencyLoading ||
              state.errorMessage,
          }}
        />
      </Grid.Col>
      <Grid.Col span={2} className={style.equals_to_sign_wrapper}>
        {state.isFiatCurrencyLoading || state.isAmountConverting || state.isCryptoCurrencyLoading ? (
          <CoinLoader style={style} />
        ) : (
          <p className={style.equals_to_sign}>{homeConstants.EQUALS_TO_SIGN}</p>
        )}
      </Grid.Col>
      <Grid.Col span={5}>
        <Dropdown
          data={state.fiatCurrenciesListData}
          value={state.selectedFiatCurrency.value}
          onChange={(val) =>
            funcUtils.handleDropdownOptionSelection(val, state.fiatCurrenciesListData, state.setSelectedFiatCurrency)
          }
          isDisabled={
            state.isFiatCurrencyLoading ||
            state.isAmountConverting ||
            state.isCryptoCurrencyLoading ||
            state.errorMessage
          }
        />
        <Inputfield
          variant='text'
          textConfig={{
            value: `${state.selectedFiatCurrency.sign} ${state.fiatCurrencyAmount}`,
            onChange: state.setFiatCurrencyAmount,
            isDisabled: true,
          }}
        />
      </Grid.Col>
    </Grid>
  );
};
