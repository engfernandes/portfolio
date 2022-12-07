import * as S from './styles';

interface ISolidButtonUI {
  text: string
}

function SolidButtonUI({text}: ISolidButtonUI) {
  return ( 
    <S.SolidButtonStyled variant='solid'>{text}</S.SolidButtonStyled>
  )
}

export default SolidButtonUI;