import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon
              id="menu"
              strokeWidth={2}
              onClick={() => setShowMobileMenu(true)}
            />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 7vw - 3.5rem, 3rem);
  margin: 0px 48px;
  overflow-x: auto;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  color: var(--color-gray-900);
  gap: 36px;
  justify-content: flex-end;
  flex: 1;

  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
