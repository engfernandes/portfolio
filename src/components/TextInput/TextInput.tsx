import * as S from './style';

interface ITextInput {
  placeholder: string
}

function TextInputUI({placeholder}: ITextInput) {
  return (
    <S.InputStyled 
      variant='flushed' 
      placeholder={placeholder}
      borderColor='#4F4F4F'
      _placeholder={{ color:'#4F4F4F' }}
      width='auto'
      focusBorderColor='#27AE60'
    />
  );
}

export default TextInputUI;