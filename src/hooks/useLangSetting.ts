import { useAppSelector, useAppDispatch } from "../app/hook";
import { setLang } from "../features/globalSettings/globalSettingsSlice";

export function useLangSetting() {
  const lang = useAppSelector((state) => state.globalSettings.lang);
  const dispatch = useAppDispatch();

  /** Store default lang to local storage if there is nothing here */
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", lang);
  }

  /** Store the new lang to the local storage */
  const changeLang = (lang: string) => {
    dispatch(setLang(lang));
    localStorage.setItem("lang", lang);
  };

  /** Get the lang from local storage */
  const storageLang = localStorage.getItem("lang");

  return { storageLang, changeLang };
}
