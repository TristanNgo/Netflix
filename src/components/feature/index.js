import React from "react";
import { Container, Title, SubTitle } from "./styles/feature";
export default function Feature({ children, ...restProp }) {
  return <Container {...restProp}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProp }) {
  return <Title {...restProp}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProp }) {
  return <SubTitle {...restProp}>{children}</SubTitle>;
};
