import styled from "@emotion/styled";
import { CardData } from "../../types/happybirthdaypage/HappyBirthdayCardProps";

interface HappyBirthdayCardProps {
  data: CardData;
  // 다른 props를 여기에 추가할 수 있습니다.
}
const HappyBirthdayCard: React.FC<HappyBirthdayCardProps> = ({ data }) => {
  const { title, author, content } = data;
  return (
    <HappyBirthdayCardWrapper>
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-content-container">
        <div className="card-content">
          <span>{content}</span>
        </div>
        <br></br>
        <br></br>
        <div className="card-author">
          <span>{author}</span>
        </div>
      </div>
    </HappyBirthdayCardWrapper>
  );
};

const HappyBirthdayCardWrapper = styled.div`
  width: 30%;
  height: 100%;
  min-width: 250px;
  min-height: 25px;

  background-color: var(--card-bg);
  background-size: cover;

  display: flex;
  flex-direction: column;
  border-radius: 15px;

  .card-title {
    text-align: center;
    color: var(--card-title);
    margin-bottom: 10px;
  }

  .card-content-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    min-height: 150px;

    margin-left: 50px;
    margin-right: 50px;

    font-family: fantasy;
    font-weight: bolder;

    color: var(--card-content);
    font-size: larger;

    .card-author {
      margin: 10px;
      text-align: end;
      padding-right: 10px;
    }
    .card-content {
      white-space: pre-line;
      margin: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .card-content-container {
      min-height: 100px; /* 미디어 쿼리에서 값 변경 */
    }
  }
`;
export default HappyBirthdayCard;
