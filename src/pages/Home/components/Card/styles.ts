import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem 1.25rem 1.25rem;
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
    margin-bottom: 1rem;
  }

  div.type-coffe {
    margin-bottom: 1.25rem;
    span {
      border-radius: 100px;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      font-size: 0.625rem;
      font-weight: 700;
      margin-right: 0.5rem;
    }
  }

  h6 {
    font-family: 'Baloo 2 ', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  & > span {
    flex: 1;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};

    &::before {
      content: 'R$';
      font-weight: 400;
      font-size: 0.875rem;
      font-family: 'Roboto', sans-serif;
    }
  }

  & > button {
    background: ${(props) => props.theme['purple-dark']};
    border: 0;
    border-radius: 6px;
    padding: 0.5rem;
    width: 2.375rem;
    height: 2.2rem;
    cursor: pointer;
    transition: background 0.1s;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
