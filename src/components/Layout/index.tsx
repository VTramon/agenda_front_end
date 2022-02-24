import axios from 'axios'
import { useState, useEffect } from 'react'
import { ContactCard } from '../ContactCard'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  type ContactProps = {
    nome: string
    email: string
    telefone: string
    imagem: string
  }

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
    <main>
      {contact
        ? contact.map((item, index) => {
            return <ContactCard card={item} key={index} />
          })
        : undefined}
    </main>
  )
}

export { Layout }
