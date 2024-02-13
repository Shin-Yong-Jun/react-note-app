import { FiMenu } from "react-icons/fi";
import { Container, StyledNav } from "./Navbar.styles";
import { ButtonFill } from "../../styles/styles";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { toggleMenu } from "../../store/menu/menuSlice";
import { toggleCreateNoteModal } from "../../store/modal/modalSLice";
import getStandardName from "../../utils/getStandardName";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const { pathname, state } = useLocation(); // location  안에 pathname과 state가 들어있다.

  //console.log(state); // 이 state가 archive 문자열 혹은 trash 문자열인지에 따라서 조건부 렌더링을 해줄 수 있다.

  if (pathname === "/404") {
    return null;
  }

  return (
    <StyledNav>
      <div className="nav__menu">
        <FiMenu onClick={() => dispatch(toggleMenu(true))} />
      </div>

      <Container>
        <div className="nav__page-title">{getStandardName(state)}</div>

        {state !== "archive" && state !== "trash" && (
          <ButtonFill
            onClick={() => dispatch(toggleCreateNoteModal(true))}
            className="nav__btn"
          >
            <span>+</span>
          </ButtonFill>
        )}
      </Container>
    </StyledNav>
  );
};

export default Navbar;
