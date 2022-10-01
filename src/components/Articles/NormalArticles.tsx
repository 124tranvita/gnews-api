import { useState } from "react";
import { PayloadAction } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../app/hook";

import { NormalArticleCard } from "./NormalArticleCard";

import { Article } from "../../utils/utilsType";
import { classNames } from "../../utils/classNames";

enum Variant {
  PRIMARY,
  SUCCESSFULLY,
  DANGER,
  INDIGO,
}

type Menu = {
  id: number;
  name: string;
  keyword: string;
};

type Props = {
  topic: string;
  menus: Menu[];
  path: string;
  articles: Article[];
  variant: Variant;
  isLoading: boolean;
  fn: (keyword: string) => PayloadAction;
};

const VARIANT_MAPS = {
  [Variant.PRIMARY]: "before:bg-blue-500 text-blue-500",
  [Variant.SUCCESSFULLY]: "before:bg-green-500 text-green-500",
  [Variant.DANGER]: "before:bg-red-500 text-red-500",
  [Variant.INDIGO]: "before:bg-indigo-500 text-indigo-500",
};

export function NormalArticles({
  topic,
  menus,
  path,
  articles,
  variant,
  isLoading,
  fn,
}: Props) {
  const dispatch = useAppDispatch();
  const [index, setIndex] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleSelect = (index: number, keyword: string) => {
    setIndex(index);
    dispatch(fn(keyword));
  };

  return (
    <div className="grid grid-cols-2 px-4 mb-4">
      <div
        className={classNames(
          "article-menu-wrapper col-span-full relative flex justify-between items-center px-4 md:mx-0 py-3 mb-8",
          VARIANT_MAPS[variant]
        )}
      >
        <span className="font-bold">{topic}</span>
        {/* Menu desktop */}
        <span className="article-menu-items text-sm text-slate-900 hidden md:block">
          {menus.map((menu, i) => (
            <span
              key={menu.id}
              className={i === index ? "active" : ""}
              onClick={() => handleSelect(i, menu.keyword)}
            >
              {menu.name}
            </span>
          ))}
        </span>
        {/* Menu mobile */}
        <div className="relative">
          <button
            className="bg-slate-200 rounded-full px-2 py-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>

          {/* Menu */}
          {isMobileMenuOpen && (
            <span className="animate-fade-in absolute top-10 left-0 -translate-x-11 right-0 bg-slate-100 p-4 w-32 z-20 rounded-md shadow leading-8 flex flex-col items-center text-sm text-slate-900 md:hidden">
              {menus.map((menu, i) => (
                <span
                  key={menu.id}
                  className={i === index ? "active" : ""}
                  onClick={() => handleSelect(i, menu.keyword)}
                >
                  {menu.name}
                </span>
              ))}
            </span>
          )}
        </div>

        <span className="flex justify-start items-center text-sm text-slate-400 hover:text-slate-500 cursor-pointer">
          <Link to={path}>
            <span>View all</span>
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </span>
        </span>
      </div>
      <div className="col-span-full md:col-span-1">
        <NormalArticleCard
          size={NormalArticleCard.size.LARGE}
          article={articles ? articles[0] : null}
          isLoading={isLoading}
        />
      </div>
      <div className="col-span-full md:col-span-1">
        <NormalArticleCard
          size={NormalArticleCard.size.SMALL}
          article={articles ? articles[1] : null}
          isLoading={isLoading}
        />
        <NormalArticleCard
          size={NormalArticleCard.size.SMALL}
          article={articles ? articles[2] : null}
          isLoading={isLoading}
        />
        <NormalArticleCard
          size={NormalArticleCard.size.SMALL}
          article={articles ? articles[3] : null}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

NormalArticles.defaultProps = {
  variant: Variant.PRIMARY,
};

NormalArticles.variant = Variant;
