import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  min-height: 800px;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  align-items: center;

  width: 100%;
  max-width: 680px;

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
    color: #F4EDE8;
    text-decoration: none;
    margin-top: 24px;
    display: block;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    &:hover {
        color: ${shade(0.2, '#F4EDE8')}
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
