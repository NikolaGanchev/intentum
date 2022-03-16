import { useTranslation } from "react-i18next";
import { Theme } from "../utils/Theme";
import Modal from "./Modal";
import ThemePresenter from "./ThemePresenter";

interface ThemeSelectorProps {
    close: any;
    isShowing: boolean;
    themes?: Theme[];
    onSelect?: (theme: Theme) => any;
}

export default function ThemeSelector(props: ThemeSelectorProps) {
    const [t, _] = useTranslation("common");

    const onSelect = (value: Theme) => {
    }

    return <Modal heading={t("app.colorTheme")} close={() => { props.close() }} isShowing={props.isShowing}>
            {props.themes?.map((theme: Theme) => {
                return <ThemePresenter theme={theme}></ThemePresenter>
            })}
    </Modal>
} 