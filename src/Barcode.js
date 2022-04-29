import React, { useState } from "react";
import PropTypes from 'prop-types';
import JsBarcode from "jsbarcode";
import { Label } from "./Label";
import { Container } from "./Container";

const JSBARCODE_OPTIONS = {
      width: 1,
      height: 30,
      fontSize: "12px",
      lineColor: 'black',
      fontOptions: '800'
};

export function Barcode({ labels }) {
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
                              item => <Label
                                    key={item.id}
                                    myRef={item.ref}
                                    price={item.price} />)
                  }
            </Container>
      );
}

Barcode.propTypes = {
      labels: PropTypes.arrayOf(
            PropTypes.shape({
                  id: PropTypes.string,
                  price: PropTypes.number,
                  sku: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                  ]),
            })).isRequired,
}

Barcode.defaultProps = {
      labels: []
}
