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