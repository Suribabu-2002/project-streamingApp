declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.mp4" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

export interface Genre {
  id: string;
  name: string;
}

export interface ImageSet {
  verticalPoster: {
    w240?: string;
    w360?: string;
    w480?: string;
    w600?: string;
    w720?: string;
  };
  horizontalPoster: {
    w360?: string;
    w480?: string;
    w720?: string;
    w1080?: string;
    w1440?: string;
  };
  horizontalBackdrop: {
    w360?: string;
    w480?: string;
    w720?: string;
    w1080?: string;
    w1440?: string;
  };
}

export interface StreamingService {
  id: string;
  name: string;
  homePage: string;
  themeColorCode: string;
  imageSet: {
    lightThemeImage: string;
    darkThemeImage: string;
    whiteImage: string;
  };
}

export interface StreamingOption {
  service: StreamingService;
  type: string;
  link: string;
  videoLink: string;
  quality: string;
  audios: Array<{
    language: string;
  }>;
  subtitles: Array<{
    closedCaptions: boolean;
    locale: {
      language: string;
    };
  }>;
  expiresSoon: boolean;
  availableSince: number;
}

export interface StreamingOptions {
  us: StreamingOption[];
}

export interface BaseShow {
  itemType: string;
  showType: string;
  id: string;
  imdbId: string;
  tmdbId: string;
  title: string;
  overview: string;
  firstAirYear: number;
  lastAirYear: number;
  originalTitle: string;
  genres: Genre[];
  creators: string[];
  cast: string[];
  rating: number;
  seasonCount?: number;
  episodeCount?: number;
  imageSet: ImageSet;
  streamingOptions: StreamingOptions;
}

export interface ExtendedShow extends BaseShow {
  // Add any additional properties specific to ExtendedShow if needed
}
