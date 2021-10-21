import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ModalStackContext } from "./ModalStackContext";
import { getModalPath } from "../utils/ModalStack";

interface ModalHelperProps {
    id: string;
}


// This component handles pathing in a modal
export default function ModalHelper(props: ModalHelperProps) {
    const history = useHistory();
    const modalStack = useContext(ModalStackContext);

    useEffect(() => {
        modalStack.current.push(props.id);
        history.push(getModalPath());

        return () => {
            /*
            * This is pretty much an ugly hack
            * Usually, when you go back in the unmount of a modal, you trigger every other modal's back trigger
            * That means all open modals try to close,
            * including ones behind the current one
            * modalStack is supposed to deal with that problem
            * but because of all the pop events firing there can be timing issues
            * like the stack popping just a little bit before the modal behind the current one gets its pop event
            * thus causing it to think it is the uppermost modal and causing it to destroy itself
            * and so on
            * So, here, before I call goBack()
            * I register a history listener in this component
            * When it gets to it, the component starts a 0 timeout
            * causing the code inside it to go to the back of the event loop
            * there, it waits for all the other pop events to finish
            * Then, it checks if it is even in the modal that has just closed
            * and it that's true, it pops the stack
            * */
            history.listen(listener => {
                if (history.action === "POP") {
                    setTimeout(() => {
                        if (modalStack.current.peek() === props.id) {
                            modalStack.current.pop();
                        }
                    }, 0)
                }
            })
            history.goBack();
        }
    }, []);

    return <div></div>
}