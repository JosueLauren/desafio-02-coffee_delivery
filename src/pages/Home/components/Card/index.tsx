import { useState, useContext } from 'react'

import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import { CardContainer, Actions } from './styles'

import {
  CounterButtons,
  CounterButtonLess,
  CounterButtonMore,
} from '../../../../components/CounterButtons/styles'

import { ItemCoffeeType } from './../../mock/CoffeeList'

import {
  OrderContext,
  CoffeeSelectedType,
} from '../../../../contexts/OrderContext'

interface CardProps {
  ItemCoffeeType: ItemCoffeeType
}

export const Card = ({ ItemCoffeeType }: CardProps) => {
  const [amountOfCoffee, setAmountOfCoffee] = useState(1)

  const { insertNewCoffee } = useContext(OrderContext)

  const { nameImage, name, description, type, price } = ItemCoffeeType
  const formatedPrice = `${price.toLocaleString('pt-br')}0`

  const newCoffeSelected: CoffeeSelectedType = {
    amount: amountOfCoffee,
    imageCoffe: nameImage,
    name,
    price,
  }

  function handleIncreaseQuantity() {
    setAmountOfCoffee(amountOfCoffee + 1)
  }

  function handleDecreaseAmount() {
    amountOfCoffee === 1
      ? setAmountOfCoffee(1)
      : setAmountOfCoffee(amountOfCoffee - 1)
  }

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
            <Minus weight="bold" onClick={handleDecreaseAmount} />
          </CounterButtonLess>
          <span>{amountOfCoffee}</span>
          <CounterButtonMore>
            <Plus weight="bold" onClick={handleIncreaseQuantity} />
          </CounterButtonMore>
        </CounterButtons>
        <button onClick={() => insertNewCoffee(newCoffeSelected)}>
          <ShoppingCart color="#fff" size={22} weight="fill" />
        </button>
      </Actions>
    </CardContainer>
  )
}
