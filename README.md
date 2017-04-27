# react-image-autofit-frame
React component displaying image that always fits its frame, regardless of size, orientation (portrait or landscape) while keeping original ratio

## Install

```bash
npm install --save react-image-autofit-frame
```

## Usage

### Example

```javascript
import AutoFitImage from 'react-image-autofit-frame';

class MyApp extends React.Component {
    render() {
    	// The frame's width and height should be pre-defined, sometimes inheriting from parent's CSS (using %) is still fine
    	// You can also use "style" attribute to apply on the component
        return (
            <AutoFitImage frameWidth="500px" frameHeight="400px" imgSrc="https://dummyimage.com/600x400/00ffee/fff" style={{/*..your style here..*/}}/>
        );
    }
}
```

### Props

- `imgSrc: String` - Your image source, either absolute or relative path, or URL
- `frameWidth: String (default: "100%")` - Width of the frame for your image, it is string because you can use either "500px" or "100%" - inherits from its parent-DOM
- `frameHeight: String (default: "100%")` - Same as frameWidth, you can also use either "px" or "%" here. however, it is recommended to use height here to make sure the frame’s height will not be 0px 
- `positionX: String (VALUES: "left"/"center"/"right", DEFAULT: "center")` - which part of image (X-axis) will be focused and displayed
- `positionY: String (VALUES: "top"/"center"/"bottom", DEFAULT: "center")` - which part of image (Y-axis) will be focused and displayed
- `keepOriginalImgSize: Boolean (default: "false")`
    + If this is set to `false`: either the width or the height [the bigger dimension] of image will be scaled down/up to fit with the frame, the other dimension will depend on positionX and positionY below - 
    + If this is set to `true`: use original image size, no scaling, and the below `imgSize` props will not take effect!
- `imgSize: String (VALUES: "cover"/"contain", DEFAULT: "cover")` - This is just like background-size's value 
    + `"cover"` means: Scale the background image to be as large as possible so that the background area is completely covered by the background image. Some parts of the background image may not be in view within the background positioning area
    + `"contain"` means: Scale the image to the largest size such that both its width and its height can fit inside the content area

## Thank you

- [React NPM Boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)

## License

MIT
