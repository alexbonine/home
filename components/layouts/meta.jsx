import PropTypes from 'prop-types';
import Head from 'next/head';

// viewport maximum-scale=1, user-scalable=no
const Meta = ({ description, image, title }) => {
  const fullTitle = `Alex Bonine - ${title}`;

  return (
    <div>
      <Head>
        <title>{fullTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="author" content="Alex Bonine" />
        <meta property="og:title" content={fullTitle} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta property="og:image" content={image} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  image: '', // todo
};

const MetaPropTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Meta.propTypes = MetaPropTypes;

export const MetaShape = PropTypes.shape(MetaPropTypes);

export default Meta;
