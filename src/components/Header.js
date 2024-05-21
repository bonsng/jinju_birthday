// src/components/Header.js
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import wave from '../image/Wave.png';
import background1 from "../image/backgroung1.jpeg";
import title from "../image/title.png";
import Nav from './Nav';

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: center;
  background-image: url("${background1}");
  background-size: cover;
  background-position: center center;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 20rem;
  z-index: 20;
  transition: transform 0.6s ease; /* transition 속성 추가 */
  transform: ${({isHidden}) => (isHidden ? 'translateY(-80%)' : 'translateY(0)')}; /* 상태에 따라 이동 */;
`;


const TitleDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  z-index: 22;
  font-weight: 800;
  color: rgb(255, 255, 255);
`;


const WaveImg = styled.img`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const Title = styled.img`
  width: 23rem;
  margin-top: 10rem;
  z-index: 24;
`;

const Header = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 200) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <HeaderContainer isHidden={isHidden}>
            <TitleDiv>진주의 생일 !!</TitleDiv>
            <Title src={title}/>
            <WaveImg src={wave} />
        </HeaderContainer>
    );
};

export default Header;
