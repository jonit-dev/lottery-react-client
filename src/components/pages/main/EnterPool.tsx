import React from "react";
import styled from "styled-components";
import { Spinner } from "../../effects/Spinner";

interface IProps {
  isManager: boolean;
  isJoiningPool: boolean;
  hasJoinedPool: boolean;
  onEnterPool: () => void;
  onPickWinner: () => void;
}

export const EnterPool: React.FC<IProps> = ({
  isManager,
  isJoiningPool,
  hasJoinedPool,
  onEnterPool,
  onPickWinner,
}) => {
  return (
    <Container>
      {isJoiningPool ? (
        <JoiningPoolMessage>
          <Spinner size="large" />
          <p>Joining pool. Please wait...</p>
        </JoiningPoolMessage>
      ) : (
        <div className="column right has-text-centered">
          <h1 className="title is-4">
            {" "}
            {hasJoinedPool ? "⚡ You're in the pool! ⚡" : "Join our Pool!"}
          </h1>
          {!hasJoinedPool ? (
            <button
              onClick={onEnterPool}
              className="button is-block is-primary is-fullwidth is-medium"
            >
              Enter
            </button>
          ) : (
            <div className="notification is-info is-light">
              You already joined our pool! Good luck!
            </div>
          )}

          <br />

          {isManager && (
            <small>
              Manager:{" "}
              <a href="#" onClick={onPickWinner}>
                Pick a winner
              </a>
            </small>
          )}
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoiningPoolMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  p {
    flex: 100%;
    font-size: 0.9rem;
    margin-top: 1rem;
    font-style: italic;
    text-align: center;
  }
`;
