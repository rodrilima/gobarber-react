import styled from 'styled-components';
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

    input {
      background: #232129;
      border: solid 2px #232129;
      border-radius: 10px;
      color: #F4EDE8;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }

      &::placeholder {
        color: #666360;
      }
    }

    button {
      background: #FF9000;
      height: 56px;
      border: 0;
      border-radius: 10px;
      padding: 0 16px;
      width: 100%;
      margin-top: 16px;
      color: #312e38;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#FF9000')}
      }
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
