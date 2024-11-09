import styled from "@emotion/styled";
import { useState } from "react";
import CngrtModal from "./CngrtModal"; // 모달 컴포넌트 import
import AlertModal from "./AlertModal";
import { v4 } from "uuid";

interface OpenGiftButtonProps {
  setMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const CngrtMsgButton: React.FC<OpenGiftButtonProps> = ({ setMusicPlaying }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false); // 모달 상태 선언 및 초기화

  const [alertModalOpen, setAlertModalOpen] = useState(false); // 알림 모달 상태 선언 및 초기화
  const [uuid, setUuid] = useState(v4()); // uuid 생성
  const Msg = "사랑에 대해서\n작성하기";

  const openModal = () => {
    setModalOpen(true); // 모달 열기
    setMusicPlaying(true); // 노래 재생 시작
    setUuid(v4());
  };
  const closeCngrtModal = () => {
    setModalOpen(false); // 모달 닫기
    setAlertModalOpen(true); // 알림 모달 열기
    setMusicPlaying(false);
  };
  return (
    <>
      <CngrtMsgButtonWrapper onClick={openModal}>{Msg}</CngrtMsgButtonWrapper>

      <CngrtModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        closeCngrtModal={closeCngrtModal}
        uuid={uuid}
        setUuid={setUuid}
        setMusicPlaying={setMusicPlaying}
      />
      <AlertModal
        msg="작성해주셔서 감사합니다."
        alertModalOpen={alertModalOpen}
        setAlertModalOpen={setAlertModalOpen}
      />
    </>
  );
};

export default CngrtMsgButton;

const CngrtMsgButtonWrapper = styled.button`
  width: 150px;
  height: 80px;
  border-radius: 15px;
  background: #b05dad;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;

  color: #ffffff;

  white-space: pre-line;

  border: none;
  outline: none;

  :hover {
    background: #8c3e8f;
    cursor: pointer;
  }
`;
