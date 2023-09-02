import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

type Inputs = {
  to_name: string;
  from_name: string;
  message: string;
};

export default function Contact() {
  const [success, setSuccess] = useState<boolean | null>(null);
  const ref = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(ref.current);
    emailjs
      .sendForm(
        "service_w738nml",
        "template_iwj0h03",
        ref.current as HTMLFormElement,

        "7j8ZCi3gTrC9-IGNK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );

    console.log(data);
    setSuccess(true);
  };

  return (
    <Section>
      <Wrapper>
        <Container success={success}>
          <Adress>
            <p>Tbilisi</p>
          </Adress>
          <Adress>
            <p>Georgia</p>
          </Adress>
          <Title>Contact Me</Title>
          <Pen></Pen>
          {success ? (
            <SuccessConatiner>
              <p>I'll be in touch soon</p>
              <span></span>
            </SuccessConatiner>
          ) : (
            <Form ref={ref} onSubmit={handleSubmit(onSubmit)}>
              <Inputwrap>
                <Input
                  placeholder="Name"
                  style={{ fontFamily: "Raleway", fontStyle: " sans-serif" }}
                  {...register("to_name", { required: true })}
                  aria-invalid={errors.to_name ? "true" : "false"}
                />
                <div className="bar"></div>
                {errors.to_name?.type === "required" && (
                  <p
                    style={{ color: "#eb638b", fontSize: "15px" }}
                    role="alert"
                  >
                    Name
                  </p>
                )}
              </Inputwrap>
              <Inputwrap>
                <Input
                  placeholder="Email"
                  style={{ fontFamily: "Raleway", fontStyle: " sans-serif" }}
                  {...register("from_name", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.from_name ? "true" : "false"}
                />
                <div className="bar"></div>
                {errors.from_name && (
                  <p
                    style={{ color: "#eb638b", fontSize: "15px" }}
                    role="alert"
                  >
                    {errors.from_name.message}
                  </p>
                )}
              </Inputwrap>
              <TextArea
                placeholder="Write your message"
                style={{ fontFamily: "Raleway", fontStyle: " sans-serif" }}
                {...register("message", { required: true })}
              />
              <BtnWrap>
                <Button type="submit">Hit me up! 🚀</Button>
              </BtnWrap>
              {success && "Your message has been sent 💭"}
            </Form>
          )}
        </Container>
      </Wrapper>
    </Section>
  );
}

const Section = styled.div`
  height: 100vh;
  background-color: #f5b4b8;
  position: relative;
  overflow-x: hidden;
  transition: 0.2s ease-in-out;
  transition-delay: 1s;

  &:invert {
    -webkit-filter: invert(1);
  }
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 5vw;
    height: 5vw;
    top: -2.5vw;
    left: 20vw;
    background: #eb638b;
    z-index: 2;
    border-radius: 100%;
    border: 2px solid #2a3088;
    animation: jamming 15s ease-in-out infinite;
    animation-delay: 2s;
    @keyframes jamming {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 5vw;
    height: 5vw;
    top: -2.5vw;
    left: auto;
    right: 10vw;
    background: #fcdab7;
    z-index: 2;
    border-radius: 100%;
    border: 2px solid #2a3088;
    animation: jamming 10s ease-in-out infinite;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
  background-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lobster", cursive;
  position: relative;
  z-index: 2;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 60vw;
    height: 60vw;
    top: 50%;
    left: -7%;
    min-height: 700px;
    min-width: 700px;
    background: #fcdab7;
    z-index: -1;
    border-radius: 100%;
    border: 2px solid #2a3088;
    box-shadow: -20px -600px 0px -400px #00927f, -20px -600px 0px -398px #2a3088;
    animation: wobble1 15s ease-in-out infinite;
    animation-delay: 0.5s;
    @keyframes wobble1 {
      0% {
        transform: translateX(0%) translateY(0%);
        box-shadow: -20px -600px 0px -400px #00927f,
          -20px -600px 0px -398px #2a3088, -80px -500px 0px -400px #f6b781,
          -80px -500px 0px -398px #2a3088;
      }
      50% {
        transform: translateX(5%) translateY(-2%);
        box-shadow: -40px -400px 0px -400px #00927f,
          -40px -400px 0px -398px #2a3088, -100px -700px 0px -400px #f6b781,
          -100px -700px 0px -398px #2a3088;
      }
      100% {
        transform: translateX(0%) translateY(0%);
        box-shadow: -20px -600px 0px -400px #00927f,
          -20px -600px 0px -398px #2a3088, -80px -500px 0px -400px #f6b781,
          -80px -500px 0px -398px #2a3088;
      }
    }
  }
  &::after {
    left: auto;
    right: -7%;
    height: 50vw;
    width: 50vw;
    box-shadow: -80px -500px 0px -350px #00927f, -80px -500px 0px -348px #2a3088;
    animation: wobble2 17.5s ease-in-out infinite;
    @keyframes wobble2 {
      0% {
        transform: translateX(0%) translateY(0%);
        box-shadow: -80px -500px 0px -350px #00927f,
          -80px -500px 0px -348px #2a3088, 80px -600px 0px -350px #eb638b,
          80px -600px 0px -348px #2a3088;
      }
      50% {
        transform: translateX(-5%) translateY(2%);
        box-shadow: -40px -400px 0px -350px #00927f,
          -40px -400px 0px -348px #2a3088, 120px -300px 0px -350px #eb638b,
          120px -300px 0px -348px #2a3088;
      }
      100% {
        transform: translateX(0%) translateY(0%);
        box-shadow: -80px -500px 0px -350px #00927f,
          -80px -500px 0px -348px #2a3088, 80px -600px 0px -350px #eb638b,
          80px -600px 0px -348px #2a3088;
      }
    }
  }
`;

const Container = styled.div<{ success: any }>`
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px; */
  width: calc(100% - 10vw);
  max-width: 700px;
  min-height: 500px;
  background: ${(props) =>
    props.success ? `url("/circle.svg"), #00927f` : "#f6b781"};
  background-size: ${(props) => (props.success ? `25px` : "")};
  border: 2px solid #2a3088;
  position: absolute;
  top: 15%;
  left: 50%;
  transform-style: preserve-3d;
  transform: translateX(-50%);
  z-index: 3;
  opacity: 1;
  transition: 0.2s ease-in-out;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 2.5%;
    top: 2.5%;
    border: 2px solid #2a3088;
    z-index: -3;
    background: url("/circle.svg"), #eb638b;
    background-size: 10px;
    background-position: 10% 5%;
    transform: translateZ(-1em);
  }
`;

const Adress = styled.div`
  position: absolute;
  display: block;
  right: -10vw;
  top: 10%;
  z-index: 4;
  text-align: center;
  background: #fcdab7;
  color: #2a3088;
  min-height: 150px;
  width: 10vw;
  height: 10vw;
  font-weight: 900;
  min-width: 150px;
  transform-style: preserve-3d;
  transform: translateZ(1em);
  border: 2px solid #2a3088;
  &:nth-of-type(2) {
    background: #eb638b;
    top: 50%;
    p {
      line-height: 2;
      top: -50%;
    }
    &:after {
      background: #fcdab7;
    }
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 7.5%;
    left: -10%;
    background: #00927f;
    border: 2px solid #2a3088;
    transform-style: preserve-3d;
    transform: translateZ(-1em);
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 900;
  margin: 0px;
  color: #2a3088;
  position: absolute;
  top: -12.5%;
  left: -6.5%;
  z-index: 1;
  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #fcdab7;
    z-index: -1;
    height: 100%;
    width: 100%;
    top: 50%;
    left: -5%;
    border: 2px solid #2a3088;
  }
  &:after {
    left: 0;
    top: 65%;
    z-index: -2;
    background: #eb638b;
  }
`;

const Pen = styled.div`
  display: block;
  width: 70px;
  height: 70px;
  position: absolute;
  right: -5%;
  top: -10%;
  padding: 1em;
  background: url("/pen.svg"), #fcdab7;
  border-radius: 100%;
  background-size: 35px;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #2a3088;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 25%;
    left: 5%;
    background: #00927f;
    border: 2px solid #2a3088;
    border-radius: 100%;
    z-index: -1;
  }
`;

const Form = styled.form`
  width: 90%;
  display: block;
  margin: 10% auto 0;
  transition: 0.2s ease-in-out;

  label {
    color: #2a3088;
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Inputwrap = styled.div`
  display: table;
  width: 100%;
  padding-left: 10px;
  height: 100%;
  position: relative;
  .bar {
    position: absolute;
    display: block;
    width: 100%;
    height: 90%;
    top: 5%;
    left: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
    transform-origin: 50% 100%;
    transform: scaleY(0);
  }
  input[type="text"]:focus ~ .bar,
  input[type="textarea"]:focus ~ .bar {
    background: #fcdab7;
    transform: scaleY(1);
  }
`;

const Input = styled.input`
  width: 95%;
  position: relative;
  background: transparent;
  border: 0px solid;
  border-bottom: 2px solid #2a3088;
  margin: 5px auto 25px;
  color: #2a3088;
  transition: 0.2s ease-in-out;
  font-size: 1.5em;
  padding: 2.5px 10px;
  resize: none;
  &:focus {
    outline: none;
    animation: colorshift 4s linear infinite;
    @keyframes colorshift {
      0% {
        color: #eb638b;
      }
      20% {
        color: #2a3088;
      }
      40% {
        color: #eb638b;
      }
      80% {
        color: #2a3088;
      }
      100% {
        color: #eb638b;
      }
    }
  }
`;

const TextArea = styled.textarea`
  width: 95%;
  position: relative;
  background: transparent;
  border: 0px solid;
  border-bottom: 2px solid $purple;
  margin: 5px auto 25px;
  color: $purple;
  transition: 0.2s ease-in-out;
  font-size: 1.5em;
  padding: 2.5px 10px;
  resize: none;
  &:focus {
    outline: none;
    animation: colorshift 4s linear infinite;
    @keyframes colorshift {
      0% {
        color: #eb638b;
      }
      20% {
        color: #2a3088;
      }
      40% {
        color: #eb638b;
      }
      80% {
        color: #2a3088;
      }
      100% {
        color: #eb638b;
      }
    }
  }
`;

const BtnWrap = styled.div`
  display: table;
  margin: 10px auto 20px;
  transition: 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  box-shadow: -20px 20px 0px -8px #2a3088;

  border: 2px solid #2a3088;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 10px 10px 0px -5px #2a3088;
  }
  &:before {
    content: "";
    position: absolute;
    transition: 0.2s ease-in-out;
    width: 100%;
    height: 500%;
    top: 0;
    left: 0;
    background: url("/circle.svg"), #eb638b;
    background-size: 10px;
    z-index: -1;
    animation: jammin 5s ease-in-out infinite;
    @keyframes jammin {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-50%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

const Button = styled.button`
  background: transparent;
  border: 0px solid;
  max-width: 200px;
  font-size: 1.5em;
  color: #2a3088;
  display: block;
  padding: 2em;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  text-shadow: none;
  background: #fcdab7;
  transition: 0.2s ease-in-out;
  &:hover {
    background: transparent;
    color: #fcdab7;
  }
`;
const SuccessConatiner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 80%;
  transform-style: preserve-3d;
  transition: 0.2s ease-in;
  font-size: 1.5em;
  background: #fcdab7;
  padding: 1.5em;
  text-align: center;
  border: 2px solid #2a3088;
  transform: scaleY(1) translateX(-50%) translateY(-50%) translateZ(2em);
  p {
    display: inline-block;
    color: #2a3088;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f6b781;
    border: 2px solid #2a3088;
    left: -5%;
    top: 20%;
    transform: translateZ(-1em);
  }
`;
