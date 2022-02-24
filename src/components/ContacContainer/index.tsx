import { useContext } from 'react'
import { ContactCard } from '../ContactCard'
import { ContactContext } from '../../contexts/ContactContext'
import { AddIcon } from '../Icons'
import styles from './index.module.scss'

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
    <section className={styles.outter_container}>
      <div className={styles.container}>
        <div className={styles.add_button}>
          <h4>Adicionar contato</h4>
          <button
            style={{ width: '50px', height: '50px' }}
            onClick={addContact}
          >
            <AddIcon />
          </button>
        </div>

        <ol className={styles.cards}>
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
        </ol>
      </div>
    </section>
  )
}

export default ContactContainer
