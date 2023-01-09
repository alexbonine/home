import { useEffect, useState } from 'react';
import { MQBreakpointsPixels, MQConstants } from '../styles/screenSize';

const Queries = {
  [MQConstants.mobile]: `(max-width: ${MQBreakpointsPixels.mobileMax})`,
  [MQConstants.tablet]: `(max-width: ${MQBreakpointsPixels.tabletMax})`,
  [MQConstants.desktop]: `(min-width: ${MQBreakpointsPixels.desktopMin})`,
};

export default function useMediaColumns(queryValues = [], defaultValue = MQConstants.mobile) {
  const match = () =>
    (queryValues.find((queryObj) => window.matchMedia(Queries[queryObj.query]).matches) || { value: defaultValue })
      .value;

  const [value, set] = useState(match);

  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, [match]);

  return value;
}
