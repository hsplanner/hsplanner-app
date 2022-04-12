import { Dimensions, PixelRatio } from 'react-native';

// Get dimensions of phone
const { height, width } = Dimensions.get('window');

// GET WIDTH
const wp = widthPercent => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100,
  );
  return screenPixel;
};

// GET HEIGHT
const hp = heightPixel => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (height * parseFloat(heightPixel)) / 100,
  );
  return screenPixel;
};

// FIGMA PROPORTIONS
const figmaWidth = 375;

const px = valuePx => {
  const widthPercent = (valuePx / figmaWidth) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100,
  );
  return screenPixel;
};

export const metrics = {
  wp,
  hp,
  px,
};
