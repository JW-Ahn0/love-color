import styled from '@emotion/styled'
import { IMAGES_PATH } from '../../config/mainapge/paths';
const TopImgSection = () =>{
    return (
        <TopImgSectionWrapper>
            <img src={IMAGES_PATH.leftTop}  alt="소현이 생일 축하 목련1" className="leftImg"></img>
            <img src={IMAGES_PATH.rightTop} alt="소현이 생일 축하 라넌큘러스1" className="rightImg"></img>
        </TopImgSectionWrapper>
    )
}

export default TopImgSection;   

const TopImgSectionWrapper = styled.div`

position: relative;
width: 100vw;
height: auto;

.leftImg {
    position: absolute;
    top: 0;
    left: 0;
    animation: topSlideRightLeft 2s infinite alternate;
}

@keyframes topSlideRightLeft {
    0% {
        transform: translateY(0);
    }
    50%{
        transform: translateX(-5%);
    }
    100% {
        transform: translateY(-1%);
    }    

}
.rightImg {
    position: absolute;
    top: 0;
    right: 0;
    animation: topSlideLeftRight 2s infinite alternate; 
}

@keyframes topSlideLeftRight {
    0% {
        transform: translateX(0);
    }
    50%{
        transform: translateX(5%);
    }
    100% {
        transform: translateY(-1%);
    }  
}
`