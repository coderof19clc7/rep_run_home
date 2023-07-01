import { createContext } from "react";

const AskSignInModalContext = createContext({
    isOpen: false,
    onOpen: () => {},
    onClose: () => {}
});

export default AskSignInModalContext;