import BackgroundBlur from './components/background_blur'
import MainView from './components/main_views/main_view'
import './App.css'
import { Modal, useDisclosure } from '@chakra-ui/react'
import ModalAskSignIn from './components/modals/modal_ask_sign_in'
import { useMemo } from 'react'
import AskSignInModalContext from './contexts/ask_sign_in_modal'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const askSignInModalContextValue = useMemo(() => ({
      isOpen,
      onOpen,
      onClose
  }), [isOpen, onOpen, onClose]);

  return (
    <AskSignInModalContext.Provider value={askSignInModalContextValue}>
      <div className='w-full h-full'>
        <BackgroundBlur/>
        <div className="headerDecor tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-h-[55px] md:tw-h-[80px] tw-z-[100] tw-backdrop-blur-[50px]"/>
        <MainView/>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalAskSignIn/>
      </Modal>
    </AskSignInModalContext.Provider>
  )
}

export default App
