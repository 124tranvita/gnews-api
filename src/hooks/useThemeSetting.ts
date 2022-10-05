import { useAppSelector, useAppDispatch } from "../app/hook";
import { setTheme } from "../features/globalSettings/globalSettingsSlice";

export function useThemeSetting() {
  const theme = useAppSelector((state) => state.globalSettings.theme);
  const dispatch = useAppDispatch();

  /** Store default theme to local storage if there is nothing here */
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", theme);
  }

  /** Store the new theme to the local storage */
  const changeTheme = (theme: string) => {
    dispatch(setTheme(theme));
    localStorage.setItem("theme", theme);
    window.location.reload();
  };

  /** Get the theme from local storage */
  const storageTheme = localStorage.getItem("theme");

  return { storageTheme, changeTheme };
}
