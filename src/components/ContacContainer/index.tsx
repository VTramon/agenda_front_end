import { useContext } from 'react'
import { ContactCard } from '../ContactCard'
import { ContactContext } from '../../contexts/ContactContext'
import { AddIcon } from '../Icons'

type ContactContainerProps = {
  addContact: () => void
  editContact: () => void
}

const ContactContainer: React.FC<ContactContainerProps> = ({
  addContact,
  editContact,
}) => {
  const { contact } = useContext(ContactContext)
  return (
    <section>
      <div>
        <h4>Adicionar contato</h4>
        <button style={{ width: '50px', height: '50px' }} onClick={addContact}>
          <AddIcon />
        </button>
      </div>
      {contact
        ? contact.map((item, index) => {
            return (
              <ContactCard
                openEditModal={editContact}
                card={item}
                key={index}
              />
            )
          })
        : undefined}
    </section>
  )
}

export default ContactContainer
