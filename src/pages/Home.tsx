import { TopArticles } from "../components/Articles/TopArticles";
import { NormalArticles } from "../components/Articles/NormalArticles";
import { PopularArticles } from "../components/Articles/PopularArticles";
import { StayConnected } from "../components/StayConnected";
import { Tags } from "../components/Tags";
import { Subscribe } from "../components/Subscribe";
import { FeatureVideos } from "../components/FeatureVideos";

import { setKeyword as entertainmentKeyword } from "../features/articles/entertainmentArticlesSlice";
import { setKeyword as businessKeyword } from "../features/articles/businessArticlesSlice";
import { setKeyword as travelKeyword } from "../features/articles/travelArticlesSlice";

import {
  entertainmentMenu,
  businessMenu,
  travelMenu,
} from "../utils/topicMenu";
import { useAppSelector } from "../app/hook";

export function Home() {
  /**Get Entertainment Articles state from RTK */
  const { entertainmentArticles, entertainmentIsLoading } = useAppSelector(
    (state) => ({
      entertainmentArticles: state.entertainmentArticles.articles,
      entertainmentIsLoading: state.entertainmentArticles.isLoading,
    })
  );

  /**Get Business Articles state from RTK */
  const { businessArticles, businessIsLoading } = useAppSelector((state) => ({
    businessArticles: state.businessArticles.articles,
    businessIsLoading: state.businessArticles.isLoading,
  }));

  /**Get Travel Articles state from RTK */
  const { travelArticles, travelIsLoading } = useAppSelector((state) => ({
    travelArticles: state.travelArticles.articles,
    travelIsLoading: state.travelArticles.isLoading,
  }));

  return (
    <div className="container max-w-6xl mx-auto">
      <div id="topline">
        <TopArticles />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-full lg:col-span-2">
          <div id="entertainment">
            <NormalArticles
              topic={"Entertainment"}
              path="/entertainment"
              menus={entertainmentMenu}
              articles={entertainmentArticles}
              isLoading={entertainmentIsLoading}
              fn={entertainmentKeyword}
            />
          </div>
          <div id="business">
            <NormalArticles
              topic={"Business"}
              path="/business"
              menus={businessMenu}
              articles={businessArticles}
              variant={NormalArticles.variant.DANGER}
              isLoading={businessIsLoading}
              fn={businessKeyword}
            />
          </div>
          <div id="travel">
            <NormalArticles
              topic={"Travel"}
              path="/travel"
              menus={travelMenu}
              articles={travelArticles}
              variant={NormalArticles.variant.INDIGO}
              isLoading={travelIsLoading}
              fn={travelKeyword}
            />
          </div>
        </div>
        <div className="col-span-full lg:col-span-1">
          <div className="px-4">
            <PopularArticles variant={PopularArticles.variant.INDIGO} />
            <StayConnected />
            <Subscribe />
            <Tags />
          </div>
        </div>
      </div>
      <div id="video">
        <FeatureVideos />
      </div>
    </div>
  );
}
