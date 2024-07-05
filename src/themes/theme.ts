export interface Theme {
    colors: {
        black: string;
        white: string;
        primary: string;
        secondary: string;
        accent: string;
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
    },
    fonts: {
        body: "Arial, sans-serif",
        heading: "Helvetica, sans-serif",
    },
}