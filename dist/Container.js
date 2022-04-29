"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = Container;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        padding: 0,
        width: '102mm',
        marginLeft: '1.5mm'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          padding: 0,
          margin: 'auto',
          display: 'flex',
          width: 'calc(102mm - 3mm)',
          columnGap: '1.5mm',
          flexWrap: 'wrap'
        },
        children: children
      })
    })
  });
}

Container.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]))
};