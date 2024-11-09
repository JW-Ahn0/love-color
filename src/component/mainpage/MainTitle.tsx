import styled from "@emotion/styled";
import dayjs from "dayjs";
import { DdayCardProps } from "../../types/mainpage/DdayCardProps";

const MainTitle: React.FC<DdayCardProps> = ({ dDay, isMobile }) => {
  const dDayDate = dayjs(dDay);
  const today = dayjs();
  const beforeDdayMeg = "당신이 생각하는 사랑의 의미란 무엇인가요?";
  const afterDdayMeg =
    isMobile === true
      ? "당신이 생각하는 \n사랑의 의미란 무엇인가요?"
      : "당신이 생각하는 사랑의 의미란 무엇인가요?";
  const Msg = dDayDate.diff(today, "second") > 0 ? beforeDdayMeg : afterDdayMeg;
  return (
    <MainTitleWrapper isMobile={isMobile}>
      <h1>Love To Color</h1>
      <div className="time-left-msg">{Msg}</div>
    </MainTitleWrapper>
  );
};

export default MainTitle;

const MainTitleWrapper = styled.div<{ isMobile: boolean }>`
  .time-left-msg {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    color: ${({ isMobile }) => (isMobile ? "#FCF6F5" : "#ffc809")};
    white-space: pre-line;
    text-align: center;
  }
  h1 {
    margin: 0;
    font-style: normal;
    font-weight: 900;
    font-size: 5rem;
    line-height: 116px;
    text-align: center;
    color: #ffffff;

    @media screen and (max-width: 810px) {
      font-size: 3rem;
    }
  }
`;
