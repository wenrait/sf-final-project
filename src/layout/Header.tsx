import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { colors } from '../styles/globalStyles.ts';
import { LogoComponent } from '../components/Logo.tsx';
import authDivider from '../assets/svg/auth__divider.svg';
import { useAppSelector } from '../hooks.ts';
import { AccountComponent } from '../components/Account.tsx';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 0 60px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 14px;
  box-sizing: border-box;
`;

const HeaderAside = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HeaderNav = styled.nav`
  align-items: center;
  display: flex;
  gap: 50px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  text-decoration: none;
  color: ${colors.primary.black};
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const AuthLink = styled.a`
  text-decoration: none;
  color: ${colors.primary.black};
  opacity: 0.4;
`;

const AuthButton = styled.button`
  border: 0;
  color: ${colors.primary.black};
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: ${colors.secondary.lightTeal};
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px;
  font-weight: 500;
  font-size: 14px;
`;

const AuthDivider = styled.img`
  display: block;
`;

export const HeaderComponent = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.isAuthenticated,
  );

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderAside>
          <Link to={'/'}>
            <LogoComponent place={'header'} />
          </Link>
        </HeaderAside>
        <HeaderCenter>
          <HeaderNav>
            <StyledNavLink to={'/'}>Главная</StyledNavLink>
            <StyledNavLink to={'/'}>Тарифы</StyledNavLink>
            <StyledNavLink to={'/'}>FAQ</StyledNavLink>
          </HeaderNav>
        </HeaderCenter>
        <HeaderAside>
          {isAuthenticated ? (
            <AccountComponent />
          ) : (
            <AuthButtons>
              <AuthLink href={'/'}>Зарегистрироваться</AuthLink>
              <AuthDivider src={authDivider} alt={''} />
              <Link to={'/login'}>
                <AuthButton>Войти</AuthButton>
              </Link>
            </AuthButtons>
          )}
        </HeaderAside>
      </HeaderContent>
    </HeaderWrapper>
  );
};
