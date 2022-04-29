"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Barcode = Barcode;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsbarcode = _interopRequireDefault(require("jsbarcode"));

var _Label = require("./Label");

var _Container = require("./Container");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const JSBARCODE_OPTIONS = {
  width: 1,
  height: 30,
  fontSize: "12px",
  lineColor: 'black',
  fontOptions: '800'
};

function Barcode(_ref) {
  let {
    labels
  } = _ref;
  const [bindRefData, setBindRefData] = (0, _react.useState)(null); // generating barcode must happen only after mounted

  const [isMounted, setMounted] = (0, _react.useState)(false);

  _react.default.useEffect(() => {
    if (!isMounted) {
      const data = labels.map(item => {
        return _objectSpread(_objectSpread({}, item), {}, {
          sku: item.sku + '',
          // ref is needed to generate barcode for specific label
          ref: /*#__PURE__*/_react.default.createRef()
        });
      });
      setBindRefData(data);
      setMounted(true);
    } else {
      // generate barcode for each label from array
      // this must happen only after items are rendered so that can access dom node using ref
      bindRefData.map(item => {
        (0, _jsbarcode.default)(item.ref.current, item.sku, JSBARCODE_OPTIONS);
      });
    }
  }, [isMounted]);

  return /*#__PURE__*/_react.default.createElement(_Container.Container, null, bindRefData === null || bindRefData === void 0 ? void 0 : bindRefData.map(item => /*#__PURE__*/_react.default.createElement(_Label.Label, {
    key: item.id,
    myRef: item.ref,
    price: item.price
  })));
}

Barcode.propTypes = {
  labels: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    price: _propTypes.default.number,
    sku: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  })).isRequired
};
Barcode.defaultProps = {
  labels: []
};