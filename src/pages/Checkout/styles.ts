import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 90rem;
  padding: 0 10rem;
  margin: 2.5rem auto;
  display: flex;
  gap: 2rem;
`

export const CompleteOrder = styled.section`
  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormOrder = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;

  h6 {
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-weight: 400;
    gap: 0.75rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.375rem;
  }

  p {
    font: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    padding-left: 2rem;
    font-size: 0.875rem;
  }

  form {
    margin-top: 2rem;
  }

  fieldset {
    border: 0;
    display: flex;
    gap: 0.75rem;

    &:not(:first-child) {
      margin-top: 1rem;
    }

    input {
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme['base-button']};
      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }

      &:focus {
        border-color: ${(props) => props.theme['yellow-dark']};
      }

      &.field-street {
        width: 100%;
      }

      &.field-complement,
      &.field-city {
        flex: 1;
      }

      &.field-uf {
        width: 3.75rem;
      }
    }
  }
`

export const FormOfPayment = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  h6 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    gap: 0.75rem;
    line-height: 1.375rem;
  }

  p {
    font: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    padding-left: 2rem;
    font-size: 0.875rem;
  }
`

export const SelectCard = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  button {
    padding: 1rem;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    gap: 0.75rem;
    text-transform: uppercase;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    transition: background 0.1s;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &.active {
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
  }
`

export const CoffeeSelectedContainer = styled.section`
  flex: 1;

  h3 {
    margin-bottom: 1rem;
  }
`

export const CoffeeSelectedContent = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
`

export const TotalItems = styled.div`
  margin-top: 1.6rem;
`

const BasePaymentAmounts = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.125rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
`

export const ItemValue = styled(BasePaymentAmounts)``

export const DeliveryValue = styled(BasePaymentAmounts)``

export const TotalPayable = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  border: 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  line-height: 160%;
  transition: background 0.1s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    a {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  a {
    display: block;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    padding: 0.75rem;
    border-radius: 6px;
  }
`
