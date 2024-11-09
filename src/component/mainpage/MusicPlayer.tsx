import { useEffect } from "react";

interface MusicPlayerProps {
  src: string;
  isPlaying: boolean;
}

const MusicPlayer = ({ src, isPlaying }: MusicPlayerProps) => {
  // isPlaying이 변경될 때마다 재생 또는 일시정지
  useEffect(() => {
    console.log(isPlaying);
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.4;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying, src]);

  return null;
};

export default MusicPlayer;
