import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.$accentColor};
  font-size: 48px;
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
