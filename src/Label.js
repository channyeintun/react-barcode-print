import React from 'react';
import PropTypes from 'prop-types';

export function Label({
      myRef,
      price,
      sku
}) {
      return (
            <div style={{
                  padding: 0,
                  margin: 0,
                  boxSizing: 'border-box',
                  height: 'calc(19mm - 1px)',
                  width: '32mm',
            }}>
                  <div style={{
                        padding: 0,
                        margin: 0,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'end',
                        height: '100%'
                  }}>
                        <label style={{
                              position: 'absolute',
                              top: 4,
                              left: '50%',
                              fontSize: '12px',
                              transform: 'translateX(-50%)'
                        }}>{price}ks</label>
                        <img ref={myRef} src="" alt="test" />
                        <label style={{
                              position: 'absolute',
                              bottom: 0,
                              textAlign: 'center',
                              fontSize: '12px',
                              fontWeight: '600',
                              lineHeight: '1.13rem',
                              width: '100%'
                        }}>{sku}</label>
                  </div>
            </div>
      );
}

Label.propTypes = {
      myRef: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.shape({ current: PropTypes.instanceOf(Element) })
      ]).isRequired,
      price: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
      ]).isRequired,
      sku: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
      ]).isRequired,
}