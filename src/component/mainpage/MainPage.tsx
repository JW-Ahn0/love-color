import styled from "@emotion/styled";
import MainTitle from "./MainTitle";
import DdayCard from "./DdayCard";
import ButtonCard from "./ButtonCard";
import TopImgSection from "./TopImgSection";
import MiddleImgSection from "./MiddleImgSection";
import BottomImgSection from "./BottomImgSection";
import { useEffect, useState } from "react";
import HappyBirthdayPage from "../happybirthdaymainpage/HappyBirthdayPage";
import MusicPlayer from "./MusicPlayer";

interface Token {
  token: string;
}
const MainPage = ({ token }: Token) => {
  console.log("token : ", token);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const dday = "2023-09-08";
  const password = "5670";
  const [musicPlaying, setMusicPlaying] = useState<boolean>(false); // 노래 재생 상태 선언 및 초기화

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(token)
      .then(() => {
        alert("토큰이 클립보드에 복사되었습니다.");
      })
      .catch((err) => {
        console.error("클립보드 복사 실패:", err);
      });
  };
  return (
    <MainPageWrapper isPasswordConfirm={isPasswordConfirm}>
      <MusicPlayer src="/Root.mp3" isPlaying={musicPlaying} />{" "}
      {/* 노래 재생 상태일 때 MusicPlayer 컴포넌트 렌더링 */}
      {!isPasswordConfirm && (
        <>
          <TopImgSection />
          {!isMobile && <MiddleImgSection />}
          <ContentWrapper>
            <MainTitle dDay={dday} isMobile={isMobile} />
            <DdayCard dDay={dday} isMobile={isMobile} />
            <ButtonCard
              dDay={dday}
              password={password}
              setIsPasswordConfirm={setIsPasswordConfirm}
              setMusicPlaying={setMusicPlaying}
            />
            <div className="token-con">
              <button onClick={copyToClipboard}>토큰 복사</button>
            </div>
          </ContentWrapper>

          <BottomImgSection isMobile={isMobile} />
        </>
      )}
      {isPasswordConfirm && <HappyBirthdayPage />}
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div<{ isPasswordConfirm: boolean }>`
  width: 100vw;
  height: ${({ isPasswordConfirm }) => (isPasswordConfirm ? "100%" : "100vh")};
  background: #ff8fa0;
  overflow: ${({ isPasswordConfirm }) =>
    isPasswordConfirm ? "auto" : "hidden"};

  .token-con {
    display: flex;
    justify-content: center;
    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;
