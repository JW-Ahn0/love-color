import styled from "@emotion/styled"; 
import OpenGiftButton from "./OpenGiftButton";
import CngrtMsgButton from "./CngrtMsgButton";
import {OpenGiftButtonProps } from "../../types/mainpage/DdayCardProps";
import dayjs from "dayjs";

const ButtonCard :React.FC<OpenGiftButtonProps> = ({dDay,password,setIsPasswordConfirm,setMusicPlaying}) => {
    const dDayDate = dayjs(dDay);
    const today = dayjs();
    const isBirthdayAfter = dDayDate.diff(today, 'second') > 0 ? false : true;  
    return (
        <ButtonCardWrapper>
            <CngrtMsgButton setMusicPlaying={setMusicPlaying} />
            <OpenGiftButton isBirthdayAfter={isBirthdayAfter} password={password} setIsPasswordConfirm={setIsPasswordConfirm} setMusicPlaying={setMusicPlaying} />
        </ButtonCardWrapper>
        
    )
}

export default ButtonCard


const ButtonCardWrapper = styled.div`
height : 35%;
display:flex;
flex-direction: row;
gap: 10px;
justify-content:center;

`