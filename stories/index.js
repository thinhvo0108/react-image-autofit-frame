import React from 'react';
import { storiesOf } from '@storybook/react';
import Example from './example';
import photoExample from './assets/photo-example.jpg';
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs/react';

const keepOriginalImgSize = () => boolean('keepOriginalImgSize', true);
const imgSize = () => select('imgSize', ['cover', 'contain']);
const frameWidth = () => text('frameWidth', '100%');
const frameHeight = () => text('frameHeight', '100%');
const positionX = () => select('positionX', ['center', 'left', 'right']);
const positionY = () => select('positionY', ['center', 'top', 'bottom']);
const imgSrc = () => text('imgSrc', photoExample);

const containerElementWidth = () => text(`container element's width`, 400);
const containerElementHeight = () => text(`container element's height`, 400);

storiesOf('AutofitImage', module)
  .addDecorator(withKnobs)
  .add('example', () => (
    <Example
        keepOriginalImgSize={keepOriginalImgSize()}
        frameWidth={frameWidth()}
        frameHeight={frameHeight()}
        imgSize={imgSize()}
        imgSrc={imgSrc()}
        positionX={positionX()}
        positionY={positionY()}
        containerElementWidth={containerElementWidth()}
        containerElementHeight={containerElementHeight()}
    />
  ));