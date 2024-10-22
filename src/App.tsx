import styled from "styled-components";
import Background from "./Components/Background";
import TextSection from "./Components/TextSection";
import Wave from "./Components/Wave";
import Card from "./Components/Card";

export default function App() {
  return (
    <Wrapper>
      <Background />
      <WaveWrapper>
        <Wave />
      </WaveWrapper>
      <TextSection />
      <CardWrapper>
        <Card />
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const WaveWrapper = styled.div`
  position: relative;
  top: 200px;
`;

const CardWrapper = styled.div`
  padding: 0 20px;
`;
