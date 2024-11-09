import styled from "@emotion/styled";
import { useState } from "react";
//import AlertModal from './AlertModal';
import PasswordModal from "./PasswordModal";
import { useNavigate } from "react-router-dom";

interface OpenGiftButtonProps {
  isBirthdayAfter: boolean;
  password: string;
  setIsPasswordConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenGiftButton: React.FC<OpenGiftButtonProps> = ({
  isBirthdayAfter,
  password,
  setIsPasswordConfirm,
  setMusicPlaying,
}) => {
  const Msg = "다른 사람들의\n생각 보러가기";

  const [alertModalOpen, setAlertModalOpen] = useState(false); // 알림 모달 상태 선언 및 초기화
  const navigate = useNavigate();
  const openModal = () => {
    //setAlertModalOpen(true); // 모달 열기\
    navigate("/love");
  };
  return (
    <>
      <PasswordModal
        msg="패스워드를 입력하세요"
        password={password}
        passwordModalOpen={alertModalOpen}
        setPasswordModalOpen={setAlertModalOpen}
        setIsPasswordConfirm={setIsPasswordConfirm}
      />
      <OpenGiftButtonWrapper onClick={openModal}>{Msg}</OpenGiftButtonWrapper>

      {/*!isBirthdayAfter && <AlertModal msg="생일이 아직 아니예요!" alertModalOpen={alertModalOpen} setAlertModalOpen={setAlertModalOpen} /> */}
      {/*isBirthdayAfter &&   */}
    </>
  );
};

export default OpenGiftButton;

const OpenGiftButtonWrapper = styled.button`
  width: 150px;
  height: 80px;
  border-radius: 15px;
  background: #fa3207;

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
    background: #d52a07;
    cursor: pointer;
  }
`;
