import { useState } from 'react'
import { useContext } from 'react'
import { ContactContext } from '../../../contexts/ContactContext'
import styles from './index.module.scss'

const CreateContactModal = () => {
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
    <form
      className={styles.form}
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

      {/* A imagem do github será usada a partir do ususário */}
      <input
        onChange={(e) => setImagem(e.target.value)}
        placeholder="digite seu username do GitHub"
        type="text"
        name="image"
      />

      <button type="submit">submit</button>
    </form>
  )
}

export default CreateContactModal
