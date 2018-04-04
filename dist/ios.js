'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// method taken from https://github.com/richtr/NoSleep.js/blob/master/NoSleep.js
// needs testing.

var WakeLockIOS = (0, _createReactClass2.default)({

  displayName: "WakeLockIOS",

  propTypes: {
    preventSleep: _propTypes2.default.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      preventSleep: true
    };
  },
  componentDidMount: function componentDidMount() {
    this.syncState(this.props.preventSleep);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.syncState(false);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.syncState(nextProps.preventSleep);
  },
  syncState: function syncState(preventSleep) {

    if (preventSleep && !this.timer) {

      this.timer = setInterval(function () {

        if (!document.hidden) {
          // gh-richtr/NoSleep.js#25
          location.href = location.href; // gh-richtr/NoSleep.js#12
          setTimeout(window.stop, 0);
        }
      }, 15000);
    }

    if (!preventSleep && this.timer) {

      clearInterval(this.timer);
      this.timer = null;
    }
  },
  render: function render() {

    return null;
  }
});

exports.default = WakeLockIOS;