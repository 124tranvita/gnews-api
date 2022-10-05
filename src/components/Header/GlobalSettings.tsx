import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hook";

import { useTokenSetting } from "../../hooks/useTokenSetting";
import { useLangSetting } from "../../hooks/useLangSetting";
import { useThemeSetting } from "../../hooks/useThemeSetting";

import { MenuTransition } from "../../utils/Transition";
import { SelectMenu } from "../../utils/SelectMenu";

export function GlobalSettings() {
  const { storageToken, changeToken } = useTokenSetting();
  const { storageLang, changeLang } = useLangSetting();
  const { storageTheme, changeTheme } = useThemeSetting();

  const { toplineError, entertainmentError, businessError, travelError } =
    useAppSelector((state) => ({
      toplineError: state.toplineArticles.error,
      entertainmentError: state.entertainmentArticles.error,
      businessError: state.businessArticles.error,
      travelError: state.travelArticles.error,
    }));

  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (
      toplineError === "403" ||
      entertainmentError === "403" ||
      businessError === "403" ||
      travelError === "403"
    ) {
      return () => setError("Token has exceeded limit per day (403).");
    }

    if (
      toplineError === "429" ||
      entertainmentError === "429" ||
      businessError === "429" ||
      travelError === "429"
    ) {
      return () => setError("Request has exceeded limit per second (429).");
    }

    return () => setError("");
  }, [toplineError, entertainmentError, businessError, travelError]);

  return (
    <div className="relative">
      <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      </span>

      {/* Error notification */}
      <span
        className={`${
          error ? "visible" : "invisible"
        } absolute top-0 right-0 -translate-y-1 text-red-600 duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
      </span>

      {/* Setting Panel */}
      <MenuTransition isOpen={isOpen}>
        <div className="absolute top-7 right-0 z-50 w-64 p-4 rounded shadow bg-gray-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
          <div className="mb-3 border-b border-slate-400">
            {error && <p className="mb-2 text-sm text-rose-500">{error}</p>}
          </div>

          {/* Token settings */}
          <SelectMenu
            label="Select token"
            fn={changeToken}
            defaultValue={storageToken.id}
          >
            <option value="token#1">Token #1</option>
            <option value="token#2">Token #2</option>
            <option value="token#3">Token #3</option>
          </SelectMenu>

          {/* Language settings */}
          <SelectMenu
            label="Select language"
            fn={changeLang}
            defaultValue={storageLang ? storageLang : "en"}
          >
            <option value="en">English</option>
            <option value="ja">Japan</option>
            <option value="de">German</option>
          </SelectMenu>

          {/* Theme settings */}
          <SelectMenu
            label="Select theme"
            fn={changeTheme}
            defaultValue={storageTheme ? storageTheme : "light"}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </SelectMenu>
        </div>
      </MenuTransition>
    </div>
  );
}
