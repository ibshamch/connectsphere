import { useContext } from "react";
import ThemeContext from "../context/theme";

function useThemeContext() {
    return useContext(ThemeContext)
}
export default useThemeContext