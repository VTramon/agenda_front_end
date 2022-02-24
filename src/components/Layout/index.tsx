import { useState } from 'react'
import ContactContainer from '../ContacContainer'
import CreateContactModal from '../Modals/CreateContact'
import { UpdateContactModal } from '../Modals/UpdateContact'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  const [isCreatModalOpen, setIsCreatModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  return (
    <main>
      <ContactContainer
        editContact={() => setIsUpdateModalOpen(true)}
        addContact={() => setIsCreatModalOpen(true)}
      />
      <CreateContactModal
        handleIsOpen={() => setIsCreatModalOpen(false)}
        isOpen={isCreatModalOpen}
      />
      <UpdateContactModal
        handleIsOpen={() => setIsUpdateModalOpen(false)}
        isOpen={isUpdateModalOpen}
      />
    </main>
  )
}

export { Layout }
