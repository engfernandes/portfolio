import * as S from './styles';

function SupercardUI({children}: any) {
  return (
    <S.CardStyled>
      <S.CardBodyStyled>
        {children}
      </S.CardBodyStyled>
    </S.CardStyled>
  );
}

export default SupercardUI;