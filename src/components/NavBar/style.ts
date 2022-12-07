import { Box, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const BoxStyled = styled(Box)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  justify-content: right;
`;

export const LinkStyled = styled(Link)`
  color: #FFFFFF;

  :hover {
    color: #27AE60;
    text-decoration: none;
  }
`;