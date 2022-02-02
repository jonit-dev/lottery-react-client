import React from "react";
import { Spinner } from "./Spinner";

interface IProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export const ShowAsync: React.FC<IProps> = ({ isLoading, children }) => {
  return <>{isLoading ? <Spinner /> : children}</>;
};
