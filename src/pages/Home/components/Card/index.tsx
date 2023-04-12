import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import {
  CardContainer,
  Actions,
  CounterButtons,
  CounterButtonLess,
  CounterButtonMore,
} from './styles'

import { ItemCoffeeType } from './../../mock/CoffeeList'

interface CardProps {
  ItemCoffeeType: ItemCoffeeType
}

export const Card = ({ ItemCoffeeType }: CardProps) => {
  const { nameImage, name, description, type, price } = ItemCoffeeType
  const formatedPrice = `${price.toLocaleString('pt-br')}0`

  return (
    <CardContainer>
      <img src={`/src/assets/${nameImage}`} alt="" />
      <div className="type-coffe">
        {type.map((item) => (
          <span key={item.length}>{item}</span>
        ))}
      </div>
      <h6>{name}</h6>
      <p>{description}</p>
      <Actions>
        <span> {formatedPrice}</span>
        <CounterButtons>
          <CounterButtonLess>
            <Minus weight="bold" />
          </CounterButtonLess>
          <span>1</span>
          <CounterButtonMore>
            <Plus weight="bold" />
          </CounterButtonMore>
        </CounterButtons>
        <button>
          <ShoppingCart color="#fff" size={22} weight="fill" />
        </button>
      </Actions>
    </CardContainer>
  )
}
