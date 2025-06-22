import { create } from "zustand";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";

type ItemType = "show";

export interface Show {
  id?: string;
  title?: string;
  itemType?: ItemType;
  runtime?: number;
  showType?: string;
  imdbId?: string;
  tmdbId?: string;
  originalTitle?: string;
  genres?: Genre[];
  firstAirYear?: number;
  lastAirYear?: number;
  overview?: string;
  creators?: string[];
  cast?: string[];
  rating?: number;
  seasonCount?: number;
  episodeCount?: number;
  streamingOptions?: any;
  releaseYear?: number;
  directors?: string[];
  imageSet?: {
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
  movie: Show;
  genres: string[];
  loading: boolean;
  error: string | null;
  setLoading: (status: boolean) => void;
  setError: (error: string | null) => void;
  getTopShows: (count: number) => Promise<any>;
  getFilteredShows: (
    genreId: string,
    pageSize?: number,
    pageNumber?: number,
  ) => Promise<any>;
  getGenres: () => Promise<any>;
  getWatchList: () => Promise<any>;
  getTitleSearch: (title: string) => Promise<any>;
  getMovie: (id: string) => Promise<any>;
  postWatchList: (
    id: number,
    title: string,
    imdbId: string,
    showType: string,
  ) => Promise<any>;
  deleteWatchList: (id: number) => Promise<any>;
}

export const useApiStore = create<ApiState>((set, get) => ({
  shows: [],
  filteredShows: [],
  genres: [],
  movie: {},
  loading: false,
  error: null,
  setLoading: (status: boolean) => set({ loading: status }),
  setError: (error: string | null) => set({ error }),

  getTopShows: async (count: number) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(
        `${BACKEND_URL}/movies?topShows=${count}`,
        {},
      );
      const shows: any = response.data;
      set({ shows, loading: false });
      return shows;
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
  getTitleSearch: async (title: string) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(
        `${BACKEND_URL}/movies?title=${title}`,
        {},
      );
      const shows: any = response.data;
      set({ shows, loading: false });
      return shows;
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  getFilteredShows: async (genreId: string, pageSize = 10, pageNumber = 1) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(
        `${BACKEND_URL}/movies?genre=${genreId}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
        {},
      );
      const shows: any = response.data;
      set({ shows, loading: false });
      return shows;
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  getGenres: async () => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(`${BACKEND_URL}/genres`, {});
      const genres: any = response.data;
      set({ genres, loading: false });
      return genres;
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
  getWatchList: async () => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(`${BACKEND_URL}/watch-list`, {});
      const shows: any = response.data;
      set({ shows, loading: false });
      return shows;
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  getMovie: async (id: string) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(`${BACKEND_URL}/movie/${id}`, {});
      const movie: any = response.data;
      set({ loading: false });
      return movie;
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
  postWatchList: async (
    id: number,
    title: string,
    imdbId: string,
    showType: string,
  ) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.post(`${BACKEND_URL}/watchList/${id}`, {
        title,
        imdbId,
        showType,
      });
      set({ loading: false });
      return response.data;
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
  deleteWatchList: async (id: number) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.delete(`${BACKEND_URL}/watchList/${id}`, {});
      set({ loading: false });
      return response.data;
    } catch (error: any) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
}));
