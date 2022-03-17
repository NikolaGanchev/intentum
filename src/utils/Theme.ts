const lightThemeObject: Theme = {
    main: "#efefef",
    secondary: "#000000",
    text: "#000000",
    textSecondary: "#FFFFFF",
    shadow: "rgba(0, 0, 0, 0.25)",
    pure: "#FFFFFF",
    tip: "#171ACB",
    warning: "#FEC349",
    error: "#FF000F",
    correct: "rgba(31, 196, 48, 0.75)",
    wrong: "rgba(255, 0, 15, 0.75)",
    correctFull: "rgb(31, 196, 48)",
    wrongFull: "rgb(255, 0, 15)",
    blur: "rgba(0, 0, 0, 0.50)",
    textOnDarkBackground: "#FFFFFF",
    textOnLightBackground: "#000000",
    id: "light"
};

const darkThemeObject: Theme = {
    main: "#000000",
    secondary: "#efefef",
    text: "#FFFFFF",
    textSecondary: "#000000",
    shadow: "rgba(256, 256, 256, 0.25)",
    pure: "#000000",
    tip: "#171ACB",
    warning: "#FEC349",
    error: "#FF000F",
    correct: "rgba(31, 196, 48, 0.75)",
    wrong: "rgba(255, 0, 15, 0.75)",
    correctFull: "rgb(31, 196, 48)",
    wrongFull: "rgb(255, 0, 15)",
    blur: "rgba(256, 256, 256, 0.50)",
    textOnDarkBackground: "#FFFFFF",
    textOnLightBackground: "#000000",
    id: "dark"
};

export interface Theme {
    main: string,
    secondary: string,
    text: string,
    textSecondary: string,
    shadow: string,
    pure: string,
    tip: string,
    warning: string,
    error: string,
    correct: string,
    wrong: string,
    correctFull: string,
    wrongFull: string,
    blur: string,
    textOnDarkBackground: string,
    textOnLightBackground: string,
    id?: string,
    name?: string;
}

export enum ThemeColors {
    Main = 1,
    Secondary,
    Text,
    TextSecondary,
    Shadow,
    Pure,
    Tip,
    Warning,
    Error,
    Correct,
    Wrong,
    CorrectFull,
    WrongFull,
    Blur,
    TextOnDarkBackground,
    TextOnLightBackground,
    ID,
    Name
}

export const themeToMap = (theme: Theme) => {
    const map = new Map<ThemeColors, string>(
        [[ThemeColors.Main, theme.main],
        [ThemeColors.Secondary, theme.secondary],
        [ThemeColors.Text, theme.text],
        [ThemeColors.TextSecondary, theme.textSecondary],
        [ThemeColors.Shadow, theme.shadow],
        [ThemeColors.Pure, theme.pure],
        [ThemeColors.Tip, theme.tip],
        [ThemeColors.Warning, theme.warning],
        [ThemeColors.Error, theme.error],
        [ThemeColors.Correct, theme.correct],
        [ThemeColors.Wrong, theme.wrong],
        [ThemeColors.CorrectFull, theme.correctFull],
        [ThemeColors.WrongFull, theme.wrongFull],
        [ThemeColors.Blur, theme.blur],
        [ThemeColors.TextOnDarkBackground, theme.textOnDarkBackground],
        [ThemeColors.TextOnLightBackground, theme.textOnLightBackground]]
    )

    if (theme.id) {
        map.set(ThemeColors.ID, theme.id);
    }

    if (theme.name) {
        map.set(ThemeColors.Name, theme.name);
    }

    return map;
}

export const mapToTheme = (map: Map<ThemeColors, string>) => {
    const theme: Theme = {
        main: map.get(ThemeColors.Main)!,
        secondary: map.get(ThemeColors.Secondary)!,
        text:  map.get(ThemeColors.Text)!,
        textSecondary: map.get(ThemeColors.TextSecondary)!,
        shadow: map.get(ThemeColors.Shadow)!,
        pure: map.get(ThemeColors.Pure)!,
        tip: map.get(ThemeColors.Tip)!,
        warning: map.get(ThemeColors.Warning)!,
        error: map.get(ThemeColors.Error)!,
        correct: map.get(ThemeColors.Correct)!,
        wrong: map.get(ThemeColors.Wrong)!,
        correctFull: map.get(ThemeColors.CorrectFull)!,
        wrongFull: map.get(ThemeColors.WrongFull)!,
        blur: map.get(ThemeColors.Blur)!,
        textOnDarkBackground: map.get(ThemeColors.TextOnDarkBackground)!,
        textOnLightBackground: map.get(ThemeColors.TextOnLightBackground)!,
        id: map.get(ThemeColors.ID),
        name: map.get(ThemeColors.Name)
    }

    return theme;
}

export const HiddenColors = {
    transparent: "rgba(0, 0, 0, 0)"
}

const Themes = {
    darkTheme: "dark",
    lightTheme: "light"
}

export enum ColorType {
    Light,
    Dark
}

export class RGBColor {
    red: number;
    green: number;
    blue: number;
    
    constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}

export const determineColorBasedOnLuminosity = (backgroundColor: string) => {
    const color: RGBColor = rgbFromHex(backgroundColor);
    // calculate luminocity
    const luminosity = 0.2126*color.red + 0.7152*color.green + 0.0722*color.blue;
    // return color based on luminosity
    return luminosity > 128 ? ColorType.Light: ColorType.Dark;
}

export const rgbFromHex = (color: string) => {
    const hexWithoutFirstSymbol = color.replace("#", "");
    const int = parseInt(hexWithoutFirstSymbol, 16);
    const red = (int >> 16) & 255;
    const green = (int >> 8) & 255;
    const blue = int & 255;

    return new RGBColor(red, green, blue);
}

export { lightThemeObject, darkThemeObject, Themes };