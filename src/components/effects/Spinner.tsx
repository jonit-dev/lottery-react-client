import React from "react";
import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";

interface IProps {
  size?: "small" | "medium" | "large";
}

export const Spinner: React.FC<IProps> = ({ size = "small" }) => {
  const sizes = {
    small: 20,
    medium: 30,
    large: 40,
  };

  return (
    <InlineContainer>
      <SpinnerCircular
        color="#00c4a7"
        secondaryColor="#e7fffb"
        size={sizes[size]}
      />
    </InlineContainer>
  );
};

const InlineContainer = styled.span`
  margin-left: 1rem;
  position: relative;
  top: 0.4rem;
`;
