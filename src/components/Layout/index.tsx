import ContactContainer from '../ContacContainer'
import CreateContactModal from '../CreateContactModal'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <main>
      {/* <ContactContainer /> */}
      <CreateContactModal />
    </main>
  )
}

export { Layout }
