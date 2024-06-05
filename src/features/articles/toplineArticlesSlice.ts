import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../../utils/utilsType";

type InitialState = {
  isLoading: boolean;
  articles: Article[];
  error: string;
};

const initialState: InitialState = {
  isLoading: false,
  articles: [
    {
      title: "Follow PAK vs ENG live cricket scorecard and commentary",
      description:
        "Pakistan vs England Live Score Updates: England’s first tour to Pakistan since 2005 starts in Karachi.",
      content:
        "PAK vs ENG Live Score Streaming Online: Pakistan vs England from Karachi.\nPakistan vs England 1st T20 Match Live Scorecard: England, in their first tour to Pakistan, have won the toss and opted to bowl first. Skipper Moeen Ali is captaining England a... [346 chars]",
      url: "https://indianexpress.com/article/sports/cricket/pak-vs-eng-1st-t20-live-score-updates-8162462/",
      image:
        "https://images.indianexpress.com/2022/09/pak-vs-eng-1st-t20-live.jpg",
      publishedAt: "2022-09-20T15:51:19Z",
      source: {
        name: "The Indian Express",
        url: "https://indianexpress.com",
      },
    },
    {
      title:
        "Tigrayan forces accuse Eritrea of launching full-scale offensive on border",
      description:
        "Tigray People’s Liberation Front says Eritreans are fighting alongside Ethiopian government forces",
      content:
        "Forces in Ethiopia’s Tigray region said troops from neighbouring Eritrea launched a “full-scale offensive” on Tuesday and heavy fighting was ongoing in several areas along the border.\nReuters was not immediately able to verify the account on Twitter ... [1636 chars]",
      url: "https://www.theguardian.com/world/2022/sep/20/tigrayan-forces-accuse-eritrea-of-full-scale-offensive-on-ethiopia-border",
      image:
        "https://i.guim.co.uk/img/media/99fdfbab26b31db40a04d2c80ad98a6ec6d1966e/125_0_1875_1125/master/1875.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ae4c86d889759a26c9eff4cf00da9b9c",
      publishedAt: "2022-09-20T14:49:00Z",
      source: { name: "The Guardian", url: "http://www.theguardian.com" },
    },
    {
      title:
        "Opinion | A new and improved version of Electoral Count Act reform",
      description:
        "Reps. Liz Cheney and Zoe Lofgren have moved the ball forward.",
      content:
        "Listen 4 min Comment on this story Comment Gift Article Share\nThe compromise proposal that Senate negotiators cobbled together earlier this year to reform the 1887 Electoral Count Act was a good start to prevent a repeat of the 2020 coup attempt. But... [4512 chars]",
      url: "https://www.washingtonpost.com/opinions/2022/09/20/electoral-count-act-eca-reform-house-bill/",
      image:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JICG3SBXIEI63OFPBICOLXB5WY.jpg&w=1440",
      publishedAt: "2022-09-20T14:45:00Z",
      source: {
        name: "The Washington Post",
        url: "https://www.washingtonpost.com",
      },
    },
    {
      title:
        "Fertility Supplements And Vitamins For Women: What You Need To Know",
      description:
        "Here’s how certain nutrients may affect reproductive health, as well as a few other factors that can influence fertility.",
      content:
        "There are several specific nutrients that are involved in female fertility.\nVitamin D\nNot only is vitamin D important for maintaining the health of your bones and immune system, it may also be involved in fertility. In fact, a small study in Fertilit... [3007 chars]",
      url: "https://www.forbes.com/health/family/fertility-supplements-and-vitamins-for-women/",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2022/09/fertility_supplements.jpeg.jpg",
      publishedAt: "2022-09-20T14:37:03Z",
      source: { name: "Forbes", url: "https://www.forbes.com" },
    },
    {
      title:
        "Four occupied Ukraine regions plan imminent ‘votes’ on joining Russia",
      description:
        "‘Referendum’ announcements in Donetsk, Luhansk, Zaporizhzhia and Kherson may indicate move to annex territories",
      content:
        "Four Russian-occupied regions in Ukraine have said they are planning to hold “referendums” on joining the Russian Federation in a series of coordinated announcements that could indicate the Kremlin has made a decision to formally annex the territorie... [3357 chars]",
      url: "https://www.theguardian.com/world/2022/sep/20/four-occupied-ukraine-regions-plan-votes-on-joining-russian-federation",
      image:
        "https://i.guim.co.uk/img/media/5b81f9f09716c00584c2b7383bec94ac7c62f949/0_116_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4788b8072d185868c2abfa6ce0a4bc91",
      publishedAt: "2022-09-20T14:17:00Z",
      source: { name: "The Guardian", url: "https://www.theguardian.com" },
    },
    {
      title: "Pakistan v England: first men’s T20 cricket international - live",
      description:
        "Over-by-over report: England begin this seven-match series in Karachi, their first game in Pakistan since 2005. Join James Wallace",
      content:
        "Key events 1h ago England win the toss and will bowl first\n1h ago Preamble Show key events only Please turn on JavaScript to use this feature\n2m ago 11.11 8th over: Pakistan 70-0 (Rizwan 42, Babar 27) Moeen turns to spin and his best mucka - Adil Ras... [4881 chars]",
      url: "https://www.theguardian.com/sport/live/2022/sep/20/pakistan-england-first-mens-t20-cricket-international-live",
      image:
        "https://i.guim.co.uk/img/media/5bbdc4c0d9825ae5f5d0373d061e595220126cf4/0_30_3976_2387/master/3976.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=d6e2e68aaf1fa9855f477dcd255421eb",
      publishedAt: "2022-09-20T14:04:00Z",
      source: { name: "The Guardian", url: "https://www.theguardian.com" },
    },
    {
      title:
        "UCC researchers find drug can suppress a protein linked to chronic stress",
      description:
        "Scientists say findings will help researchers to better understand and treat stress and to reduce its long-term effects on mental health",
      content:
        "Researchers at University College Cork have identified a new therapy to enhance resilience to stress, which could lead to more effective treatments for anxiety disorders and depression.\nThe breakthrough has shown a drug suppressing the activity of a ... [2035 chars]",
      url: "https://www.irishexaminer.com/news/arid-40965362.html",
      image:
        "https://www.irishexaminer.com/cms_media/module_img/6408/3204182_5_seoimageog_2.20541068.jpg.jpg",
      publishedAt: "2022-09-20T14:00:00Z",
      source: {
        name: "Irish Examiner",
        url: "https://www.irishexaminer.com",
      },
    },
    {
      title:
        "Waning Immunity Due To Discontinuation Of Smallpox Vaccine May Have Led To The Resurgence Of Monkeypox Doctors",
      description:
        "India's monkeypox tally of cases currently stands at 14, with Delhi accounting for nine of those.",
      content:
        "The senior doctor said many of the monkeypox patients are below 40 years of age with a median age of 31 years. (Representative Photo) ( Image Source : Getty )\nNew Delhi, Sep 20 (PTI) The discontinuation of the small pox vaccine might have helped in t... [3489 chars]",
      url: "https://news.abplive.com/health/waning-immunity-due-to-discontinuation-of-smallpox-vaccine-may-have-led-to-the-resurgence-of-monkeypox-doctors-1554346",
      image:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2022/09/20/468b5280faf6308fd8e57df96ae24bde1663681202185324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
      publishedAt: "2022-09-20T13:41:41Z",
      source: { name: "ABP Live", url: "https://news.abplive.com" },
    },
    {
      title: "Reduced Alzheimer's risk after flu jab",
      description:
        "Irish doctors are hopeful that the discovery of a link between the flu vaccine and a 40% reduced risk of Alzheimer's disease will encourage more patients to get the jab before the winter flu season takes hold, according to a leading medical professor.",
      content:
        "Irish doctors are hopeful that the discovery of a link between the flu vaccine and a 40% reduced risk of Alzheimer's disease will encourage more patients to get the jab before the winter flu season takes hold, according to a leading medical professor... [5499 chars]",
      url: "https://www.rte.ie/news/health/2022/0920/1324448-flu-jab-alzheimers/",
      image: "https://img.rasset.ie/001c63ce-1600.jpg",
      publishedAt: "2022-09-20T13:36:22Z",
      source: { name: "RTE.ie", url: "https://www.rte.ie" },
    },
    {
      title: "Mars is real mighty in 1st James Webb observations of Red Planet",
      description:
        "Astronomers will analyse the features of the spectrum to gather additional information about the surface and atmosphere of the planet, said NASA.",
      content:
        "Washington: NASAs James Webb Space Telescope has captured its first images and spectra of Mars that show a region of the planets eastern hemisphere at two different wavelengths, or colours of infrared light.\nWhereas the images show differences in bri... [1636 chars]",
      url: "https://www.siasat.com/mars-is-real-mighty-in-1st-james-webb-observations-of-red-planet-2416990/",
      image: "https://cdn.siasat.com/wp-content/uploads/2022/02/Mars-_feb9.jpg",
      publishedAt: "2022-09-20T13:35:00Z",
      source: { name: "The Siasat Daily", url: "https://www.siasat.com" },
    },
  ],
  error: "",
};

export const fetchToplineArticles = createAsyncThunk(
  "toplineArticles/fetchToplineArticles",
  async ({ token, lang }: Record<string, string>) => {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?&lang=${lang}&token=${token}`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();
    return data.articles as Article[];
  }
);

const toplineArticlesSlice = createSlice({
  name: "toplineArticles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchToplineArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchToplineArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
      state.error = "";
    });
    builder.addCase(fetchToplineArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.articles = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default toplineArticlesSlice.reducer;
