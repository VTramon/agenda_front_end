import { useState } from 'react'
import { useContext } from 'react'
import styles from './index.module.scss'
import {
  ContactContext,
  UpdateContactProps,
} from '../../../contexts/ContactContext'

const UpdateContactModal = () => {
  const [contato, setContato] = useState<UpdateContactProps>({})

  const { updateContact } = useContext(ContactContext)

  return (
    <form
      className={styles.form}
      method="post"
      onSubmit={(e) => {
        e.preventDefault()
        updateContact(contato)
      }}
    >
      <input
        onSubmit={() => {
          if (contato.nome === '') {
            setContato({ ...contato, nome: undefined })
          }
        }}
        onChange={(e) => {
          setContato({ ...contato, nome: e.target.value })
        }}
        placeholder="nome atualizado"
        type="text"
        name="name"
      />
      <input
        onSubmit={() => {
          if (contato.telefone === '') {
            setContato({ ...contato, telefone: undefined })
          }
        }}
        onChange={(e) => {
          setContato({ ...contato, telefone: e.target.value })
        }}
        placeholder="numero atualizado"
        type="tel"
        name="cel"
      />
      <input
        onSubmit={() => {
          if (contato.email === '') {
            setContato({ ...contato, email: undefined })
          }
        }}
        onChange={(e) => {
          setContato({ ...contato, email: e.target.value })
        }}
        placeholder="email atualizado"
        type="email"
        name="email"
      />

      {/* A imagem do github será usada a partir do ususário */}
      <input
        onSubmit={() => {
          if (contato.imagem === '') {
            setContato({ ...contato, imagem: undefined })
          }
        }}
        onChange={(e) => {
          setContato({ ...contato, imagem: e.target.value })
        }}
        placeholder="username atualizado"
        type="text"
        name="image"
      />

      <button type="submit">submit</button>
    </form>
  )
}

export { UpdateContactModal }
