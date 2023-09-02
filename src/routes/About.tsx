import React, { useEffect } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Typewriter from "typewriter-effect";
export default function About() {
  return (
    <Section>
      <Abouttttt>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "flexStart",
            width: "100%",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              paddingTop: "0",
              marginLeft: " 16.6667%",
              flex: "0 0 75%",
              maxWidth: "75%",
              flexBasis: "75%",
            }}
          >
            {/* <p>About{" />"}</p> */}
            <div className="mt-3">
              <div className="code-wrp">
                <Code1 data-line-nr="01">
                  <div className="methods">class </div>
                  <span className="propname">Nia Bezarashvili</span>
                </Code1>
                <Code1 data-line-nr="02">
                  <div className="dot">··</div>
                  <div className="comment">// I can, because I did.</div>
                </Code1>
                <Code1 data-line-nr="03">
                  <div className="dot">··</div>
                  <div className="comment">
                    // My vast variety of skills is continuously expanding.
                  </div>
                </Code1>
                <Code1 data-line-nr="04">
                  <div className="dot">··</div>
                  <div className="methods">constructor{"(){"}</div>
                </Code1>
                <Code1 data-line-nr="05">
                  <div className="dot">····</div>
                  <span className="scope">this</span>.
                  <span className="prop2">name</span>
                  <span className="scope">=</span>
                  <span className="string">'Nia Bezarashvili'</span>
                </Code1>
                <Code1 data-line-nr="06">
                  <div className="dot">····</div>
                  <span className="scope">this</span>.
                  <span className="prop2">dayOfBirthTimestamp</span>
                  <span className="scope">=</span>
                  <span className="number">796771200</span>
                </Code1>
                <Code1 data-line-nr="07">
                  <div className="dot">····</div>
                  <span className="scope">this</span>.
                  <span className="prop2">email</span>
                  <span className="scope">=</span>
                  <span className="string">'niabezarashvili@yahoo.com'</span>
                </Code1>
                <Code1 data-line-nr="08">
                  <div className="dot">
                    ··<span>{"}"}</span>
                  </div>
                </Code1>
                <Code1 data-line-nr="09">
                  <div className="dot">··</div>
                  <span className="propname">
                    workExperience <span>{"() {"}</span>
                  </span>
                </Code1>
                <Code1 data-line-nr="10">
                  <div className="dot">····</div>
                  <div className="methods">return {" ["}</div>
                </Code1>

                <Code1 data-line-nr="11">
                  <div className="dot">
                    ···· <span>{"]"}</span>
                  </div>
                </Code1>
                <Code1 data-line-nr="12">
                  <div className="dot">
                    ·· <span>{"}"}</span>
                  </div>
                </Code1>
                <Code1 data-line-nr="13">
                  <div className="dot">··</div>
                  <span className="propname">
                    education <span>{"() {"}</span>
                  </span>
                </Code1>
                <Code1 data-line-nr="14">
                  <div className="dot">····</div>
                  <div className="methods">
                    return <span>{"["}</span>
                  </div>
                </Code1>
                <Code1 data-line-nr="15">
                  <div className="dot">······</div>
                  <span className="string">
                    <span>{"{"}</span>'2013-2017'
                  </span>{" "}
                  :
                  <span className="string">
                    'International Black Sea University, BACHELOR DEGREE OF
                    BUSINESS ADMINISTRATION, MAJOR IN MANAGEMENT, ENGLISH
                    SECTOR' <span>{"}"}</span>
                  </span>
                </Code1>
                <Code1 data-line-nr="16">
                  <div className="dot">······</div>
                  <span>{"{"}</span>
                  <span className="string">'2023-2023'</span> :
                  <span className="string">
                    'Bitcamp, A FULL STACK WEB DEVELOPMENT'
                  </span>
                  <span>{"}"}</span>
                </Code1>
                <Code1 data-line-nr="17">
                  <div className="dot">····</div>
                  <span>{"]"}</span>
                </Code1>
                <Code1 data-line-nr="18">
                  <div className="dot">··</div>
                  <span>{"}"}</span>
                </Code1>
                <Code1 data-line-nr="19">
                  <div className="dot">··</div>
                  <span className="propname">skills</span>
                  <span>{"() {"}</span>
                </Code1>
                <Code1 data-line-nr="20">
                  <div className="dot">····</div>
                  <div className="methods">
                    return <span>{"["}</span>
                  </div>
                  <span className="string">
                    'HTML/CSS/JS', 'Bootstrap/Tailwind', 'Vite', 'SCSS/Less',
                    'GIT', 'TypeScript', 'CSS Modules','Styled Components',
                    'React TS','Rest-api', 'React Router', 'Next.js',
                    'MongoDB','framer'
                  </span>
                  <span className="cursor">
                    <span>{"]"}</span>
                  </span>
                </Code1>
                <Code1 data-line-nr="21">
                  <div className="dot">··</div>
                  <span>{"}"}</span>
                </Code1>
                <Code1 data-line-nr="22">
                  {" "}
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("}")
                        .callFunction(() => {
                          console.log("String typed out!");
                        })
                        .pauseFor(1000)
                        .deleteAll()
                        .callFunction(() => {
                          console.log("All strings were deleted");
                        })
                        .start();
                    }}
                  />
                </Code1>
              </div>
            </div>
          </div>
        </div>
      </Abouttttt>
    </Section>
  );
}

const Section = styled.div``;

const Abouttttt = styled.div`
  background-color: #82c4c3;
  height: auto;
  overflow: hidden;
  position: relative;
  &::after {
    bottom: -100px;
    box-shadow: 0 0 80px 0 #07060a;
    content: "";
    height: 100px;
    left: 0;
    position: absolute;
    width: 100%;
  }
  .code-wrp {
    font-family: Roboto Mono, Courier New, Courier, monospace !important;
    font-size: 16px;
    line-height: 1.6;
    align-items: start;
    display: flex;
    flex-direction: column;
  }
`;

const Code1 = styled.div`
  position: relative;
  z-index: 1;
  &:after {
    color: #3b3553;
    content: attr(data-line-nr);
    font-family: Roboto Mono, Courier New, Courier, monospace !important;
    font-size: 16px;
    left: -60px;
    line-height: 1.6;
    position: absolute;
    top: 0;
    z-index: 3;
  }

  &:hover {
    position: relative;
  }

  &:hover:before {
    background-color: #231d28;
    content: "";
    height: 100%;
    left: -100%;
    position: absolute;
    top: 0;
    width: 300%;
    z-index: -2;
  }

  .methods {
    color: #5918df;
    display: inline;
  }

  .propname {
    color: #eeff31;
  }

  .dot {
    color: #3b3553;
    display: inline;
  }

  .comment {
    color: #78707e;
    display: inline;
  }

  .scope {
    color: #e3244c;
    display: inline;
  }

  .prop2 {
    color: #24e394;
  }

  .string {
    color: red;
  }

  .number {
    color: #e39d24;
  }
`;
