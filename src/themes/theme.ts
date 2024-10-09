export interface Theme {
    colors: {
        black: string;
        white: string;
        primary: string;
        secondary: string;
        accent: string;
        lightgrey:string;
        blue:string;
        darkpink:string,
        babypink:string;
        sandle:string;
        pink:string;
        lightwhite:string;
        lightblack:string;
        grey:string;
        mediumgray:string;
        darkgrey:string;
        lightpink:string;
        brown:string;
    };
    fonts: {
        body: string;
        heading: string;
    };
}

export const theme: Theme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        accent: "#ffc107",
        white: "#fff",
        black: "#000",
        lightgrey:"#9F9F9F",
        blue:"#2EC1AC",
        darkpink:"#E97171",
        babypink:"#FFF3E3",
        sandle:"#B88E2F",
        pink:"#fcf8f3",
        lightwhite:"#FFFFFFB8",
        lightblack:"#3A3A3A80",
        grey:"#ddd",
        mediumgray:"#898989",
        darkgrey:"#616161",
        lightpink:"#F9F1E7",
        brown:"#B88E2F"
    },
    fonts: {
        body: "Arial, sans-serif",
        heading: "Helvetica, sans-serif",
    },
}