import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 90rem;
  padding: 2rem 10rem;
  height: 6.5rem;
  margin: auto;

  nav {
    display: flex;
    gap: 0.75rem;

    span {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      font-size: 0.875rem;
      border-radius: 0.375rem;
    }

    a {
      padding: 0.5rem;
      background: ${(props) => props.theme['yellow-light']};
      border-radius: 0.375rem;
      display: flex;
      align-items: center;
      position: relative;

      span {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        padding: 0.125rem;
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        top: -0.5rem;
        right: -0.5rem;
      }
    }
  }
`
