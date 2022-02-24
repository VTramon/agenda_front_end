import ContactContainer from '../../ContacContainer'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <main>
      <ContactContainer />
    </main>
  )
}

export { Layout }
