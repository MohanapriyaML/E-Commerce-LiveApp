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
    },
    fonts: {
        body: "Arial, sans-serif",
        heading: "Helvetica, sans-serif",
    },
}