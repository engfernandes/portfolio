import * as S from "./style";

interface ISkillsUI {
  percent: number
  skill: string
}

function SkillsUI({percent, skill}: ISkillsUI) {
  return (
    <S.BoxStyled>
      <S.CircularProgressStyled 
        value={percent} 
        color='#27AE60' 
        size='6rem'
        thickness='0.5rem'
      >
        <S.ProgressLabelStyled>{`${percent}%`}</S.ProgressLabelStyled>
      </S.CircularProgressStyled>
      <S.SkillStyled>{skill}</S.SkillStyled>
    </S.BoxStyled>
  );
}

export default SkillsUI;