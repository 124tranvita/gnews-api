import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import {
  setToken,
  setLang,
} from "../../features/globalSettings/globalSettingsSlice";

import { MenuTransition } from "../../utils/Transition";

export function GlobalSettings() {
  const dispatch = useAppDispatch();
  const { toplineError, entertainmentError, businessError, travelError } =
    useAppSelector((state) => ({
      toplineError: state.toplineArticles.error,
      entertainmentError: state.entertainmentArticles.error,
      businessError: state.businessArticles.error,
      travelError: state.travelArticles.error,
    }));

  const { token, lang } = useAppSelector((state) => ({
    token: state.globalSettings.token,
    lang: state.globalSettings.lang,
  }));

  const [selectedToken, setSelectedToken] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    switch (selectedToken) {
      case "token#1":
        dispatch(setToken("c539d252c8d0a7349c82e59ba7012c7a"));
        break;
      case "token#2":
        dispatch(setToken("0e13746a0fb36c8875e6d93887a79fee"));
        break;
      case "token#3":
        dispatch(setToken("8463347e789cd1ef9b0580044a41bc56"));
        break;
      default:
        break;
    }
  }, [selectedToken]);

  useEffect(() => {
    if (
      toplineError === "403" ||
      entertainmentError === "403" ||
      businessError === "403" ||
      travelError === "403"
    ) {
      setError("Token has exceeded limit per day (403).");
    }

    if (
      toplineError === "429" ||
      entertainmentError === "429" ||
      businessError === "429" ||
      travelError === "429"
    ) {
      setError("Request has exceeded limit per second (429).");
    }
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
        <div className="absolute top-7 right-0 z-50 w-64 p-4 rounded shadow bg-gray-200 text-slate-800">
          <div className="mb-3 border-b border-slate-400">
            {error && <p className="mb-2 text-sm text-rose-500">{error}</p>}
          </div>

          {/* Token settings */}
          <div className="mb-3">
            <label
              htmlFor="token"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select a token
            </label>
            <select
              id="token"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setSelectedToken(e.target.value)}
              defaultValue={selectedToken}
            >
              <option value="token#1">Token #1</option>
              <option value="token#2">Token #2</option>
              <option value="token#3">Token #3</option>
            </select>
          </div>

          {/* Language settings */}
          <div className="mb-3">
            <label
              htmlFor="language"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select a language
            </label>
            <select
              id="language"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => dispatch(setLang(e.target.value))}
              defaultValue={lang}
            >
              <option value="en">English</option>
              <option value="ja">Japan</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </MenuTransition>
    </div>
  );
}
