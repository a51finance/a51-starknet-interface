// import {  } from '@lingui/macro'
import { Currency } from "@uniswap/sdk-core";
import { Position } from "@uniswap/v3-sdk";
import RangeBadge from "components/Badge/RangeBadge";
import { LightCard } from "components/Card";
import { AutoColumn } from "components/Column";
// import DoubleCurrencyLogo from "components/DoubleLogo";
import { Break } from "components/earn/styled";
// import CurrencyLogo from "components/Logo/CurrencyLogo";
import RateToggle from "components/RateToggle";
import { RowBetween, RowFixed } from "components/Row";
import JSBI from "jsbi";
import { ReactNode, useCallback, useState } from "react";
// import { Bound } from 'state/mint/v3/actions'
import { useTheme } from "styled-components";
import { ThemedText } from "theme/components";
// import { useFormatter } from "utils/formatNumbers";
// import { unwrappedToken } from "utils/unwrappedToken";

export const PositionPreview = ({
  position,
  title,
  inRange,
  baseCurrencyDefault,
  ticksAtLimit
}: {
  position?: Position;
  title?: ReactNode;
  inRange?: boolean;
  baseCurrencyDefault?: Currency;
  ticksAtLimit?: { [bound: string]: boolean | undefined };
}) => {
  const theme = useTheme();
  //   const { formatTickPrice } = useFormatter();

  //   const currency0 = unwrappedToken(position.pool.token0);
  //   const currency1 = unwrappedToken(position.pool.token1);

  // track which currency should be base
  //   const [baseCurrency, setBaseCurrency] = useState(
  //     baseCurrencyDefault
  //       ? baseCurrencyDefault === currency0
  //         ? currency0
  //         : baseCurrencyDefault === currency1
  //         ? currency1
  //         : currency0
  //       : currency0
  //   );

  //   const sorted = baseCurrency === currency0;
  //   const quoteCurrency = sorted ? currency1 : currency0;

  //   const price = sorted
  //     ? position.pool.priceOf(position.pool.token0)
  //     : position.pool.priceOf(position.pool.token1);

  //   const priceLower = sorted
  //     ? position.token0PriceLower
  //     : position.token0PriceUpper.invert();
  //   const priceUpper = sorted
  //     ? position.token0PriceUpper
  //     : position.token0PriceLower.invert();

  //   const handleRateChange = useCallback(() => {
  //     setBaseCurrency(quoteCurrency);
  //   }, [quoteCurrency]);

  //   const removed =
  //     position?.liquidity && JSBI.equal(position?.liquidity, JSBI.BigInt(0));

  return (
    <AutoColumn gap="md" style={{ marginTop: "0.5rem" }}>
      <RowBetween style={{ marginBottom: "0.5rem" }}>
        <RowFixed>
          {/*  <DoubleCurrencyLogo
            currency0={currency0 ?? undefined}
            currency1={currency1 ?? undefined}
            size={24}
            margin={true}
          /> */}
          <ThemedText.DeprecatedLabel ml="10px" fontSize="24px">
            {/* {currency0?.symbol} / {currency1?.symbol} */}
            UNI / ETH
          </ThemedText.DeprecatedLabel>
        </RowFixed>
        {/* <RangeBadge removed={removed} inRange={inRange} /> */}
      </RowBetween>

      <LightCard>
        <AutoColumn gap="md">
          <RowBetween>
            <RowFixed>
              {/* <CurrencyLogo currency={currency0} /> */}
              <ThemedText.DeprecatedLabel ml="8px">
                {/* {currency0?.symbol} */}ETH
              </ThemedText.DeprecatedLabel>
            </RowFixed>
            <RowFixed>
              <ThemedText.DeprecatedLabel mr="8px">
                {/* {position.amount0.toSignificant(4)} */}0.01
              </ThemedText.DeprecatedLabel>
            </RowFixed>
          </RowBetween>
          <RowBetween>
            <RowFixed>
              {/* <CurrencyLogo currency={currency1} /> */}
              <ThemedText.DeprecatedLabel ml="8px">
                {/* {currency1?.symbol} */}USDC
              </ThemedText.DeprecatedLabel>
            </RowFixed>
            <RowFixed>
              <ThemedText.DeprecatedLabel mr="8px">
                {/* {position.amount1.toSignificant(4)} */}37.92
              </ThemedText.DeprecatedLabel>
            </RowFixed>
          </RowBetween>
          <Break />
          <RowBetween>
            <ThemedText.DeprecatedLabel>
              <>Fee tier</>
            </ThemedText.DeprecatedLabel>
            <ThemedText.DeprecatedLabel>
              {/* <>{position?.pool?.fee / 10000}%</> */}
              0.3%
            </ThemedText.DeprecatedLabel>
          </RowBetween>
        </AutoColumn>
      </LightCard>

      <AutoColumn gap="md">
        <RowBetween>
          {title ? (
            <ThemedText.DeprecatedMain>{title}</ThemedText.DeprecatedMain>
          ) : (
            <div />
          )}
          {/* <RateToggle
            currencyA={sorted ? currency0 : currency1}
            currencyB={sorted ? currency1 : currency0}
            handleRateToggle={handleRateChange}
          /> */}
        </RowBetween>

        <RowBetween>
          <LightCard width="48%" padding="8px">
            <AutoColumn gap="4px" justify="center">
              <ThemedText.DeprecatedMain fontSize="12px">
                <>Min price</>
              </ThemedText.DeprecatedMain>
              <ThemedText.DeprecatedMediumHeader textAlign="center">
                {/* {formatTickPrice({
                  price: priceLower,
                  atLimit: ticksAtLimit,
                  direction: Bound.LOWER,
                })} */}
                1628.49
              </ThemedText.DeprecatedMediumHeader>
              <ThemedText.DeprecatedMain textAlign="center" fontSize="12px">
                <>{/* {quoteCurrency.symbol} per {baseCurrency.symbol} */}</>
                USDC per ETH
              </ThemedText.DeprecatedMain>
              <ThemedText.DeprecatedSmall
                textAlign="center"
                color={theme.neutral3}
                style={{ marginTop: "4px" }}
              >
                <>
                  Your position will be 100% composed of
                  {/* {baseCurrency?.symbol} */}
                  at this price
                </>
              </ThemedText.DeprecatedSmall>
            </AutoColumn>
          </LightCard>

          <LightCard width="48%" padding="8px">
            <AutoColumn gap="4px" justify="center">
              <ThemedText.DeprecatedMain fontSize="12px">
                <>Max price</>
              </ThemedText.DeprecatedMain>
              <ThemedText.DeprecatedMediumHeader textAlign="center">
                {/* {formatTickPrice({
                  price: priceUpper,
                  atLimit: ticksAtLimit,
                  direction: Bound.UPPER,
                })} */}
                1825
              </ThemedText.DeprecatedMediumHeader>
              <ThemedText.DeprecatedMain textAlign="center" fontSize="12px">
                <>{/* {quoteCurrency.symbol} per {baseCurrency.symbol} */}</>
                USDC per ETH
              </ThemedText.DeprecatedMain>
              <ThemedText.DeprecatedSmall
                textAlign="center"
                color={theme.neutral3}
                style={{ marginTop: "4px" }}
              >
                <>
                  Your position will be 100% composed of
                  {/* {quoteCurrency?.symbol} */}
                  at this price
                </>
              </ThemedText.DeprecatedSmall>
            </AutoColumn>
          </LightCard>
        </RowBetween>
        <LightCard padding="12px ">
          <AutoColumn gap="4px" justify="center">
            <ThemedText.DeprecatedMain fontSize="12px">
              <>Current price</>
            </ThemedText.DeprecatedMain>
            {/* <ThemedText.DeprecatedMediumHeader>{`${price.toSignificant(
              5
            )} `}</ThemedText.DeprecatedMediumHeader> */}
            1805
            <ThemedText.DeprecatedMain textAlign="center" fontSize="12px">
              <>{/* {quoteCurrency.symbol} per {baseCurrency.symbol} */}</>
              USDC per ETH
            </ThemedText.DeprecatedMain>
          </AutoColumn>
        </LightCard>
      </AutoColumn>
    </AutoColumn>
  );
};
