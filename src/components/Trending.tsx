import { useState, useEffect } from "react";
import data from "../assets/dev-data/articles.json";

const arr = ["dasdsadas", "dasdasdasdsadsadsa", "ewqeqweqwewqewq"];

export function Trending() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= arr.length) setIndex(0);

    const timer = setTimeout(() => {
      setIndex((prevState) => prevState + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="max-w-full">
      <div className="flex flex-col justify-start md:flex-row md:items-center">
        <p className=" md:w-44 text-sm lg:mr-4 dark:text-stone-200">
          TRENDING NOW:
        </p>
        <div className="relative h-8 w-full lg:mt-3 text-sm text-slate-500 dark:text-slate-300">
          {data.articles.map((article, i) => (
            <span
              key={i}
              className={`${
                i === index
                  ? "visible animate-fade-in-down"
                  : "animate-fade-out-down invisible"
              } absolute left-0 top-0 duration-1000`}
            >
              {article.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
