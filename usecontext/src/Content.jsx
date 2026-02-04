import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ padding: "20px" }}>
            <h2>{theme.toUpperCase()} THEME ACTIVE</h2>
            <p>
                To check theme change
            </p>
        </div>
    );
};

export default Content;
