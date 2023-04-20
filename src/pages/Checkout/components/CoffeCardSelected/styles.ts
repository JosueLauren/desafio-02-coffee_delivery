import styled from 'styled-components'

export const CoffeeCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  gap: 0.5rem;

  & > div {
    flex: 1;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  span {
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`
export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  border: 0;
  padding: 0 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`
