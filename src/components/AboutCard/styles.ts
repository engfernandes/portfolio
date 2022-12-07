import { Icon, CardBody, Card, Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const CardStyled = styled(Card)`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  display: flex;
`;

export const CardBodyStyled = styled(CardBody)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoxStyled = styled(Box)`
  align-items: center;
  background-color: #212121;
  border-radius: 100%;
  display: flex;
  height: 3rem;
  justify-content: center;
  margin-bottom: 8px;
  width: 3rem;
`;

export const IconStyled = styled(Icon)`
  color: #27AE60;
  height: 1.5rem;
  width: 1.5rem;
`;

export const TitleStyled = styled(Text)`
  color: #FFFFFF;
  font-weight: 600;
`;

export const DescriptionStyled = styled(Text)`
  color: #FFFFFF;
  font-weight: 400;
`;