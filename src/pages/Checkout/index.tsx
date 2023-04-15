import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
  Plus,
  Minus,
  Trash,
} from 'phosphor-react'

import tradicional from './../../assets/tradicional.svg'

import {
  CheckoutContainer,
  CoffeeSelectedContainer,
  CoffeeSelectedContent,
  FormOfPayment,
  CompleteOrder,
  FormOrder,
  TotalItems,
  SelectCard,
  CoffeeCard,
  Actions,
  ButtonRemove,
  ItemValue,
  DeliveryValue,
  TotalPayable,
  ButtonConfirmOrder,
} from './styles'

import {
  CounterButtons,
  CounterButtonLess,
  CounterButtonMore,
} from './../../components/CounterButtons/styles'

export const Checkout = () => {
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
              <input className="field-cep" type="text" placeholder="CEP" />
            </fieldset>
            <fieldset>
              <input className="field-street" type="text" placeholder="Rua" />
            </fieldset>
            <fieldset>
              <input
                className="field-number"
                type="text"
                placeholder="Número"
              />
              <input
                className="field-complement"
                type="text"
                placeholder="Complemento"
              />
            </fieldset>
            <fieldset>
              <input
                className="field-neighborhood"
                type="text"
                placeholder="Bairro"
              />
              <input className="field-city" type="text" placeholder="Cidade" />
              <input className="field-uf" type="text" placeholder="UF" />
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
            <button>
              <CreditCard color="#8047F8" size={16} />
              Cartão de crédito
            </button>
            <button>
              <Bank color="#8047F8" size={16} />
              Cartão de débito
            </button>
            <button>
              <Money color="#8047F8" size={16} />
              Dinheiro
            </button>
          </SelectCard>
        </FormOfPayment>
      </CompleteOrder>

      <CoffeeSelectedContainer>
        <h3>Cafés selecionados</h3>
        <CoffeeSelectedContent>
          <CoffeeCard>
            <img src={tradicional} alt="" width="64px" height="64px" />
            <div>
              <p>Expresso Tradicional</p>
              <Actions>
                <CounterButtons>
                  <CounterButtonLess>
                    <Minus weight="bold" />
                  </CounterButtonLess>
                  <span>1</span>
                  <CounterButtonMore>
                    <Plus weight="bold" />
                  </CounterButtonMore>
                </CounterButtons>
                <ButtonRemove>
                  <Trash color="#8047F8" size={16} /> Remover
                </ButtonRemove>
              </Actions>
            </div>
            <span>RS 9,99</span>
          </CoffeeCard>
          <TotalItems>
            <ItemValue>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </ItemValue>
            <DeliveryValue>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </DeliveryValue>
            <TotalPayable>
              <p>Total</p>
              <span>R$ 33,20</span>
            </TotalPayable>
            <ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder>
          </TotalItems>
        </CoffeeSelectedContent>
      </CoffeeSelectedContainer>
    </CheckoutContainer>
  )
}
