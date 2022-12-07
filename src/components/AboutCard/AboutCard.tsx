import * as S from './styles';

interface IAboutCardUI {
  icon: any
  title: string
  description: string
} 

function AboutCardUI({ icon, title, description }: IAboutCardUI) {
  return (
    <S.CardStyled>
      <S.CardBodyStyled>
        <S.BoxStyled>
          <S.IconStyled as={icon}></S.IconStyled>
        </S.BoxStyled>
        <S.TitleStyled>{title}</S.TitleStyled>
        <S.DescriptionStyled>{description}</S.DescriptionStyled>
      </S.CardBodyStyled>
    </S.CardStyled> 
  );
}

export default AboutCardUI;