import { useContext } from 'react'
import { ContactContext } from '../../contexts/ContactContext'
import { DeleteIcon, EditIcon } from '../Icons'
import styles from './index.module.scss'

type ContactCardProps = {
  openEditModal: () => void
  card: {
    id: string
    nome: string
    telefone: string
    email?: string
    imagem?: string
  }
}

const ContactCard = (props: ContactCardProps) => {
  const { deleteContact, handleContactId } = useContext(ContactContext)

  return (
    <li className={styles.card}>
      <div className={styles.card_data}>
        {!!props.card.imagem && (
          <img
            src={`https://github.com/${props.card.imagem}.png`}
            alt={`foto de perfil de ${props.card.imagem}`}
          />
        )}
        <div className={styles.card_data_container}>
          <h2>{props.card.nome}</h2>
          <address>{props.card.telefone}</address>
          {!!props.card.email && <address>{props.card.email}</address>}
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          style={{ width: '50px', height: '50px' }}
          onClick={() => {
            props.openEditModal()
            handleContactId(props.card.id)
          }}
        >
          <EditIcon />
        </button>
        <button onClick={() => deleteContact(props.card.id)}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  )
}

export { ContactCard }
