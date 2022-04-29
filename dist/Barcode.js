"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Barcode = Barcode;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsbarcode = _interopRequireDefault(require("jsbarcode"));

var _Label = require("./Label");

var _Container = require("./Container");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var JSBARCODE_OPTIONS = {
  width: 0.93,
  height: 30,
  fontSize: "12px",
  lineColor: 'black',
  fontOptions: '800',
  displayValue: false
};

function Barcode(_ref) {
  var labels = _ref.labels,
      currencyUnit = _ref.currencyUnit;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      bindRefData = _useState2[0],
      setBindRefData = _useState2[1]; // generating barcode must happen only after mounted


  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isMounted = _useState4[0],
      setMounted = _useState4[1];

  React.useEffect(function () {
    if (!isMounted) {
      var data = labels.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          sku: item.sku + '',
          // ref is needed to generate barcode for specific label
          ref: React.createRef()
        });
      });
      setBindRefData(data);
      setMounted(true);
    } else {
      // generate barcode for each label from array
      // this must happen only after items are rendered so that can access dom node using ref
      bindRefData.map(function (item) {
        (0, _jsbarcode["default"])(item.ref.current, item.sku, JSBARCODE_OPTIONS);
      });
    }
  }, [isMounted]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.Container, {
    children: bindRefData === null || bindRefData === void 0 ? void 0 : bindRefData.map(function (item) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label.Label, {
        myRef: item.ref,
        sku: item.sku,
        price: item.price + currencyUnit
      }, item.id);
    })
  });
}

Barcode.propTypes = {
  labels: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].number,
    price: _propTypes["default"].number,
    sku: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
  })).isRequired,
  currencyUnit: _propTypes["default"].string
};
Barcode.defaultProps = {
  labels: [],
  currencyUnit: '$'
};