import { getDisplayName } from './hocsHelpers';

const withMeta = (Page, meta) => {
  const WithMeta = (props) => <Page {...props} />; // eslint-disable-line react/jsx-props-no-spreading

  WithMeta.displayName = getDisplayName('WithMeta', Page);
  WithMeta.meta = meta;

  return WithMeta;
};

export default withMeta;
