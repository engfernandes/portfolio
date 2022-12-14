import NavBarUI from "../../NavBar/NavBar";
import * as S from './styles';

function Header(){
  return (
    <S.FlexStyled>
      <S.HeadingStyled>devG</S.HeadingStyled>
      <NavBarUI />
    </S.FlexStyled>
  );
}

export default Header;