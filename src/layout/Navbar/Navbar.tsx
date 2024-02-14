import { FiMenu } from "react-icons/fi";
import { Container, StyledNav } from "./Navbar.styles";
import { ButtonFill } from "../../styles/styles";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { toggleMenu } from "../../store/menu/menuSlice";
import getStandardName from "../../utils/getStandardName";
import { toggleCreateNoteModal } from "../../store/modal/modalSLice";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const { pathname, state } = useLocation();

// 이 state부분이 처음 마운트됬을 때 NaN, 지금 비어있어서 에러 발생 중
  console.log(state)

  if (pathname === "/404") {
    return null;
  }

  return (
    <StyledNav>
      <div className="nav__menu">
        <FiMenu onClick={() => dispatch(toggleMenu(true))} />
      </div>

    {/* NaN 경고가 나와서 임시로 NaN을 문자열로 바꿔주는 형변환 진행 */}
      <Container>
        <div className="nav__page-title">{String(getStandardName(state))}</div>


        {state !== "Trash" && state !== "Archive" && 
          <ButtonFill
            onClick={() => dispatch(toggleCreateNoteModal(true))}
            className="nav__btn"
          >
            <span>+</span>
          </ButtonFill>
        }
      </Container>
    </StyledNav>
  );
};

export default Navbar;

// Convert the state variable to a string before passing it as a child element
