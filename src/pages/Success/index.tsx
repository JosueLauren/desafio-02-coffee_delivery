import { useContext, useEffect } from 'react'

import { OrderContext } from '../../contexts/OrderContext'

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
  const { formOfPayment, address, resetListCoffeSelected } =
    useContext(OrderContext)

  useEffect(() => {
    resetListCoffeSelected()
  }, [])

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
              Entrega em{' '}
              <b>
                {address.road}, {address.number}
              </b>{' '}
              {address.neighborhood} - {address.city}, {address.uf}
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
                <b>{formOfPayment}</b>
              </span>
            </p>
          </PaymentInfo>
        </OrderInfo>
        <img src={completedOrderImage} alt="" width="492px" height="293px" />
      </OrderInfoAndImage>
    </SuccessContainer>
  )
}
