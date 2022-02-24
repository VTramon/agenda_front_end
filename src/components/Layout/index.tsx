import { useState } from 'react'
import ContactContainer from '../ContacContainer'
import { Modal } from '../Modals'
import CreateContactModal from '../Modals/CreateContact'
import { UpdateContactModal } from '../Modals/UpdateContact'
import styles from './index.module.scss'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [whichModal, setWhichModal] = useState<'create' | 'update'>()
  return (
    <main className={styles.layout}>
      <ContactContainer
        editContact={() => {
          setWhichModal('update')
          setIsOpen(true)
        }}
        addContact={() => {
          setWhichModal('create')
          setIsOpen(true)
        }}
      />
      <Modal
        handleIsOpen={() => {
          setIsOpen(false)
        }}
        isOpen={isOpen}
      >
        {whichModal === 'create' ? (
          <CreateContactModal />
        ) : (
          <UpdateContactModal />
        )}
      </Modal>
    </main>
  )
}

export { Layout }
