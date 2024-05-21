// src/pages/HomePage.js
import React, {useEffect, useState} from 'react';
import Container from '../components/Container';
import GradientUpImg from "../image/GradientUp.png";
import styled from "styled-components";
import YouTubeVideo from "../components/YouTube";
import ConfettiExplosion from "../components/ConfettiExplosion";
import ImageCard from "../components/ImageCard";
import image1 from "../image/image1.jpeg";
import image2 from "../image/image2.jpeg";
import image3 from "../image/image3.jpeg";
import image4 from "../image/image4.jpeg";
import image5 from "../image/image5.jpeg";
import image6 from "../image/image6.jpg";
import PasswordModal from "../components/PasswordModal";

const GradientUp = styled.img`
  position: fixed;
  width: 100%;
  height: 1.5rem;
  z-index: 21;
  top: 20rem;
  transition: transform 0.6s ease; /* transition 속성 추가 */
  transform: ${({isHidden}) => (isHidden ? 'translateY(-1100%)' : 'translateY(0)')};
`
const Paragraph = styled.p`
  text-align: center;
  color: rgb(41, 41, 41);
  font-size: 1rem;
  line-height: 1.8rem;
`

const MoreButton = styled.button`
  width: 200px;
  height: 50px;
  color: black;
  font-weight: 600;
`

const HomePage = () => {
    const [isHidden, setIsHidden2] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const correctPassword = '650907';

    const handleShowMore = () => {
        setShowModal(true);
    };

    const handleConfirmPassword = (password) => {
        if (password === correctPassword) {
            setShowContent(true);
        } else {
            alert('Incorrect password');
        }
        setShowModal(false);
    };

    const handleScroll = () => {
        const currentScrollY2 = window.scrollY;
        if (currentScrollY2 > 200) {
            setIsHidden2(true);
        } else {
            setIsHidden2(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <ConfettiExplosion/>
            <GradientUp src={GradientUpImg} isHidden={isHidden}/>
            <Container>
                <h2>'분'의 귀 빠진 날</h2>
                <YouTubeVideo videoId="OdrPtjfGkcU" />
                <br/>
                <Paragraph>
                    안녕 진주!!!
                    <br/>
                    생일 무지무지 축하해!
                    <br/>
                    이렇게 인터넷 상에서 인사를 드리게 되네요!
                    <br/>
                    <br/>
                    별거 없지만.. 그래도 진주에게
                    <br/>
                    무엇인가를 만들어주고 싶었는데
                    <br/>
                    내가 요즘 가장 잘하는게 이거라..
                    <br/>
                    간단하게 사이트를 만들어 봤어!!ㅎㅎ
                </Paragraph>
                <ImageCard src={image1} width={360} height={205} description="작년 진주 생일 다음날 간 혜화 카페!"/>
                <Paragraph>
                    작년에 우린 뭘 했나 봤더니...
                    <br/>
                    생일 당일엔 진주 친구들이랑 놀구 다음날엔 만나서
                    <br/>
                    창경궁 데이트를 하고 혜화 카페에 갔다라고요?
                    <br/>
                    저때 꽤나 더웠던거 같은데,
                    <br/>
                    올해는 아직 그렇게 덥지 않아서 다행이야.
                    <br/>
                    오랜만에 저 카페에도 다시 가고 싶어!!
                    <br/>
                    이번주엔 저기도 슬,, 가볼까?
                </Paragraph>
                <ImageCard src={image2} width={360} height={250}  description="요즘의 우리 ㅋㅋ"/>
                <Paragraph>
                    1년이 지난 지금 우리는
                    <br/>
                    누구보다 가깝게 서로에게 의지를 하고
                    <br/>
                    누구보다 친한 친구가 되었고 ㅋㅋ
                    <br/>
                    길을 가다가도 한번씩, 밥을 먹다가도 한번씩
                    <br/>
                    생각이 나는 없으면 안되는 존재가 됐어
                    <br/>
                    올해도 진주의 생일을 축하할 수 있어서 정말 고마워.
                </Paragraph>
                <br/>
                <br/>
                <YouTubeVideo videoId="LW2zapN1es4" />
                <br/>
                <br/>
                <Paragraph>
                    진주는 생일을 별로 중요한 기념일이라 생각하지 않지마안,
                    <br/>
                    그래도 생각해보면 꽤나 중요한 날이지 않을까?
                    <br/>
                    전에도 말한 적이 있나? 생일이 왜 귀 빠진 날인지?
                    <br/>
                    그건 태아가 뱃 속에 있을때 웅크리고 있는게
                    <br/>
                    귀의 모양과 비슷해서 아기가 나온 날을
                    <br/>
                    귀 빠진 날이라고 한대!
                    <br/>
                    진주는 어떤 모습으로 웅크리고 있었을지 궁금하네ㅎㅎ
                    <br/>
                </Paragraph>
                <ImageCard src={image3} width={230} height={380}  description="풍선 하나에도 신난 진주 어린이"/>
                <Paragraph>
                    그만큼 그 날이 없으면 지금의 이진주도 없는거고,
                    <br/>
                    나는 아무도 마음이 맞는 사람을 만나지 못한 채,
                    <br/>
                    혼자 외롭게 살아가고 있었을거야.. 그니까!!
                    <br/>
                    무척이나 중요한 날인거지!! 누구보다도 소중한
                    <br/>
                    이진주가 이 세상에 온 날이자나~!!
                    <br/>
                    이 넓은 세상에, 다양한 사람들이 있고,
                    <br/>
                    서로 생각하는 것이 다른 듯 비슷하지만.. 그치만
                    <br/>
                    이진주라는 사람은 너뿐이자나.(메타버스? 멀티버스? 그런거 제외.)
                    <br/>
                    아쉽게도 끝이 있는 삶인만큼 시작을 더더욱
                    <br/>
                    소중히 여겨야 하는거 아닐까?
                    <br/>
                    난 그렇게 생각해요~,,
                </Paragraph>
                <ImageCard src={image4} width={330} height={480}  description="이찌방 키레이 카노죠 ㄷ ㄷ"/>
                <Paragraph>
                    그니까 생일만큼은 맛있는 것도 먹고,
                    신나게 보내야해!
                    <br/>
                    나랑은 시간이 맞지 못해서 만나지 못하지만..
                    <br/>
                    금요일에 만나서 정말 귀빠지게 놀아보자!!
                    <br/>
                    아직 더워지기 전인 5월이 가기전에!
                    <br/>
                    <br/>
                    <br/>

                    p.s. 다른 컨텐츠들도 넣고 싶었지만…
                    <br/>
                    서버를 구축해야되는 문제가 생겨서…
                    <br/>
                    추후에 추가해보도록 할게요..
                </Paragraph>

                <ImageCard src={image5} width={330} height={280}  description="곧 있음 보게 될 여름 쭈"/>
                <MoreButton onClick={handleShowMore}>무엇인가 더 있습니다! (클릭)</MoreButton>
                {showModal && <PasswordModal onClose={() => setShowModal(false)} onConfirm={handleConfirmPassword} />}
                {showContent && (
                    <>
                        <h3>내가 무지무지 사랑하는 진주씨~~~</h3>
                        <Paragraph>
                            작년엔 조금은 실패했지만..
                            <br/>
                            올해는 정말 진주의 올 여름이 덥지 않게 노력해볼게요!!
                            <br/>
                            내가 많이 사랑해요~~!! ㅎㅎ
                            <br/>
                            우리 이번 여름엔 여행도 가고!
                            <br/>
                            그리고 그 다음엔 해외 여행도 가고,,
                            <br/>
                            그러다보면 결혼도 하고 같이 살 수 있겠지~~? ㅎㅎ
                            <br/>
                            내가 많이 좋아해 분아. 생일 축하해.
                        </Paragraph>
                        <ImageCard src={image6} width={500} height={400}  description="❤️❤️❤️"/>
                    </>
                )}




            </Container>
        </>
    );
};

export default HomePage;
