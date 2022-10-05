import { useAppSelector, useAppDispatch } from "../app/hook";
import { setToken } from "../features/globalSettings/globalSettingsSlice";

interface Token {
  id: string;
  token: string;
}

/** Token list included id */
const tokenList: Token[] = [
  { id: "token#1", token: "c539d252c8d0a7349c82e59ba7012c7a" },
  { id: "token#2", token: "0e13746a0fb36c8875e6d93887a79fee" },
  { id: "token#3", token: "8463347e789cd1ef9b0580044a41bc56" },
];

export function useTokenSetting() {
  const token = useAppSelector((state) => state.globalSettings.token);
  const dispatch = useAppDispatch();

  /** Store default token to local storage if there is nothing here */
  if (!localStorage.getItem("token")) {
    localStorage.setItem("token", token);
  }

  /** Store the new token to the local storage */
  const changeToken = (tokenId: string) => {
    const [selectedToken] = tokenList.filter((token) => token.id === tokenId);
    dispatch(setToken(selectedToken.token));
    localStorage.setItem("token", selectedToken.token);
  };

  /** Get the token from local storage then filter it with token list */
  const [storageToken] = tokenList.filter(
    (token) => token.token === localStorage.getItem("token")
  );

  return { storageToken, changeToken };
}
