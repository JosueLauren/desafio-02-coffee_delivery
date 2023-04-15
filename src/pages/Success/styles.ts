import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 90rem;
  margin: auto;
  padding: 5rem 10rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.5rem;
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 0.25rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderInfoAndImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  gap: 6.25rem;
`

export const OrderInfo = styled.div`
  border: double 2px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(#fafafa, #fafafa),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: content-box, border-box;
`

const BaseInfoOrder = styled.div`
  margin: 2.5rem 2.5rem 2rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > span {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme.purple};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.375rem;

    span {
      display: block;
    }
  }
`

export const InfoAddress = styled(BaseInfoOrder)`
  & > span {
    background: ${(props) => props.theme.purple};
  }
`

export const DeliveryTimeInfo = styled(BaseInfoOrder)`
  & > span {
    background: ${(props) => props.theme.yellow};
  }
`

export const PaymentInfo = styled(BaseInfoOrder)`
  & > span {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
