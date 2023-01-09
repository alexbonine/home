/** @jsxImportSource @emotion/react */
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Collapse from './collapse';
import App from '@/styles/constants/app';
import TextButton from '@/components/buttons/text';

const ShowMoreContainer = styled.div`
  margin-top: ${App.full};
`;

const ShowMore = ({ children, id, textClosed, textOpened }) => {
  const [isOpen, setOpen] = useState(false);
  const onClick = useCallback(() => {
    setOpen(!isOpen);
  }, [setOpen, isOpen]);

  return (
    <ShowMoreContainer>
      <TextButton
        css={css`
          margin-bottom: ${isOpen ? App.full : 0};
        `}
        id={`show-more-${id}`}
        onClick={onClick}
      >
        {isOpen ? textOpened : textClosed}
      </TextButton>
      <Collapse isOpen={isOpen}>{children}</Collapse>
    </ShowMoreContainer>
  );
};

ShowMore.propTypes = {
  id: PropTypes.string.isRequired,
  textClosed: PropTypes.string,
  textOpened: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ShowMore.defaultProps = {
  textClosed: 'Show More',
  textOpened: 'Show Less',
};

export default ShowMore;
