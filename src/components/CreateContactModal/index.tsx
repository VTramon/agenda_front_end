import { useState } from 'react'
import { useContext } from 'react'
import { ContactContext } from '../../contexts/ContactContext'
import { CloseIcon } from '../Icons'

type CreateContactModalProps = {}

const CreateContactModal: React.FC<CreateContactModalProps> = (props) => {
  const [nome, setNome] = useState<string>()
  const [telefone, setTelefone] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [imagem, setImagem] = useState<string>()

  const { createContact } = useContext(ContactContext)

  const handleCreateContact = () => {
    if (nome && telefone) {
      return createContact(nome, telefone, email, imagem)
    }
  }

  return (
    <div>
      <section>
        <div>{/* <CloseIcon /> */}</div>
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault()
            handleCreateContact()
          }}
        >
          <input
            onChange={(e) => setNome(e.target.value)}
            placeholder="digite seu nome"
            type="text"
            name="name"
          />
          <input
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="digite seu numero de celular"
            type="tel"
            name="cel"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="digite seu email"
            type="email"
            name="email"
          />
          <input
            onChange={(e) => setImagem(e.target.value)}
            placeholder="digite seu username do GitHub"
            type="text"
            name="image"
          />

          <button type="submit">submit</button>
        </form>
      </section>
    </div>
  )
}

export default CreateContactModal
