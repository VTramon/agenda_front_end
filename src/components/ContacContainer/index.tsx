import { useContext } from 'react'
import { ContactCard } from '../ContactCard'
import { ContactContext } from '../../contexts/ContactContext'

const ContactContainer = () => {
  const { contact } = useContext(ContactContext)
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
