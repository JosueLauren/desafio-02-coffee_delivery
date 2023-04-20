import { useContext } from 'react'

import { OrderContext } from '../../contexts/OrderContext'

import { MapPin, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'

import {
  CheckoutContainer,
  CoffeeSelectedContainer,
  CoffeeSelectedContent,
  FormOfPayment,
  CompleteOrder,
  FormOrder,
  TotalItems,
  SelectCard,
  ItemValue,
  DeliveryValue,
  TotalPayable,
  ButtonConfirmOrder,
} from './styles'

import { CoffeCardSelected } from './components/CoffeCardSelected'
import { NavLink } from 'react-router-dom'

export const Checkout = () => {
  const {
    listCoffeSelected,
    totalValueOfItems,
    address,
    formOfPayment,
    handleSetAdress,
    handleSetFormOfPayment,
    checkEmptyFields,
  } = useContext(OrderContext)

  const totalItemPricePlusShipping = totalValueOfItems + 3.5
  const emptyFields = checkEmptyFields()

  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h3>Complete seu pedido</h3>
        <FormOrder>
          <div>
            <h6>
              <MapPin color="#C47F17" size={22} /> Endereço de Entrega
            </h6>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <form action="">
            <fieldset>
              <input
                className="field-cep"
                type="text"
                placeholder="CEP"
                required
                value={address.cep}
                onChange={(event) => handleSetAdress('cep', event.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                className="field-street"
                type="text"
                placeholder="Rua"
                required
                value={address.road}
                onChange={(event) =>
                  handleSetAdress('road', event.target.value)
                }
              />
            </fieldset>
            <fieldset>
              <input
                className="field-number"
                type="text"
                placeholder="Número"
                required
                value={address.number}
                onChange={(event) =>
                  handleSetAdress('number', event.target.value)
                }
              />
              <input
                className="field-complement"
                type="text"
                placeholder="Complemento"
                value={address.complement}
                onChange={(event) =>
                  handleSetAdress('complement', event.target.value)
                }
              />
            </fieldset>
            <fieldset>
              <input
                className="field-neighborhood"
                type="text"
                placeholder="Bairro"
                required
                value={address.neighborhood}
                onChange={(event) =>
                  handleSetAdress('neighborhood', event.target.value)
                }
              />
              <input
                className="field-city"
                type="text"
                placeholder="Cidade"
                required
                value={address.city}
                onChange={(event) =>
                  handleSetAdress('city', event.target.value)
                }
              />
              <input
                className="field-uf"
                type="text"
                placeholder="UF"
                maxLength={2}
                required
                value={address.uf}
                onChange={(event) => handleSetAdress('uf', event.target.value)}
              />
            </fieldset>
          </form>
        </FormOrder>

        <FormOfPayment>
          <div>
            <h6>
              <CurrencyDollar color="#8047F8" size={22} /> Pagamento
            </h6>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
          <SelectCard>
            <button
              className={formOfPayment === 'Cartão de Crédito' ? 'active' : ''}
              onClick={() => handleSetFormOfPayment('Cartão de Crédito')}
            >
              <CreditCard color="#8047F8" size={16} />
              Cartão de crédito
            </button>
            <button
              className={formOfPayment === 'Cartão de Débito' ? 'active' : ''}
              onClick={() => handleSetFormOfPayment('Cartão de Débito')}
            >
              <Bank color="#8047F8" size={16} />
              Cartão de débito
            </button>
            <button
              className={formOfPayment === 'Dinheiro' ? 'active' : ''}
              onClick={() => handleSetFormOfPayment('Dinheiro')}
            >
              <Money color="#8047F8" size={16} />
              Dinheiro
            </button>
          </SelectCard>
        </FormOfPayment>
      </CompleteOrder>

      <CoffeeSelectedContainer>
        <h3>Cafés selecionados</h3>
        <CoffeeSelectedContent>
          {listCoffeSelected.map((newCoffee) => {
            return (
              <CoffeCardSelected key={newCoffee.name} newCoffee={newCoffee} />
            )
          })}
          <TotalItems>
            <ItemValue>
              <p>Total de itens</p>
              <span>R$ {totalValueOfItems.toFixed(2)}</span>
            </ItemValue>
            <DeliveryValue>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </DeliveryValue>
            <TotalPayable>
              <p>Total</p>
              <span>R$ {totalItemPricePlusShipping.toFixed(2)}</span>
            </TotalPayable>
            <ButtonConfirmOrder
              disabled={emptyFields}
              onClick={checkEmptyFields}
            >
              <NavLink to={emptyFields ? '#' : '/success'}>
                Confirmar Pedido
              </NavLink>
            </ButtonConfirmOrder>
          </TotalItems>
        </CoffeeSelectedContent>
      </CoffeeSelectedContainer>
    </CheckoutContainer>
  )
}
