// src/components/ImageCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;

const Image = styled.img`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  object-fit: cover;
`;

const Description = styled.p`
  margin-top: 6px;
  font-size: 14px;
  color: gray;
`;

const ImageCard = ({ src, description, width, height }) => {
    return (
        <Card>
            <Image src={src} alt="Image" width={width} height={height} />
            <Description>{description}</Description>
        </Card>
    );
};

export default ImageCard;
