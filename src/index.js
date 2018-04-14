import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AutofitImage extends Component {
    static propTypes = {
        keepOriginalImgSize: PropTypes.boolean,
        imgSize: PropTypes.string,
        frameWidth: PropTypes.string,
        frameHeight: PropTypes.string,
        positionX: PropTypes.string,
        positionY: PropTypes.string,
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

    render() {
        var bgSize = this.props.imgSize;
        if (!(['cover','contain'].indexOf(bgSize) > -1)) bgSize = 'cover';
        if (this.props.keepOriginalImgSize) bgSize = 'auto';
        var positionX = this.props.positionX;
        if (!(['left','center','right'].indexOf(positionX) > -1)) positionX = 'center';
        var positionY = this.props.positionY;
        if (!(['top','center','bottom'].indexOf(positionY) > -1))  positionY = 'center';
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
