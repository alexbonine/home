import PropTypes from 'prop-types';
import Head from 'next/head';

// viewport maximum-scale=1, user-scalable=no
const Meta = ({ description, image, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="author" content="Alex Bonine" />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta property="og:image" content={image} />
      <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
    </Head>
  </div>
);

Meta.defaultProps = {
  description:
    "This is the Amazing Alex Bonine's Bodacious website. Alex Bonine has architectured multiple companies' front-ends in React and Vue and is currently the Lead (read 'only') Software Engineer at Leap Life.",
  image: '',
  title: "Alex Bonine's Amazing Website",
};

Meta.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default Meta;
