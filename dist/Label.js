"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = Label;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Label(_ref) {
  let {
    myRef,
    price,
    sku
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      height: 'calc(19mm - 1px)',
      width: '32mm'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 0,
      margin: 0,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'end',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    style: {
      position: 'absolute',
      top: 4,
      left: '50%',
      fontSize: '12px',
      transform: 'translateX(-50%)'
    }
  }, price, "ks"), /*#__PURE__*/_react.default.createElement("img", {
    ref: myRef,
    src: "",
    alt: "test"
  }), /*#__PURE__*/_react.default.createElement("label", {
    style: {
      position: 'absolute',
      bottom: 0,
      textAlign: 'center',
      fontSize: '12px',
      fontWeight: '600',
      lineHeight: '1.13rem',
      width: '100%'
    }
  }, sku)));
}

Label.propTypes = {
  myRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.instanceOf(Element)
  })]).isRequired,
  price: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  sku: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};