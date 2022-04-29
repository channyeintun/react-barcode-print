import PropTypes from 'prop-types';

export function Label({
      myRef,
      price,
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
                        justifyContent: 'center',
                        alignItems: 'end',
                        height: '100%'
                  }}>
                        <label style={{
                              position: 'absolute',
                              top: 0,
                              left: '50%',
                              fontSize: '12px',
                              transform: 'translateX(-50%)'
                        }}>{price}ks</label>
                        <img ref={myRef} src="" alt="test" />
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
}