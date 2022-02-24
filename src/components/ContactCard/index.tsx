import { useContext } from 'react'
import { ContactContext } from '../../contexts/ContactContext'
import { EditIcon } from '../Icons'

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
    <li>
      <div>
        {!!props.card.imagem && (
          <img
            src={`https://github.com/${props.card.imagem}.png`}
            alt={`foto de perfil de ${props.card.imagem}`}
          />
        )}
        <h2>{props.card.nome}</h2>
        <address>{props.card.telefone}</address>
        {!!props.card.email && <address>{props.card.email}</address>}
      </div>
      <button
        style={{ width: '50px', height: '50px' }}
        onClick={() => {
          props.openEditModal()
          handleContactId(props.card.id)
        }}
      >
        <EditIcon />
      </button>
      <button onClick={() => deleteContact(props.card.id)}>X</button>
    </li>
  )
}

export { ContactCard }
