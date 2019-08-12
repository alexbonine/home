import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Colors from '../../styles/colors';

const Items = {
  portfolio: 'Portfolio',
  about: 'About',
  contact: 'Contact',
};

const HeaderElement = styled.header`
  font-family: 'Playfair Display', serif;
  /* background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) -10%, rgba(0, 0, 0, 0) 100%); */
  text-align: center;
  width: 100%;
  font-size: 1.25rem;
  position: fixed;
  z-index: 1;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 16px;
`;

const ATag = styled.a`
  position: relative;
  padding-bottom: 8px;
  margin: 0 16px;
  color: white;
  text-decoration: none;
  /* text-transform: uppercase; */

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(0);
    transform-origin: 50% 50%;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: transform 250ms;
  }

  &:hover {
    cursor: pointer;

    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
`;

const Selected = css`
  &::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

const Header = () => {
  // const [selected, setSelected] = useState();
  const router = useRouter();

  return (
    <HeaderElement>
      <NavContainer>
        <ul>
          <li>
            <Link href="/">
              <ATag>AB</ATag>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/portfolio">
              <ATag css={router.pathname === '/portfolio' ? Selected : ''}>Portfolio</ATag>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <ATag css={router.pathname === '/about' ? Selected : ''}>About</ATag>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <ATag css={router.pathname === '/contact' ? Selected : ''}>Contact</ATag>
            </Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderElement>
  );
};

Header.propTypes = {
  // children: PropTypes.node,
};

Header.defaultProps = {
  // children: null,
};

export default Header;
