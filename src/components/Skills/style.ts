import { CircularProgressLabel } from '@chakra-ui/react';
import { CircularProgress } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const BoxStyled = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;

  :hover {
    transform: scale(1.1);
    transition: 300ms;
  }
`;

export const CircularProgressStyled = styled(CircularProgress)`
`;

export const ProgressLabelStyled = styled(CircularProgressLabel)`
  color: #4F4F4F;
  justify-content: center;
  font-weight: 600;
`;

export const SkillStyled = styled(Text)`
  color: #27AE60;
  font-size: 1.5rem;
  font-weight: 600;
`;