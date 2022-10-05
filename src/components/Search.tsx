import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppSelector } from "../app/hook";
import { useAppDispatch } from "../app/hook";

import { NormalArticleCard } from "./Articles/NormalArticleCard";
import { NormalArticleLoader } from "./Loader/NormalArticleLoader";

import { fetchSearchArticles } from "../features/articles/searchArticlesSlice";

export function Search() {
  const dispatch = useAppDispatch();
  const { token, lang } = useAppSelector((state) => ({
    token: state.globalSettings.token,
    lang: state.globalSettings.lang,
  }));

  const [openModal, setIsOpenModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchSearchArticles({ token, lang, keyword }));
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setKeyword("");
    setIsOpenModal(false);
  };

  return (
    <>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div className="relative flex justify-between lg:ml-auto w-60 border border-slate-200 dark:border-slate-500 rounded-2xl px-4">
          <input
            type="text"
            className="w-full py-3 focus:outline-none text-sm dark:bg-gray-600"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="pl-4 dark:text-stone-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
      <ResultModal
        isOpen={openModal}
        closeModal={closeModal}
        keyword={keyword}
      />
    </>
  );
}

type ResultModalPRops = {
  isOpen: boolean;
  closeModal: () => void;
  keyword: string;
};

function ResultModal({ isOpen, closeModal, keyword }: ResultModalPRops) {
  const { articles, isLoading } = useAppSelector((state) => ({
    articles: state.searchArticles.articles,
    isLoading: state.searchArticles.isLoading,
  }));

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200 pb-2"
                  >
                    Search result for:{" "}
                    <span className=" italic font-semibold">{keyword}</span>
                  </Dialog.Title>

                  <div className="mt-2">
                    {!articles[0] && (
                      <NormalArticleLoader
                        size={NormalArticleCard.size.SMALL}
                      />
                    )}

                    {!articles[0] && !isLoading && (
                      <p className="text-sm text-gray-500">
                        No result was found.
                      </p>
                    )}

                    {articles?.map((article, index) => (
                      <div key={index}>
                        <NormalArticleCard
                          size={NormalArticleCard.size.SMALL}
                          article={article ? article : null}
                          isLoading={isLoading}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
