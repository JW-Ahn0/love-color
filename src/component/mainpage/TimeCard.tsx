import styled from "@emotion/styled";
import { TimeCardProps } from "../../types/mainpage/TimeCardProps";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const TimeCard : React.FC<TimeCardProps> = (props) => {
    const {type,time,isMobile} = props;
    const [remainingTime, setRemainingTime] = useState<number>(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          const nowDate = dayjs();
          const dDayDate = dayjs(time);
          const diff = Math.abs(dDayDate.diff(nowDate, "second"));
          const units = {
            Days: Math.floor(diff / 86400),
            Hours: Math.floor((diff % 86400) / 3600),
            Minutes: Math.floor((diff % 3600) / 60),
            Seconds: Math.floor(diff % 60)
          };
          const value = units[type];
          setRemainingTime(value);
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, [type,time]);

    return (
        <TimeCardWrapper isMobile={isMobile}>
            <div className="day-val">{String(remainingTime).padStart(2, "0")}</div>
            <div className="day-type">{type}</div>
        </TimeCardWrapper>
    );
}
export default TimeCard ;

const TimeCardWrapper = styled.div<{isMobile:boolean}>`

width: 120px;
height : 120px;
background: #FAB8AC;
border-radius:15px;

display: flex;
flex-direction: column;
text-align: center;
justify-content: center;

    .day-val{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 3rem;
        color: #FFFFFF;
    }
    .day-type{  
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: ${({isMobile}) => isMobile ? '1rem': '1.5rem'};
        color: #FEF57B;
    }
`