import { CSSTransition } from 'react-transition-group';
import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/globalStyles.ts';
import { useAppSelector } from '../hooks.ts';
import { NavLink, useNavigate } from 'react-router-dom';
import { LogoComponent } from './Logo.tsx';
import { AccountUserComponent } from './Account/AccountUser.tsx';
import { AppContext } from '../App.tsx';

const Menu = styled.div`
  display: flex;
  position: absolute;
  padding: 0 60px;
  width: 100%;
  height: 100vh;
  background: ${colors.primary.teal};
  color: white;
  z-index: 10;
  top: 0;
  left: 0;
  box-sizing: border-box;
  &.menu-enter {
    opacity: 0;
  }
  &.menu-enter-active {
    opacity: 1;
    transition: 300ms ease-out;
  }
  &.menu-exit {
    opacity: 1;
  }
  &.menu-exit-active {
    opacity: 0;
    transition: 300ms ease-out;
  }

  @media (max-width: 960px) {
    padding: 0 30px;
  }
  @media (max-width: 600px) {
    padding: 0 14px;
  }
`;

const MenuSlider = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: ${colors.primary.teal};
  color: white;
  z-index: 9;
  top: 0;
  left: 0;
  &.menu-slider-enter {
    transform: translateX(100%);
  }
  &.menu-slider-enter-active {
    transition: 300ms ease-out;
    transform: translateX(0);
  }
  &.menu-slider-exit {
    transform: translateX(0);
  }
  &.menu-slider-exit-active {
    transform: translateX(100%);
    transition: 300ms ease-out;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Nav = styled.nav`
  padding: 75px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Link = styled(NavLink)`
  font-size: 16px;
  line-height: 19.36px;
  letter-spacing: 0.01em;
  text-decoration: none;
  color: white;
`;

const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

const RegLink = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  line-height: 19.36px;
  letter-spacing: 0.01em;
`;

const LoginButton = styled.button`
  border: 0;
  color: ${colors.primary.black};
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: ${colors.secondary.lightTeal};
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px;
  width: 90%;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.2px;
  letter-spacing: 0.01em;
  transition: 500ms;
  &:hover {
    background: ${colors.secondary.lightTealHover};
  }
`;

export const MenuComponent = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.isAuthenticated,
  );
  const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);

  const menuRef = useRef(null);
  const menuSliderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMenuOpen]);

  return (
    <>
      <CSSTransition
        mountOnEnter
        timeout={300}
        in={isMenuOpen}
        classNames={'menu'}
        nodeRef={menuRef}
        unmountOnExit
      >
        <Menu ref={menuRef}>
          <LogoWrapper>
            <LogoComponent type={'white'} />
          </LogoWrapper>
          <Content>
            <Nav>
              <Link to={'/'}>Главная</Link>
              <Link to={'/'}>Тарифы</Link>
              <Link to={'/'}>FAQ</Link>
            </Nav>
            {isAuthenticated ? (
              <AccountUserComponent />
            ) : (
              <AuthWrapper>
                <RegLink href={'/'}>Зарегистрироваться</RegLink>
                <LoginButton onClick={() => navigate('/login')}>
                  Войти
                </LoginButton>
              </AuthWrapper>
            )}
          </Content>
        </Menu>
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        timeout={5000}
        in={isMenuOpen}
        classNames={'menu-slider'}
        nodeRef={menuSliderRef}
        unmountOnExit
      >
        <MenuSlider ref={menuSliderRef} />
      </CSSTransition>
    </>
  );
};