import { useState } from 'react'
import ContactContainer from '../ContacContainer'
import CreateContactModal from '../CreateContactModal'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main>
      <ContactContainer addContact={() => setIsModalOpen(true)} />
      <CreateContactModal
        handleIsOpen={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </main>
  )
}

export { Layout }
