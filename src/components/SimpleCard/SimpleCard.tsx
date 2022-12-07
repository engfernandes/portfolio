import * as S from './styles';

interface ISimpleCardUI {
  title: string
  image: string
}

function SimpleCardUI({title, image}: ISimpleCardUI) {
  return (
    <S.CardStyled maxW='sm'>
      <S.CardBodyStyled>
        <S.ImageStyled src={image}/>
        <S.HeadingStyled>{title}</S.HeadingStyled>
      </S.CardBodyStyled>
    </S.CardStyled>
  )
}

export default SimpleCardUI;