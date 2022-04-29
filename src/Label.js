import React from 'react';
import PropTypes from 'prop-types';

export function Label({
      myRef,
      price,
      sku
}) {
      return (
            <div className='card' style={{
                  padding: 0,
                  margin: 0,
                  height: '0.740in',
                  width: '32mm',
                  overflow:'hidden'
            }}>
                  <div style={{
                        padding: 0,
                        margin: 0,
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'grid',
                        placeItems: 'center',
                        height:'calc(100% - 2px)'
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