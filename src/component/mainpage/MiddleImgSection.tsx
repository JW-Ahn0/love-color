import styled from '@emotion/styled'
import { IMAGES_PATH } from '../../config/mainapge/paths';

const MiddleImgSection = () => {
    return(
        <MiddleImgSectionWrapper>
            <img src={IMAGES_PATH.leftMiddle}  alt="소현이 생일 축하 목련2" className="leftImg"></img>
            <img src={IMAGES_PATH.rightMiddle} alt="소현이 생일 축하 목련3" className="rightImg"></img>       
        </MiddleImgSectionWrapper>
    )
}
export default MiddleImgSection;

const MiddleImgSectionWrapper = styled.div` 

position: relative;
width: 100vw;
height: auto;

.leftImg {
    position: absolute;
    top: 200px;
    left: 0;
    animation: middleSlideRightLeft 2s infinite alternate;
}

@keyframes middleSlideRightLeft {
    0% {
        transform: translateY(0);
    }
    50%{
        transform: translateY(3%);
    }
    100% {
        transform: translateX(-3%);
    }    
}

.rightImg {
    position: absolute;
    top: 200px;
    right: 0;
    animation: middleSlideLeftRight 2s infinite alternate;
}

@keyframes middleSlideLeftRight {
    0% {
        transform: translateX(0);
    }
    50%{
        transform: translateY(3%);
    }
    100% {
        transform: translateX(3%);
    }  
}
`