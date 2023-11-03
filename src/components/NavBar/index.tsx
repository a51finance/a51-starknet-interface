// @ts-nocheck
import { Trans } from '@lingui/macro';
import { ReactNode, useCallback } from 'react';
import { NavLinkProps, useLocation, useNavigate } from 'react-router-dom';

import { useAccountDrawer } from 'components/AccountDrawer';
import Web3Status from 'components/Web3Status';
import { useIsPoolsPage } from 'hooks/useIsPoolsPage';
import { Row } from 'nft/components/Flex';
import Logo from 'assets/jedi/logo.png';
import MobileLogo from 'assets/jedi/squareLogo.png';
import { Nav, LogoContainer, MobileLogoContainer, MenuContainer, StatusContainer, MenuItem, ActiveMenuItem, ExternalMenuItem } from './styled';

const MenuItemLink = ({ to, dataTestId, id, isActive, children }) => {
  const Component = isActive ? ActiveMenuItem : MenuItem;
  return (
    <Component
      to={to}
      id={id}
      style={{ textDecoration: 'none' }}
      data-testid={dataTestId}
    >
      {children}
    </Component>
  );
};

const ExternalMenuItemLink = ({ to, children }) => (
  <ExternalMenuItem target="_blank" rel="noopener noreferrer" href={to}>{children}</ExternalMenuItem>
);

export const PageTabs = () => {
  const { pathname } = useLocation();
  const isPoolActive = useIsPoolsPage();

  return (
    <>
      <MenuItemLink to="/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Trade</Trans>
      </MenuItemLink>
      <MenuItemLink to="/pool" dataTestId="pool-nav-link" isActive={isPoolActive}>
        <Trans>Pool</Trans>
      </MenuItemLink>
      <ExternalMenuItemLink to="https://info.jediswap.xyz/">
        <Trans>Dashboard</Trans>
      </ExternalMenuItemLink>
    </>
  );
};

const Navbar = () => {
  const navigate = useNavigate();

  const [accountDrawerOpen, toggleAccountDrawer] = useAccountDrawer();

  const handleLogoIconClick = useCallback(() => {
    if (accountDrawerOpen) {
      toggleAccountDrawer();
    }
    navigate({
      pathname: '/',
    });
  }, [accountDrawerOpen, navigate, toggleAccountDrawer]);

  return (
    <Nav>
      <LogoContainer>
        <img width={'195px'} height={'32px'} src={Logo} alt="logo" onClick={handleLogoIconClick} className={'desktop'} />
        <img width={'32'} height={'32'} src={MobileLogo} alt="logo" onClick={handleLogoIconClick} className={'mobile'} />
      </LogoContainer>

      <MenuContainer>
        <PageTabs />
      </MenuContainer>

      <StatusContainer>
        <Row gap="12">
          <Web3Status />
        </Row>
      </StatusContainer>
    </Nav>

  );
};

export default Navbar;
