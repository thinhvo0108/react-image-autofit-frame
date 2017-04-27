(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.index = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var AutofitImage = function (_Component) {
        _inherits(AutofitImage, _Component);

        function AutofitImage() {
            _classCallCheck(this, AutofitImage);

            return _possibleConstructorReturn(this, (AutofitImage.__proto__ || Object.getPrototypeOf(AutofitImage)).apply(this, arguments));
        }

        _createClass(AutofitImage, [{
            key: 'render',
            value: function render() {
                var bgSize = this.props.imgSize;
                if (!(['cover', 'contain'].indexOf(bgSize) > -1)) bgSize = 'cover';
                if (this.props.keepOriginalImgSize) bgSize = 'auto';
                var positionX = this.props.positionX;
                if (!(['left', 'center', 'right'].indexOf(positionX) > -1)) positionX = 'center';
                var positionY = this.props.positionY;
                if (!(['top', 'center', 'bottom'].indexOf(positionY) > -1)) positionY = 'center';
                var style = {
                    width: this.props.frameWidth,
                    height: this.props.frameHeight,
                    backgroundImage: 'url(' + this.props.imgSrc + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: positionX + ' ' + positionY,
                    backgroundSize: bgSize
                };
                return _react2.default.createElement('div', { style: style });
            }
        }]);

        return AutofitImage;
    }(_react.Component);

    exports.default = AutofitImage;

    AutofitImage.defaultProps = {
        keepOriginalImgSize: false,
        imgSize: 'cover',
        frameWidth: '100%',
        frameHeight: '100%',
        positionX: 'center',
        positionY: 'center'
    };
});