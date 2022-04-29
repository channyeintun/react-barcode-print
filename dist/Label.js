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
    className: "card",
    style: {
      padding: 0,
      margin: 0,
      height: '0.740in',
      width: '32mm',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 0,
      margin: 0,
      overflow: 'hidden',
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      height: 'calc(100% - 2px)'
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