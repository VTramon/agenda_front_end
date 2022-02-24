import axios from 'axios'
import { useState, useEffect } from 'react'
import { ContactCard } from '../components/ContactCard'

type ContactContainerProps = {}
type ContactProps = {
  nome: string
  email: string
  telefone: string
  imagem: string
}

const ContactContainer = (props: ContactContainerProps) => {
  const [contact, setContact] = useState<ContactProps[]>()

  const handleFetchData = async () => {
    const response = await axios.get('http://localhost:4000/get')

    const result = response.data
    console.log(response)
    setContact(result)
  }

  useEffect(() => {
    handleFetchData()
  }, [])
  return (
    <section>
      {contact
        ? contact.map((item, index) => {
            return <ContactCard card={item} key={index} />
          })
        : undefined}
    </section>
  )
}

export default ContactContainer
