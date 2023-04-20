import { useContext, useEffect, useState } from 'react'

import {
  OrderContext,
  CoffeeSelectedType,
} from './../../../../contexts/OrderContext'

import { Plus, Minus, Trash } from 'phosphor-react'

import { CoffeeCard, Actions, ButtonRemove } from './styles'

import {
  CounterButtons,
  CounterButtonLess,
  CounterButtonMore,
} from './../../../../components/CounterButtons/styles'

interface CoffeCardSelectedProps {
  newCoffee: CoffeeSelectedType
}

export const CoffeCardSelected = ({ newCoffee }: CoffeCardSelectedProps) => {
  const { increaseQuantity, decreaseAmount, removeSelectedItem } =
    useContext(OrderContext)

  const totalValueOfTheItem = newCoffee.amount * newCoffee.price

  return (
    <CoffeeCard>
      <img
        src={`/src/assets/${newCoffee.imageCoffe}`}
        alt=""
        width="64px"
        height="64px"
      />
      <div>
        <p>{newCoffee.name}</p>
        <Actions>
          <CounterButtons>
            <CounterButtonLess onClick={() => decreaseAmount(newCoffee.name)}>
              <Minus weight="bold" />
            </CounterButtonLess>
            <span>{newCoffee.amount}</span>
            <CounterButtonMore onClick={() => increaseQuantity(newCoffee.name)}>
              <Plus weight="bold" />
            </CounterButtonMore>
          </CounterButtons>
          <ButtonRemove onClick={() => removeSelectedItem(newCoffee.name)}>
            <Trash color="#8047F8" size={16} /> Remover
          </ButtonRemove>
        </Actions>
      </div>
      <span>
        RS{' '}
        {totalValueOfTheItem.toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })}
      </span>
    </CoffeeCard>
  )
}
