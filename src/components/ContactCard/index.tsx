import { useContext } from 'react'
import { ContactContext } from '../../contexts/ContactContext'

type ContactCardProps = {
  card: {
    id: string
    nome: string
    email: string
    telefone: string
    imagem: string
  }
}

const ContactCard = (props: ContactCardProps) => {
  const { deleteContact } = useContext(ContactContext)

  return (
    <li>
      <div>
        <h2>{props.card.nome}</h2>
        <address>{props.card.telefone}</address>
        {!!props.card.email && <address>{props.card.email}</address>}

        {!!props.card.imagem && (
          <img src={props.card.imagem} alt="imagem do contato" />
        )}
      </div>
      <button onClick={() => deleteContact(props.card.id)}>X</button>
    </li>
  )
}

export { ContactCard }
