import React, { useState } from 'react';
import Link from 'next-translate/Link'
import useTranslation from 'next-translate/useTranslation'
import styled from 'styled-components/macro';

import Logo from '../icons/Logo';
import Menu from '../icons/Menu';

import { Heading4, Heading5 } from './Headings';

import { primaryColor, lightGrayColor } from '../../constants/websiteColors';

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 2 * 100vw * 50 / 1920);
  margin: calc(100vw * 50 / 1920);
  margin-bottom: 0;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    & > *:not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;

const NavbarAdaptiveMenu = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (min-width: 992px) {
    width: initial;
    flex-direction: row;
    & > *:not(:last-child) {
      margin-bottom: 0px;
      margin-right: 20px;
    }
  }
  @media (min-width: 1520px) {
    & > *:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const NavbarHorizontalMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & > *:first-child {
    margin-right: 20px;
  }
  @media (min-width: 992px) {
    justify-content: flex-start;
    align-items: center;
    & > *:last-child {
      display: none;
    }
  }
  @media (min-width: 1520px) {
    & > *:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const NavbarMenu = styled.nav`
  display: ${(props) => (props.showMobileNav ? 'flex' : 'none')};
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    & > *:not(:last-child) {
      margin-bottom: 0px;
      margin-right: 20px;
    }
  }
  @media (min-width: 1520px) {
    & > *:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const MobileMenu = styled(Menu)`
  @media (min-width: 992px) {
    display: none;
  }
`;

const NavbarLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const NavbarButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

function Navbar() {
  const { t } = useTranslation();
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <NavbarContainer>
      <NavbarAdaptiveMenu>
        <NavbarHorizontalMenu>
          <Link aria-label="Go to the main page" href="/">
            <NavbarLink>
              <Logo color={primaryColor} height={40} />
            </NavbarLink>
          </Link>
          <NavbarButton
            aria-label="Show Mobile Navigation"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <MobileMenu color={lightGrayColor} height={40} />
          </NavbarButton>
        </NavbarHorizontalMenu>
        <NavbarMenu showMobileNav={showMobileNav}>
          <Heading5>{t('common:BARBERS')}</Heading5>
          <Link href="/works">
            <NavbarLink>
              <Heading5>{t('common:SERVICES')}</Heading5>
            </NavbarLink>
          </Link>
          <Heading5>{t('common:LOCATIONS')}</Heading5>
          <Heading5>{t('common:CAREERS')}</Heading5>
        </NavbarMenu>
      </NavbarAdaptiveMenu>
      <NavbarMenu showMobileNav={showMobileNav}>
        <NavbarButton>
          <Link  href="/" lang="pl">
            {showMobileNav ? <Heading4>PL</Heading4> : <Heading5>PL</Heading5>}
          </Link>
        </NavbarButton>
        <NavbarButton>
          <Link  href="/" lang="en">
            {showMobileNav ? <Heading4>EN</Heading4> : <Heading5>EN</Heading5>}
          </Link>
        </NavbarButton>
        <NavbarButton>
          <Link  href="/" lang="ru">
            {showMobileNav ? <Heading4>RU</Heading4> : <Heading5>RU</Heading5>}
          </Link>
        </NavbarButton>
      </NavbarMenu>
    </NavbarContainer>
  );
}

export default Navbar;
