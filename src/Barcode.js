import React, { useState } from "react";
import PropTypes from 'prop-types';
import JsBarcode from "jsbarcode";
import { Label } from "./Label";
import { Container } from "./Container";

const JSBARCODE_OPTIONS = {
      width: 0.93,
      height: 30,
      fontSize: "12px",
      lineColor: 'black',
      fontOptions: '800',
      displayValue: false
};

export function Barcode({ labels, currencyUnit }) {
      const [bindRefData, setBindRefData] = useState(null);

      // generating barcode must happen only after mounted
      const [isMounted, setMounted] = useState(false);

      React.useEffect(() => {
            if (!isMounted) {
                  const data = labels.map(item => {
                        return {
                              ...item,
                              sku: item.sku + '',
                              // ref is needed to generate barcode for specific label
                              ref: React.createRef(),
                        }
                  });
                  setBindRefData(data);
                  setMounted(true);
            } else {
                  // generate barcode for each label from array
                  // this must happen only after items are rendered so that can access dom node using ref
                  bindRefData.map(item => {
                        JsBarcode(item.ref.current, item.sku, JSBARCODE_OPTIONS)
                  });

            }
      }, [isMounted]);
      return (
            <Container>
                  {
                        bindRefData?.map(
                              (item,index) => <Label
                                    key={index}
                                    myRef={item.ref}
                                    sku={item.sku}
                                    price={item.price + currencyUnit} />)
                  }
            </Container>
      );
}

Barcode.propTypes = {
      labels: PropTypes.arrayOf(
            PropTypes.shape({
                  id: PropTypes.number,
                  price: PropTypes.number,
                  sku: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                  ]),
            })).isRequired,
      currencyUnit: PropTypes.string
}

Barcode.defaultProps = {
      labels: [],
      currencyUnit: '$'
}
