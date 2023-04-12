import styled from 'styled-components'

export const HomeContainer = styled.main``

export const CardsContainer = styled.div`
  max-width: 90rem;
  margin: 2rem auto;
  padding: 2rem 10rem;

  h1 {
    margin-bottom: 3.375rem;
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ListCards = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  gap: 1.5rem;
`
