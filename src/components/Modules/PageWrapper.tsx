import React from "react";
interface props {
  children: React.ReactNode;
}
export const AppPageWrapper: React.FC<props> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
