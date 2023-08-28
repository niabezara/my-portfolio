import styled from "styled-components";

import Plx from "react-plx";

export default function Parallaxcontent() {
  return (
    <Section>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            properties: [
              {
                startValue: 1,
                endValue: 1.8,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img
          style={{ width: "100%", height: "100vh" }}
          src="background.jpg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%",
        }}
      >
        <img
          style={{
            width: "30vw",
          }}
          src="/3.png"
          alt="Goonies"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          // height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  height: 100vh;
  background-color: antiquewhite;
`;
