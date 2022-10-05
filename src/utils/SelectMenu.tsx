import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  fn: (value: string) => void;
  defaultValue: string;
  label: string;
};

export function SelectMenu({ children, fn, defaultValue, label }: Props) {
  return (
    <div className="mb-3">
      <label
        htmlFor="token"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label ? label : "Set label"}
      </label>
      <select
        id="token"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => fn(e.target.value)}
        defaultValue={defaultValue}
      >
        {children}
        {/* <option value="token#1">Token #1</option>
        <option value="token#2">Token #2</option>
        <option value="token#3">Token #3</option> */}
      </select>
    </div>
  );
}
