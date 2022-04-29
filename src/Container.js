import PropTypes from 'prop-types';

export function Container({ children }) {
      return (
            <>
                  <div style={{
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
                              {children}
                        </div>
                  </div>
            </>
      );
}

Container.propTypes = {
      children: PropTypes.arrayOf(
            PropTypes.oneOfType([
                  PropTypes.elementType,
                  PropTypes.element
            ]))
}