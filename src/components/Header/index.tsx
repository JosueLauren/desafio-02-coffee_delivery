import { ShoppingCartSimple, MapPin } from 'phosphor-react'

import { HeaderContainer } from './styles'

import Logo from './../../assets/Logo_coffe-delivery.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="copo de café roxo" />
      <nav>
        <span>
          <MapPin weight="fill" size={22} color="#8047F8" />
          São Paulo, SP
        </span>
        <a href="#">
          <ShoppingCartSimple weight="fill" size={22} color="#C47F17" />
          <span>3</span>
        </a>
      </nav>
    </HeaderContainer>
  )
}
