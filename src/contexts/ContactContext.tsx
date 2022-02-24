import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

export type ContactProps = {
  id: string
  nome: string
  email: string
  telefone: string
  imagem: string
}

type ContactContextData = {
  contact: ContactProps[] | undefined
  createContact: (
    nome: string,
    telefone: string,
    email?: string,
    imagem?: string
  ) => unknown
  updateContact: (
    id: string,
    nome?: string,
    email?: string,
    telefone?: string,
    imagem?: string
  ) => unknown
  deleteContact: (id: string) => unknown
}

type ContactProvider = {
  children: ReactNode
}

export const ContactContext = createContext({} as ContactContextData)

export const ContactContextProvider = (props: ContactProvider) => {
  const [contact, setContact] = useState<ContactProps[]>()

  const handleGetData = async () => {
    const response = await axios.get('http://localhost:4000/get')

    const result = response.data
    console.log(response)
    setContact(result)
  }

  useEffect(() => {
    handleGetData()
  }, [])

  const createContact = async (
    nome: string,
    telefone: string,
    email?: string,
    imagem?: string
  ) => {
    try {
      const response = await axios.post('http://localhost:4000/create', {
        nome,
        email,
        telefone,
        imagem,
      })

      const result = response.data
      console.log(result)

      return result
    } catch (error: any) {
      console.log(error)
    }
  }

  const updateContact = async (
    id: string,
    nome?: string,
    email?: string,
    telefone?: string,
    imagem?: string
  ) => {
    try {
      const response = await axios.post('http://localhost:4000/update', {
        nome,
        email,
        telefone,
        imagem,
      })

      const result = response.data

      return result
    } catch (error: any) {
      console.log(error)
    }
  }

  const deleteContact = async (id: string) => {
    try {
      const response = await axios.post('http://localhost:4000/delete', { id })

      const result = response.data

      return result
    } catch (error: any) {
      return error.message
    }
  }

  return (
    <ContactContext.Provider
      value={{ contact, createContact, updateContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}
