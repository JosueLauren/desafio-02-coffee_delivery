import styled from 'styled-components'

import Banner from './../../../../assets/Background-banner.svg'

export const BannerContainer = styled.div`
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
`

export const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90rem;
  padding: 5.9rem 10rem;
  margin: auto;
`

export const BannerInfo = styled.div`
  max-width: 36.75rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  h6 {
    font-size: 1.25rem;
    line-height: 1.625rem;
    margin-bottom: 4.125rem;
    margin-top: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      padding: 0.5rem;
      width: 2rem;
      height: 2rem;
      background: red;
      border-radius: 100%;

      &.icon-cart {
        background: ${(props) => props.theme['yellow-dark']};
      }

      &.icon-package {
        background: ${(props) => props.theme['base-text']};
      }

      &.icon-timer {
        background: ${(props) => props.theme.yellow};
      }

      &.icon-coffee {
        background: ${(props) => props.theme.purple};
      }
    }

    p {
      color: ${(props) => props.theme['base-text']};
    }
  }
`
