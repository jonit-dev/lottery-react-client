import React from "react";
import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";

interface IProps {}

export const Spinner: React.FC<IProps> = (props) => {
  return (
    <InlineContainer>
      <SpinnerCircular color="#00c4a7" secondaryColor="#e7fffb" size={20} />
    </InlineContainer>
  );
};

const InlineContainer = styled.span`
  margin-left: 1rem;
  position: relative;
  top: 0.4rem;
`;
