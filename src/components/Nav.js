// src/components/Navigation.js
import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0px;
  top: 20rem;
  width: 100%;
  height: 2rem;
  z-index: 100;
  background-color: rgb(255, 255, 255);
  transition: transform 0.6s ease; /* transition 속성 추가 */
  transform: ${({isHidden}) => (isHidden ? 'translateY(-800%)' : 'translateY(0)')}; /* 상태에 따라 이동 */;
`;

const StyledNavLink = styled(NavLink)`
  color: gray;
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 600;
  transition: color 0.6s ease;

  &:hover {
    color: #baa496;
  }

  &.active {
    color: #b6947f;
  }


`;

const Nav = () => {
    const [isHidden, setIsHidden1] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY1 = window.scrollY;
        if (currentScrollY1 > 100) {
            setIsHidden1(true);
        } else {
            setIsHidden1(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <NavContainer isHidden={isHidden}>
            <StyledNavLink exact to="/">Home</StyledNavLink>
        </NavContainer>
    );
};

export default Nav;
