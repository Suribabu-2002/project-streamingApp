import { create } from "zustand";
import * as streamingAvailability from "streaming-availability";

const RAPID_API_KEY = "a85bd9e89dmsh6c727d139c51e2dp1a0efejsnec97f6c3f8c1";

type ShowType = string;
type ItemType = "show";

export interface Show {
  id: string;
  title: string;
  itemType: ItemType;
  showType: ShowType;
  imdbId: string;
  tmdbId: string;
  originalTitle: string;
  genres: Genre[];
  firstAirYear: number;
  lastAirYear: number;
  overview: string;
  creators: string[];
  cast: string[];
  rating: number;
  seasonCount?: number;
  episodeCount?: number;
  streamingOptions?: any;
  releaseYear?: number;
  directors?: string[];
  imageSet: {
      verticalPoster: {
        w240: string;
        w360: string;
          w480: string;
          w600: string;
        w720: string;
    };
      verticalBackdrop?: {
        w240?: string;
        w360?: string;
          w480?: string;
          w600?: string;
        w720?: string;
    };
    horizontalPoster: {
        w360: string;
          w480: string;
      w720: string;
      w1080: string;
      w1440: string;
    };
    horizontalBackdrop: {
        w360: string;
          w480: string;
      w720: string;
      w1080: string;
      w1440: string;
    };
  };
}

export interface Genre {
  id: string;
  name: string;
}

interface ApiState {
  shows: Show[];
  filteredShows: Show[];
  genres: Genre[];
  loading: boolean;
  error: string | null;
  client: streamingAvailability.Client;
  setLoading: (status: boolean) => void;
  setError: (error: string | null) => void;
  getTopShows: () => Promise<any[]>;
  getFilteredShows: (genreId: string) => Promise<{ shows: Show[] }>;
  getGenres: () => Promise<Genre[]>;
}

export const useApiStore = create<ApiState>((set, get) => ({
  shows: [],
  filteredShows: [],
  genres: [],
  loading: false,
  error: null,
  client: new streamingAvailability.Client(
    new streamingAvailability.Configuration({
      apiKey: RAPID_API_KEY,
    })
  ),

  setLoading: (status: boolean) => set({ loading: status }),
  setError: (error: string | null) => set({ error }),

  getTopShows: async () => {
    try {
      set({ loading: true, error: null });
      const client = get().client;
      const response = await client.showsApi.getTopShows({
        country: "us",
        service: "netflix",
      });

      // Map the API response to our Show type
      const shows:any = response
  
      set({ shows, loading: false });
      return shows;
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      throw error;
    }
  },

  getFilteredShows: async (genreId: string) => {
    try {
      set({ loading: true, error: null });
      // Using basic fetch since the API method isn't available
      const response = await fetch(
        `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&genre=${genreId}`,
        {
          headers: {
            "X-RapidAPI-Key": RAPID_API_KEY,
            "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      const shows = (data.shows || []).map((show: any) => ({
        id: show.id,
        title: show.title,
        itemType: "show" as const,
        showType: "tvShow" as const,
        imdbId: show.imdbId,
        tmdbId: show.tmdbId,
        originalTitle: show.originalTitle,
        firstAirYear: show.firstAirYear,
        lastAirYear: show.lastAirYear,
        genres: show.genres,
        imageSet: {
          backdrop: { w1280: show.imageSet.backdrop?.w1280 || "" },
          verticalPoster: { w720: show.imageSet.verticalPoster?.w720 || "" },
        },
      }));
      set({ filteredShows: shows, loading: false });
      return { shows };
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      throw error;
    }
  },

  getGenres: async () => {
    try {
      set({ loading: true, error: null });
      // Using basic fetch since the API method isn't available
      const response = await fetch(
        "https://streaming-availability.p.rapidapi.com/genres",
        {
          headers: {
            "X-RapidAPI-Key": RAPID_API_KEY,
            "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      const genres = Object.entries(data || {}).map(
        ([id, name]: [string, any]) => ({
          id,
          name: String(name),
        })
      );
      set({ genres, loading: false });
      return genres;
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      throw error;
    }
  },
}));
