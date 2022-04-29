"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = Container;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Container(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 0,
      width: '102mm',
      marginLeft: '1.5mm'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 0,
      boxSizing: 'border-box',
      margin: 'auto',
      display: 'flex',
      width: 'calc(102mm - 3mm)',
      columnGap: '1.5mm',
      flexWrap: 'wrap'
    }
  }, children)));
}

Container.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.elementType, _propTypes.default.element]))
};