import React, { useState } from "react";
import PropTypes from 'prop-types';
import JsBarcode from "jsbarcode";

const JSBARCODE_OPTIONS = {
      width: 0.93,
      height: 30,
      fontSize: "12px",
      lineColor: 'black',
      fontOptions: '800',
      displayValue: false
};

export const Barcode = React.forwardRef(function ({ labels, currencyUnit, ref }) {
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
            <div
                  ref={ref}
                  style={{
                        padding: 0,
                        width: '102mm',
                        marginLeft: '1.5mm'
                  }}>
                  <div style={{
                        padding: 0,
                        margin: 'auto',
                        display: 'flex',
                        width: 'calc(102mm - 3mm)',
                        columnGap: '1.5mm',
                        flexWrap: 'wrap',
                  }}>
                        {
                              bindRefData?.map(
                                    (item, index) => <div key={index}
                                          style={{
                                                padding: 0,
                                                margin: 0,
                                                height: '0.740in',
                                                width: '32mm',
                                                overflow: 'hidden'
                                          }}>
                                          <div style={{
                                                padding: 0,
                                                margin: 0,
                                                overflow: 'hidden',
                                                position: 'relative',
                                                display: 'grid',
                                                placeItems: 'center',
                                                height: 'calc(100% - 2px)'
                                          }}>
                                                <label style={{
                                                      position: 'absolute',
                                                      top: 4,
                                                      left: '50%',
                                                      fontSize: '12px',
                                                      transform: 'translateX(-50%)'
                                                }}>{item.price + currencyUnit}</label>
                                                <img ref={item.ref} src="" alt="test" />
                                                <label style={{
                                                      position: 'absolute',
                                                      bottom: 0,
                                                      textAlign: 'center',
                                                      fontSize: '12px',
                                                      fontWeight: '600',
                                                      lineHeight: '1.13rem',
                                                      width: '100%'
                                                }}>{item.sku}</label>
                                          </div>
                                    </div>)
                        }
                  </div>
            </div>
      );
});

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
      currencyUnit: PropTypes.string,
      ref: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.shape({ current: PropTypes.instanceOf(Element) })
      ])

}

Barcode.defaultProps = {
      labels: [],
      currencyUnit: '$'
}
