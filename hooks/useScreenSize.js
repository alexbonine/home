import { useEffect, useState } from 'react';
import { MQBreakpoints, MQConstants } from '../styles/screenSize';

const getScreenSize = (width) => {
  if (width <= MQBreakpoints.mobileMax) {
    return MQConstants.mobile;
  } else if (width <= MQBreakpoints.tabletMax) {
    return MQConstants.tablet;
  }

  return MQConstants.desktop;
};

export default function useScreenSize(initialValues = {}) {
  const [screenSize, setScreenSize] = useState({
    size: getScreenSize(initialValues.width || 375),
    height: initialValues.height || 812,
    width: initialValues.width || 375,
  });

  useEffect(() => {
    const height = (window && window.innerHeight) || 0;
    const width = (window && window.innerWidth) || 0;
    setScreenSize({ height, width });
    console.log('on browser?');

    const handler = () => {
      console.log('resize', window.innerHeight, window.innerWidth);
      setScreenSize({ height: window.innerHeight, size: getScreenSize(window.innerWidth), width: window.innerWidth });
    };
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  return screenSize;
}
