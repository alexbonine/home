import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import App from '../../styles/constants/app';
import { mqTablet } from '../../styles/screenSize';

const HeaderElement = styled.header`
  width: 100%;
  position: absolute;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: ${App.full} 0;
`;

const NavList = styled.ul`
  position: fixed;
  z-index: 1;
  left: ${({ right }) => !right && App.full};
  right: ${({ right }) => right && App.full};

  ${mqTablet} {
    left: ${({ right }) => !right && App.more};
    right: ${({ right }) => right && App.more};
  }
`;

const ATag = styled.a`
  font-family: ${App.fonts.playfair};
  letter-spacing: 0.5px;
  font-size: 20px;
  position: relative;
  padding-bottom: ${App.half};
  margin: 0 ${App.full};
  color: white;
  text-decoration: none;

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
  const router = useRouter();

  return (
    <HeaderElement>
      <NavContainer>
        <NavList>
          <li>
            <Link href="/">
              <ATag css={{ marginLeft: 0 }}>AB</ATag>
            </Link>
          </li>
        </NavList>
        <NavList right>
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
              <ATag css={[router.pathname === '/contact' ? Selected : '', { marginRight: 0 }]}>Contact</ATag>
            </Link>
          </li>
        </NavList>
      </NavContainer>
    </HeaderElement>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
