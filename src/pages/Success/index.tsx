import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import {
  DeliveryTimeInfo,
  InfoAddress,
  OrderInfo,
  OrderInfoAndImage,
  PaymentInfo,
  SuccessContainer,
} from './styles'

import completedOrderImage from './../../assets/imagem_pedido_finalizado.svg'

export const Success = () => {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <OrderInfoAndImage>
        <OrderInfo>
          <InfoAddress>
            <span>
              <MapPin weight="fill" size={16} color="#ffff" />
            </span>
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> Farrapos - Porto
              Alegre, RS
            </p>
          </InfoAddress>
          <DeliveryTimeInfo>
            <span>
              <Timer weight="fill" size={16} color="#ffff" />
            </span>
            <p>
              Previsão de entrega
              <span>
                <b>20 min - 30 min </b>
              </span>
            </p>
          </DeliveryTimeInfo>
          <PaymentInfo>
            <span>
              <CurrencyDollar weight="fill" size={16} color="#ffff" />
            </span>
            <p>
              Pagamento na entrega
              <span>
                <b>Cartão de Crédito</b>
              </span>
            </p>
          </PaymentInfo>
        </OrderInfo>
        <img src={completedOrderImage} alt="" width="492px" height="293px" />
      </OrderInfoAndImage>
    </SuccessContainer>
  )
}
