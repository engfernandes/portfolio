import { Card, CardBody } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const CardStyled = styled(Card)`
  background-color: #212121;
  border-radius: 0;
  display: flex;
  width: 80%;
`;

export const CardBodyStyled = styled(CardBody)`
  display: flex;
  justify-content: space-evenly;
`;