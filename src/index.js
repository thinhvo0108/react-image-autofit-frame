import React, {Component} from 'react';
import PropTypes from 'prop-types';

const bgSizeOptions = ['cover','contain'];
const positionXOptions = ['left','center','right'];
const positionYOptions =  ['top','center','bottom'];

export default class AutofitImage extends Component {
    static propTypes = {
        keepOriginalImgSize: PropTypes.boolean,
        imgSize: PropTypes.oneOf(bgSizeOptions),
        frameWidth: PropTypes.string,
        frameHeight: PropTypes.string,
        positionX: PropTypes.oneOf(positionXOptions),
        positionY: PropTypes.oneOf(positionYOptions),
        imgSrc: PropTypes.string
    };

    static defaultProps = {
        keepOriginalImgSize: false,
        imgSize: 'cover',
        frameWidth: '100%',
        frameHeight: '100%',
        positionX: 'center',
        positionY: 'center'
    };

    static bgSizeOptions = bgSizeOptions;
    static positionXOptions = positionXOptions;
    static positionYOptions = positionYOptions;

    render() {
        var bgSize = this.props.imgSize;
        if (!(this.bgSizeOptions.indexOf(bgSize) > -1)) bgSize = 'cover';
        if (this.props.keepOriginalImgSize) bgSize = 'auto';
        var positionX = this.props.positionX;
        if (!(this.positionXOptions.indexOf(positionX) > -1)) positionX = 'center';
        var positionY = this.props.positionY;
        if (!(this.positionYOptions.indexOf(positionY) > -1))  positionY = 'center';
        var style = {
            width: this.props.frameWidth,
            height: this.props.frameHeight,
            backgroundImage: 'url('+this.props.imgSrc+')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: positionX+' '+positionY,
            backgroundSize: bgSize,
        }
        return <div style={style}></div>;
    }
}