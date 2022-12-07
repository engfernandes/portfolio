import * as S from './styles';

interface IOutlinedButton {
  text: string
}

function OutlinedButtonUI({text}: IOutlinedButton) {
  return (
    <S.OutlinedButtonStyled variant='outline'>{text}</S.OutlinedButtonStyled>
  );
}

export default OutlinedButtonUI;