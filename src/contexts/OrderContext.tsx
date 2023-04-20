import { ReactNode, createContext, useEffect, useState } from 'react'

interface OrderContextProviderProps {
  children: ReactNode
}

export interface CoffeeSelectedType {
  imageCoffe: string
  name: string
  price: number
  amount: number
}

interface AddressType {
  cep: string
  road: string
  number: string
  complement: string
  neighborhood: string
  city: string
  uf: string
}

interface OrderContextType {
  insertNewCoffee: (newCaffe: CoffeeSelectedType) => void
  numberOfCoffeesSelected: number
  totalValueOfItems: number
  listCoffeSelected: CoffeeSelectedType[]
  increaseQuantity: (coffeeName: string) => void
  decreaseAmount: (coffeeName: string) => void
  removeSelectedItem: (coffeeName: string) => void
  handleSetAdress: (field: string, valueField: string) => void
  handleSetFormOfPayment: (valueButton: string) => void
  checkEmptyFields: () => boolean
  resetListCoffeSelected: () => void
  formOfPayment: string
  address: AddressType
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [address, setAdress] = useState<AddressType>(() => {
    const addressJSON = sessionStorage.getItem(
      '@coffee-delivery:address-state-1.0.1',
    )

    if (addressJSON) {
      return JSON.parse(addressJSON)
    }

    return {
      cep: '',
      road: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
    }
  })
  const [formOfPayment, setFormOfPayment] = useState(() => {
    const forOfPaymentJSON = sessionStorage.getItem(
      '@coffee-delivery:formOfPayment-state-1.0.1',
    )

    if (forOfPaymentJSON) {
      return JSON.parse(forOfPaymentJSON)
    }

    return ''
  })

  const [listCoffeSelected, setListCoffeSelected] = useState<
    CoffeeSelectedType[]
  >(() => {
    const listCoffeSelectedJSON = sessionStorage.getItem(
      '@coffee-delivery:listCoffeSelected-state-1.0.1',
    )

    if (listCoffeSelectedJSON) {
      return JSON.parse(listCoffeSelectedJSON)
    }

    return []
  })

  useEffect(() => {
    const addressJSON = JSON.stringify(address)

    sessionStorage.setItem('@coffee-delivery:address-state-1.0.1', addressJSON)
  }, [address])

  useEffect(() => {
    const formOfPaymentJSON = JSON.stringify(formOfPayment)

    sessionStorage.setItem(
      '@coffee-delivery:formOfPayment-state-1.0.1',
      formOfPaymentJSON,
    )
  }, [formOfPayment])

  useEffect(() => {
    const lisCoffeSelectedJSON = JSON.stringify(listCoffeSelected)

    sessionStorage.setItem(
      '@coffee-delivery:listCoffeSelected-state-1.0.1',
      lisCoffeSelectedJSON,
    )
  }, [listCoffeSelected])

  function checkEmptyFields() {
    const isEmptyField = Object.values(address).some(
      (value) => value.trim() === '',
    )

    const isEmptyFormOfPayment = formOfPayment.trim() === ''

    const isEmptyItemList = listCoffeSelected.length === 0

    return isEmptyField || isEmptyFormOfPayment || isEmptyItemList
  }

  function handleSetFormOfPayment(valueButton: string) {
    setFormOfPayment(valueButton)
  }

  function handleSetAdress(field: string, valueField: string) {
    setAdress({
      ...address,
      [field]: valueField,
    })
  }

  function insertNewCoffee(newCoffee: CoffeeSelectedType) {
    const isCoffeeOnTheList = listCoffeSelected.find((coffe) => {
      return coffe.name === newCoffee.name
    })

    if (!isCoffeeOnTheList) {
      const newListCoffe = [...listCoffeSelected, newCoffee]

      setListCoffeSelected(newListCoffe)
    }
  }

  function increaseQuantity(nameCoffe: string) {
    setListCoffeSelected(
      listCoffeSelected.map((coffee) => {
        if (coffee.name === nameCoffe) {
          coffee.amount += 1
        }

        return coffee
      }),
    )
  }

  function decreaseAmount(nameCoffe: string) {
    setListCoffeSelected(
      listCoffeSelected.map((coffee) => {
        if (coffee.name === nameCoffe) {
          if (coffee.amount > 1) {
            coffee.amount -= 1
          }
        }

        return coffee
      }),
    )
  }

  function removeSelectedItem(nameCoffe: string) {
    const newList = listCoffeSelected.filter((coffee) => {
      return coffee.name !== nameCoffe
    })

    setListCoffeSelected(newList)
  }

  function resetListCoffeSelected() {
    setListCoffeSelected([])
  }

  const numberOfCoffeesSelected = listCoffeSelected.length
  const totalValueOfItems = listCoffeSelected.reduce((total, coffee) => {
    total += coffee.amount * coffee.price

    return total
  }, 0)

  return (
    <OrderContext.Provider
      value={{
        numberOfCoffeesSelected,
        listCoffeSelected,
        totalValueOfItems,
        address,
        formOfPayment,
        increaseQuantity,
        decreaseAmount,
        removeSelectedItem,
        handleSetAdress,
        insertNewCoffee,
        handleSetFormOfPayment,
        checkEmptyFields,
        resetListCoffeSelected,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
