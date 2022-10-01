import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { classNames } from "./classNames";

enum Variant {
  WHITE,
  DARK,
}

enum Button {
  PRIMARY,
  SUCCESSFULLY,
  DANGER,
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.WHITE]: "bg-white text-slate-900",
  [Variant.DARK]: "bg-slate-900 text-slate-200",
};

const BUTTON_MAPS: Record<Button, string> = {
  [Button.PRIMARY]: "bg-blue-600 text-white",
  [Button.SUCCESSFULLY]: "bg-green-600 text-white",
  [Button.DANGER]: "bg-red-600 text-white",
};

interface Path {
  pathname: string;
  hash: string;
}

type Props = {
  variant: Variant;
  button: Button;
  children?: ReactNode;
  text: string;
  path: Path | string;
};

export function DropdownMenu({ children, variant, button, text, path }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={classNames(
          "flex justify-between p-2 w-full",
          BUTTON_MAPS[button]
        )}
      >
        <Link to={path}>
          <span className="px-4 py-2">{text}</span>
        </Link>
        {children && (
          <button className="px-4 py-2" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={`${isOpen ? "rotate-90" : ""} duration-700`}
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </button>
        )}
      </div>
      <ul
        className={classNames(
          "px-6 leading-8 duration-700 overflow-hidden",
          isOpen ? "max-h-52" : "max-h-0",
          VARIANT_MAPS[variant]
        )}
      >
        {children}
      </ul>
    </div>
  );
}

DropdownMenu.defaultProps = {
  variant: Variant.WHITE,
  button: Button.SUCCESSFULLY,
};

DropdownMenu.variant = Variant;
DropdownMenu.button = Button;
