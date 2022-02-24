import { CloseIcon } from '../Icons'
import styles from './index.module.scss'

type ModalProps = {
  isOpen: boolean
  handleIsOpen: () => void
}

const Modal: React.FC<ModalProps> = ({ handleIsOpen, isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.background}>
          <section className={styles.modal}>
            <button
              onClick={handleIsOpen}
              style={{ width: '50px', height: '50px' }}
            >
              <CloseIcon />
            </button>
            {children}
          </section>
        </div>
      )}
    </>
  )
}

export { Modal }
