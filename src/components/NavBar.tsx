import { Link } from "react-scroll";
import menuItems from "../data/source";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function NavBar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: any;
}) {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 0.1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate3d(0, ${scrollY * -0.005}px, 0)`,
  };

  return (
    <Header>
      {menuOpen ? (
        <NavMobile
          open={open}
          isSticky={isSticky}
          data-spy="affix"
          data-offset-top="100"
        >
          <div className="navbar-header-page-scroll">
            <a href="">
              <Logo src="/logo.png" alt="" />
            </a>
            <BurgerButton open={open} onClick={() => setOpen(!open)}>
              <span></span>
              <span></span>
              <span></span>
            </BurgerButton>
          </div>
          <NavList open={open} isSticky={isSticky}>
            {menuItems.map((menu, id) => (
              <li key={id}>
                <Link to={menu.title} smooth={true} offset={0} duration={500}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </NavList>
        </NavMobile>
      ) : (
        <Nav isSticky={isSticky}>
          <Logo src="/logo.png" alt="" />
          <ul>
            {menuItems.map((menu, id) => (
              <li key={id}>
                <Link to={menu.title} smooth={true} offset={0} duration={500}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </Nav>
      )}
      <Container style={parallaxStyle}>
        <Title>Nia Bezarashvili</Title>
        <Desc> Developer</Desc>
      </Container>
    </Header>
  );
}

const Container = styled.div`
  position: relative;
  transform-style: preserve-3d;
  perspective: 1px;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 18%;
    width: 68%;
    height: 94%;
    transform-origin: top;
    /* background-image: url(/binary.png);   vnaxot sheidzleba chavsva rame jer iyos ase  */
    background-size: cover;
    z-index: -1;
    will-change: transform;
    transform: scale(1, ${1 + scrollY * 0.5});
  }
`;

const Header = styled.header`
  background: url("/bg.jpg") no-repeat center center scroll;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  min-height: 878px;
`;

const Logo = styled.img`
  width: 50px;
`;
const Nav = styled.nav<{ isSticky: boolean }>`
  position: ${({ isSticky }) => (isSticky ? "fixed" : "")};
  top: ${({ isSticky }) => (isSticky ? "0" : "")};
  transition: transform 0.3s ease-in-out;
  transform: ${({ isSticky }) => (isSticky ? "scale(1.1)" : "scale(1)")};
  width: 100%;
  border-radius: 0px;
  border-bottom: 1px solid #fffdf8;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: ${({ isSticky }) => (isSticky ? "white" : "transparant")};
  padding: 10px;
  margin-bottom: 1px;
  font-family: "Lobster", cursive;
  font-size: 1.7em;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-around;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    float: left;
    margin: 0;
    cursor: pointer;
    list-style: none;
    font-weight: bold;
  }
`;

const NavList = styled.ul<{ open: boolean; isSticky: boolean }>`
  display: ${({ isSticky }) => (isSticky ? "none" : "flex")};
  list-style: none;
  border-top: 1px solid #ffb7b7;
  flex-flow: column nowrap;
  background-color: #faf3f0;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  right: 0;
  top: 69px;
  width: 100%;
  padding: 2rem 2.4rem 2rem 2.4rem;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  font-family: "Lobster", cursive;
  font-size: 1.7em;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const NavMobile = styled.nav<{ open: boolean; isSticky: boolean }>`
  border-bottom: 1px solid hsl(240, 17%, 26%);
  background-color: ${({ open, isSticky }) =>
    open || isSticky ? "#faf3f0" : "transparant"};
  padding: 1.6rem 2.4rem;
  position: fixed;
  width: 100%;
  z-index: 10;

  justify-content: space-between;
  .navbar-header-page-scroll {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const BurgerButton = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 5rem;
  height: 5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 5rem;
    height: 0.5rem;
    background-color: #ffb7b7;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
const Title = styled.h1`
  font-family: "Lobster", cursive;
  color: #fffdf8;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 6em;
`;

const Desc = styled.p`
  font-size: 2.5em;
  color: #fffdf8;
  text-align: center;
  font-family: "Raleway", sans-serif;
  position: absolute;
  left: 50%;
  top: 60%;

  transform: translate(-50%, -50%);
`;
