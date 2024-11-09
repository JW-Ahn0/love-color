import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const LetterPage = () => {
  const [imgSrc, setImgSrc] = useState<string>("");
  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth <= 810) {
        setImgSrc("/letter_img_mobile.png"); // 모바일용 이미지
      } else {
        setImgSrc("/letter_img.png"); // 데스크탑용 이미지
      }
    };

    // 페이지 로딩 시 한 번 실행
    updateImageSrc();

    // 화면 크기 변경 시 src 업데이트
    window.addEventListener("resize", updateImageSrc);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, []);
  return (
    <LetterPageWrapper>
      <img className="letter" src={imgSrc} alt="letter" />
    </LetterPageWrapper>
  );
};

export default LetterPage;

const LetterPageWrapper = styled.div`
  .letter {
    width: 100%;
    height: 100%;
  }
`;
