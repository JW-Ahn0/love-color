import styled from "@emotion/styled";
import { IMAGES_PATH } from "../../config/mainapge/paths";
interface BottomImgSectionProps {
    isMobile: boolean;
}
const BottomImgSection:React.FC<BottomImgSectionProps> = ({isMobile}) => {
    return(
        <BottomImgSectionWrapper>
            <img src={IMAGES_PATH.leftBottom}  alt="소현이 생일 축하 라년큘러스2" className="leftImg"></img>
            {!isMobile && <img src={IMAGES_PATH.rightBottom} alt="소현이 생일 축하 목련4" className="rightImg"></img> }      
        </BottomImgSectionWrapper>
    )
}

export default BottomImgSection;

const BottomImgSectionWrapper = styled.div`
position: relative;
width: 100vw;
height: auto;

.leftImg {
    position: absolute;
    bottom: 0;
    left: 0;
    animation: bottomSlideRightLeft 3s infinite alternate;
}

@keyframes bottomSlideRightLeft {
    0% {
        transform: translateY(0);
    }
    50%{
        transform: translateX(-5%);
    }
    100% {
        transform: translateY(3%);
    }    
}

.rightImg {
    position: absolute;
    bottom: 0;
    right: 0;
    animation: bottomSlideLeftRight 3s infinite alternate;
}
@keyframes bottomSlideLeftRight {
    0% {
        transform: translateX(0);
    }
    50%{
        transform: translateX(5%);
    }
    100% {
        transform: translateY(3%);
    }  
}
`