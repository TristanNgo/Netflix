import React, { createContext, useState, useContext } from "react";
import {
  Container,
  Inner,
  Frame,
  Title,
  Item,
  Header,
  Body,
} from "./styles/accordion";

export const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toogleShow, setToogleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toogleShow, setToogleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toogleShow, setToogleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToogleShow((toogleShow) => !toogleShow)}
      {...restProps}
    >
      {children}

      {toogleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toogleShow } = useContext(ToggleContext);
  return toogleShow ? <Body {...restProps}>{children}</Body> : null;
};
