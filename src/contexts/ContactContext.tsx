import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

export type ContactProps = {
  id: string
  nome: string
  telefone: string
  email?: string
  imagem?: string
}

export type UpdateContactProps = {
  nome?: string
  telefone?: string
  email?: string
  imagem?: string
}

type ContactContextData = {
  contact: ContactProps[] | undefined
  contactId: string
  handleContactId: (id: string) => void
  createContact: (
    nome: string,
    telefone: string,
    email?: string,
    imagem?: string
  ) => unknown
  updateContact: (values: UpdateContactProps) => void
  deleteContact: (id: string) => unknown
}

type ContactProvider = {
  children: ReactNode
}

export const ContactContext = createContext({} as ContactContextData)

export const ContactContextProvider = (props: ContactProvider) => {
  const [contactId, setContactId] = useState<string>('')
  const [contact, setContact] = useState<ContactProps[]>()

  const handleGetData = async () => {
    const response = await axios.get('http://localhost:4000/get')

    const result = response.data
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
        nome: nome,
        telefone: telefone,
        email: email,
        imagem: imagem,
      })

      const result = response.data

      return result
    } catch (error: any) {
      return error
    }
  }

  const updateContact = async (values: UpdateContactProps) => {
    const { nome, telefone, email, imagem } = values

    const response = await axios
      .post('http://localhost:4000/update', {
        id: contactId,
        nome,
        telefone,
        email,
        imagem,
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        return error
      })

    return response
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

  const handleContactId = (id: string) => {
    setContactId(id)
  }

  return (
    <ContactContext.Provider
      value={{
        contact,
        contactId,
        handleContactId,
        createContact,
        updateContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}
