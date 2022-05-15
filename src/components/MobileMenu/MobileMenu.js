/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Overlay isOpen={isOpen} onDismiss={onDismiss}>
        <Content aria-label="Navigation">
          <Side />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Side>
            <Footer>
              <FooterLink href="/terms">Terms and Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </Footer>
          </Side>
          <CloseButton>
            <UnstyledButton>
              <Icon id="close" strokeWidth={2} size={20} onClick={onDismiss} />
              <VisuallyHidden>Dismiss Menu</VisuallyHidden>
            </UnstyledButton>
          </CloseButton>
        </Content>
      </Overlay>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const Overlay = styled(DialogOverlay)`
  background: hsla(0, 0%, 0%, 0.33);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
`;

const Content = styled(DialogContent)`
  width: 300px;
  height: 100%;

  position: fixed;
  right: 0;

  display: flex;
  flex-direction: column;

  overflow: auto;

  background: ${COLORS.white};
  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
`;

const Footer = styled.footer`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.medium};
`;

const Side = styled.div`
  flex: 1;
`;

export default MobileMenu;
