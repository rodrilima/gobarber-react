import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  min-height: 800px;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 680px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #F4EDE8;
      text-decoration: none;
      margin-top: 24px;
      display: block;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')}
      }
    }
  }

  > a {
    color: #FF9000;
    text-decoration: none;
    margin-top: 24px;
    display: block;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    &:hover {
        color: ${shade(0.2, '#FF9000')}
      }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
