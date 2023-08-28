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

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header>
      {menuOpen ? (
        <NavMobile>
          <h2>Logo</h2>
          <BurgerButton open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerButton>
          <NavList open={open}>
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
        <Nav>
          <h2>Logo</h2>
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
    </header>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  color: white;
  padding: 5px;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    cursor: pointer;
    list-style: none;
    font-weight: bold;
  }
`;

const NavList = styled.ul<{ open: boolean }>`
  display: flex;
  list-style: none;
  height: 100%;
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  right: 0;
  top: 69px;
  width: 100%;
  padding: 2rem 2.4rem 2rem 2.4rem;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
`;
const NavMobile = styled.nav`
  border-bottom: 1px solid hsl(240, 17%, 26%);
  padding: 1.6rem 2.4rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  /* @media (min-width: 768px) {
    display: none;
  } */
`;
const BurgerButton = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: black;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
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
