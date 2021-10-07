import {useEffect} from "react";
import {useHistory} from "react-router-dom";

// This component handles pathing in a modal
export default function ModalHelper(props: any) {
    const history = useHistory();

    useEffect(() => {
        history.push("/modal");

        return () => {
            history.goBack();
        }
    }, []);

    return <div></div>
}