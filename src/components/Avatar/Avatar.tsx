import { WrapItem } from "@chakra-ui/react";
import * as S from './styles';

function AvatarUI() {
  return (
    <WrapItem>
      <S.AvatarStyled
        name='Gabriel Fernandes'
        src='https://media-exp1.licdn.com/dms/image/C4D03AQG_qksbWT5gyQ/profile-displayphoto-shrink_800_800/0/1659033106233?e=1675900800&v=beta&t=ZWkay-NVRqQtyUyzdON9GjqIEDlxTNRYZOsp0a1_EIQ'
      />
    </WrapItem>
  );
}

export default AvatarUI;