import styled from "@emotion/styled";
import { useRef, useEffect } from "react";

interface DotMatrixProps {
  author: string;
  colorList: string[];
}
// 도트 매트릭스를 그리는 컴포넌트
const DotMatrix = ({ author, colorList }: DotMatrixProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridSize = 32; // 64x64 도트 매트릭스
  const dotSize = 8; // 각 도트의 크기 (8x8 픽셀)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // 각 도트에 랜덤 색상을 적용하여 매트릭스 그리기
        for (let y = 0; y < gridSize; y++) {
          for (let x = 0; x < gridSize; x++) {
            const color =
              colorList[Math.floor(Math.random() * colorList.length)];
            ctx.fillStyle = color;
            ctx.fillRect(x * dotSize, y * dotSize, dotSize, dotSize);
          }
        }
      }
    }
  }, []);

  return (
    <HappyBirthdayCardWrapper>
      <div className="card-title">
        <h1>{author}</h1>
      </div>
      <div className="card-content-container">
        <canvas
          ref={canvasRef}
          width={gridSize * dotSize}
          height={gridSize * dotSize}
          style={{ border: "1px solid #000" }}
        />
      </div>
    </HappyBirthdayCardWrapper>
  );
};

const HappyBirthdayCardWrapper = styled.div`
  width: 35%;
  height: 100%;
  min-width: 300px;
  min-height: 350px;

  background-color: var(--color-page-card-bg);
  background-size: cover;

  display: flex;
  flex-direction: column;
  border-radius: 15px;
  gap: 24px;
  padding-top: 10px;
  h1 {
    margin: 0;
  }
  .card-title {
    text-align: center;
    color: white;
  }

  .card-content-container {
    display: flex;
    justify-content: center;
  }
`;

export default DotMatrix;
