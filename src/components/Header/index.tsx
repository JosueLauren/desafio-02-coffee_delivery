import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { OrderContext } from '../../contexts/OrderContext'

import { ShoppingCartSimple, MapPin } from 'phosphor-react'

import { HeaderContainer } from './styles'

import Logo from './../../assets/Logo_coffe-delivery.svg'

export const Header = () => {
  const { numberOfCoffeesSelected } = useContext(OrderContext)

  const haveCoffeeSelected = numberOfCoffeesSelected > 0

  return (
    <HeaderContainer>
      <img src={Logo} alt="copo de café roxo" />
      <nav>
        <span>
          <MapPin weight="fill" size={22} color="#8047F8" />
          São Paulo, SP
        </span>
        <NavLink to={haveCoffeeSelected ? '/checkout' : '/'} title="checkout">
          <ShoppingCartSimple weight="fill" size={22} color="#C47F17" />
          {haveCoffeeSelected ? <span>{numberOfCoffeesSelected}</span> : ''}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
