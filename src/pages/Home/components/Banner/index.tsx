import { ShoppingCartSimple, Timer, Package, Coffee } from 'phosphor-react'

import { BannerContainer, BannerContent, BannerInfo, Intro } from './styles'

import ImageBanner from './../../../../assets/Imagem_pricipal_home.svg'

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h6>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h6>
          <Intro>
            <div>
              <span className="icon-cart">
                <ShoppingCartSimple size={16} color="#fff" weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <span className="icon-package">
                <Package size={16} color="#fff" weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <span className="icon-timer">
                <Timer size={16} color="#fff" weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <span className="icon-coffee">
                <Coffee size={16} color="#fff" weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </Intro>
        </BannerInfo>
        <img src={ImageBanner} alt="copo de café com grãos de café" />
      </BannerContent>
    </BannerContainer>
  )
}
