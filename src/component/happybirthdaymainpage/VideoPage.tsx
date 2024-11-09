import styled from "@emotion/styled";
const VideoPage = () => {
    return (
        <VideoWrapper>
            <video autoPlay loop>
                <source src="/100.mp4" type="video/mp4" />
            </video>
        </VideoWrapper>
    )
}

export default VideoPage;

const VideoWrapper = styled.div`
height: 80%;

`