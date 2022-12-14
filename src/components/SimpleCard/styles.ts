import { Card, CardBody, Image, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const CardStyled = styled(Card)`
  background-color: #212121;
  border-radius: 0;
  color: #535353;
  padding: 16px;
  height: 250px;
  width: 500px;
  :hover {
    border-bottom: 6px solid #27AE60;
    box-sizing: border-box;
  }
`

export const CardBodyStyled = styled(CardBody)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const ImageStyled = styled(Image)`
  width: 3rem;
`

export const HeadingStyled = styled(Heading)`
  font-weight: 600;
  text-align: left;
  width: 80%;
`