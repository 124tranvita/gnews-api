import { Fragment, ReactNode } from "react";
import { Transition } from "@headlessui/react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
};

export const MenuTransition = ({ children, isOpen }: Props) => {
  return (
    <>
      <Transition
        as={Fragment}
        appear
        show={isOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </Transition>
    </>
  );
};
