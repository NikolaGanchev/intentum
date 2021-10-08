import React, {useRef} from "react";
import ModalStack from "../utils/ModalStack";

const ModalStackContext = React.createContext<React.MutableRefObject<ModalStack>>({current: new ModalStack()});

function ModalStackProvider({children}: any) {
    const modalStack = useRef(new ModalStack());

    return <ModalStackContext.Provider value={modalStack}>{children}</ModalStackContext.Provider>
}

export { ModalStackContext, ModalStackProvider };
