import americano from './../../../assets/americano.svg'
import arabe from './../../../assets/arabe.svg'
import capuccino from './../../../assets/capuccino.svg'
import chocolate from './../../../assets/chocolate-quente.svg'
import comLeite from './../../../assets/com-leite.svg'
import cremoso from './../../../assets/cremoso.svg'
import cubano from './../../../assets/cubano.svg'
import gelado from './../../../assets/gelado.svg'
import havaiano from './../../../assets/havaiano.svg'
import irlandes from './../../../assets/irlandes.svg'
import latte from './../../../assets/latte.svg'
import macchiato from './../../../assets/macchiato.svg'
import mocaccino from './../../../assets/mocaccino.svg'
import tradicional from './../../../assets/tradicional.svg'

export interface ItemCoffeeType {
  nameImage: string
  type: string[]
  name: string
  description: string
  price: number
}

export const CoffeeList: ItemCoffeeType[] = [
  {
    nameImage: `${tradicional}`,
    type: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    nameImage: `${americano}`,
    type: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    nameImage: `${cremoso}`,
    type: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    nameImage: `${gelado}`,
    type: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    nameImage: `${comLeite}`,
    type: ['Tradicional', 'Com Leite'],
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    nameImage: `${latte}`,
    type: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    nameImage: `${capuccino}`,
    type: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    nameImage: `${macchiato}`,
    type: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    nameImage: `${mocaccino}`,
    type: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    nameImage: `${chocolate}`,
    type: ['Especial', 'Com Leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    nameImage: `${cubano}`,
    type: ['Especial', 'Alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    nameImage: `${havaiano}`,
    type: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    nameImage: `${arabe}`,
    type: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    nameImage: `${irlandes}`,
    type: ['Especial', 'alcoolico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
