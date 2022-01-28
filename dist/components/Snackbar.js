"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/styles.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Usage
 * (type): 'error' for Errors & 'success' for Success Messages, : String,
 * (message): Actual Message, : String,
 * (duration): Duration for how long to show the snackbar, : Integer || Number,
 * (open): State for open or close, : Boolean,
 * (closeAlert): Function to be executed when closing snackbar: Function,
 */
const Snackbar = _ref => {
  let {
    type,
    message,
    duration,
    open,
    closeAlert
  } = _ref;
  (0, _react.useEffect)(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  (0, _react.useEffect)(() => {
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.body.removeChild(link);
    };
  }, []);
  (0, _react.useEffect)(() => {
    let timer1 = setTimeout(() => {
      closeAlert();
    }, duration ? duration : 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const onClickOutside = ref => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, _react.useEffect)(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeAlert();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = (0, _react.useRef)(null);
  onClickOutside(wrapperRef);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: wrapperRef,
    className: "snackbar alert-with-icon alert alert-dismissible ".concat(open ? 'show fadeIn' : 'fadeOut', " fade alert-").concat(type ? type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info' : 'success'),
    role: "alert"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close",
    "aria-label": "Close",
    onClick: closeAlert
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/_react.default.createElement("span", {
    "data-notify": "icon",
    className: "".concat(type === 'error' ? 'ri-alert-fill' : 'ri-checkbox-circle-line')
  }), /*#__PURE__*/_react.default.createElement("span", null, message));
};

Snackbar.propTypes = {
  type: _propTypes.default.string.isRequired,
  message: _propTypes.default.string.isRequired,
  duration: _propTypes.default.number,
  open: _propTypes.default.bool.isRequired,
  closeAlert: _propTypes.default.func.isRequired
};
var _default = Snackbar;
exports.default = _default;