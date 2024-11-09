import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
interface birthdayPageTabProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}
const BirthdayPageTab = ({ activeTab, setActiveTab }: birthdayPageTabProps) => {
  const navigate = useNavigate(); // 여기서 useNavigate를 호출합니다.
  return (
    <BirthdayPageTabWrapper>
      <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
        사랑의 의미(글)
      </Tab>
      <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
        설명
      </Tab>
      <Tab active={activeTab === 3} onClick={() => setActiveTab(3)}>
        사랑의 의미(색)
      </Tab>
      <Tab active={activeTab === 4} onClick={() => navigate("/")}>
        메인으로
      </Tab>
    </BirthdayPageTabWrapper>
  );
};

const BirthdayPageTabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 50px;
  position: relative; /* or absolute, fixed, sticky */
  z-index: 2;

  @media screen and (max-width: 810px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Tab = styled.button<{ active: boolean }>`
  background-color: #fab8ac;
  color: ${({ active }) => (active ? "#FEF57B" : "white")};
  border: none;
  border-radius: 16px;
  padding: 10px;
  cursor: pointer;
  width: auto%;
  font-size: 1.3rem;
  font-weight: 600;
`;

export default BirthdayPageTab;
