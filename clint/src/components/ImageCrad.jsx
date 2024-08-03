import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Avatar } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { DownloadRounded } from '@mui/icons-material';
import { saveAs } from "file-saver";

const Card = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.card};
  border-radius: 30px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    
    scale: 1.02;
  }
  &:nth-child(7n + 1) {
    grid-column: auto/span 2;
    grid-row: auto/span 2;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: start;
  gap: 2px;
  justify-content: end;
  flex-direction: column;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  opacity: 0;
  padding: 16px;
  transition: opacity 0.3s ease;
  color: ${({ theme }) => theme.white};

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Prompt = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;
const Author = styled.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.white};
`;
const ImageCard = ({item}) => {
  return (
    <Card>
      <LazyLoadImage
      border-redius="20px"
        src={item?.photo}
        effect="blur"
        alt="Image"
        width="100%"
        height="auto"
      />
      <HoverOverlay>
        <Prompt>{item?.Prompt}</Prompt>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
        <Author>
          <Avatar style={{fontSize:"22px",
            width:"32px", height:"32px",
          }} >{item?.Author[0]}</Avatar>
          {item?.Author}
        </Author>
        <DownloadRounded onClick={()=>saveAs.saveAs(item?.photo,"download.jpg")} />
        </div>
      </HoverOverlay>
    </Card>
  );
}

export default ImageCard;
