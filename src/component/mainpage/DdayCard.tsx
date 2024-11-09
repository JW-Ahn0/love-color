import { DdayCardProps } from "../../types/mainpage/DdayCardProps";
import TimeCard from "./TimeCard";
import styled from "@emotion/styled";


const DdayCard: React.FC<DdayCardProps> = ({dDay,isMobile}) =>{
    return (
        <DdayCardWrapper>
            <div className="time-left-card">
                <TimeCard type="Days" time={dDay} isMobile={isMobile} />
                <TimeCard type="Hours" time={dDay} isMobile={isMobile} />
                <TimeCard type="Minutes" time={dDay} isMobile={isMobile} />
                <TimeCard type="Seconds" time={dDay} isMobile={isMobile} />
            </div>
        </DdayCardWrapper>
    )
}

export default DdayCard;

const DdayCardWrapper = styled.div`

height: 40%;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 15px;
margin-right: 15px;

    .time-left-card{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap:20px;
    }
`