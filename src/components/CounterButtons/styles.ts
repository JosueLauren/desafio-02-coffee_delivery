import styled from 'styled-components'

export const CounterButtons = styled.div`
  span {
    background: ${(props) => props.theme['base-button']};
    padding: 0.5rem 0;
    font-size: 1rem;
  }
`

const CounterButtonBase = styled.button`
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  border: 0;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
`

export const CounterButtonMore = styled(CounterButtonBase)`
  border-radius: 0 0.375rem 0.375rem 0;
`

export const CounterButtonLess = styled(CounterButtonBase)`
  border-radius: 0.375rem 0 0 0.375rem;
`
