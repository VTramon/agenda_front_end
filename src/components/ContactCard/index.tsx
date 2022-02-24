type ContactCardProps = {
  card: {
    nome: string
    email: string
    telefone: string
    imagem: string
  }
}

const ContactCard = (props: ContactCardProps) => {
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
      <button>X</button>
    </li>
  )
}

export { ContactCard }
