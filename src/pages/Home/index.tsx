import { Banner } from './components/Banner'
import { Card } from './components/Card'
import { CardsContainer, HomeContainer, ListCards } from './styles'

import { CoffeeList } from './mock/CoffeeList'

export const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <CardsContainer>
        <h1>Nossos cafés</h1>
        <ListCards>
          {CoffeeList.map((item) => {
            return <Card ItemCoffeeType={item} key={item.description} />
          })}
        </ListCards>
      </CardsContainer>
    </HomeContainer>
  )
}
