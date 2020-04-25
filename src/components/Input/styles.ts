import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border: solid 2px #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #666360;
  transition: border-color 0.2s;

  ${(props) => props.hasError && css`
    border-color: #c53030;
  `}

  ${(props) => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  ${(props) => props.isFilled && css`
    color: #ff9000;
  `}

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

input {
  background: transparent;
  flex: 1;
  border: 0;
  color: #F4EDE8;

  &::placeholder {
    color: #666360;
  }
}

svg {
  margin-right: 16px;
}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
