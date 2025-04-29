import { create } from "zustand";
import * as streamingAvailability from "streaming-availability";

const RAPID_API_KEY = "a85bd9e89dmsh6c727d139c51e2dp1a0efejsnec97f6c3f8c1";

export const useApiStore = create((set, get) => ({
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

  setLoading: (status) => set({ loading: status }),
  setError: (error) => set({ error }),

  getTopShows: async () => {
    try {
      set({ loading: true, error: null });
      const client = get().client;
      const response = await client.showsApi.getTopShows({
        country: "us",
        service: "netflix",
        showType: "series",
      });
      set({ shows: response.data || [], loading: false });
      return response;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  getFilteredShows: async (searchTerm) => {
    try {
      set({ loading: true, error: null });
      const client = get().client;
      const response = await client.showsApi.searchShowsByFilters({
        country: "us",
        catalogs: ["netflix"],
        genres: [searchTerm || "scifi"],
        showType: "movie",
      });
      set({ filteredShows: response.data || [], loading: false });
      return response;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  getGenres: async () => {
    try {
      set({ loading: true, error: null });
      const client = get().client;
      const response = await client.genresApi.getGenres({
        outputLanguage: "en",
      });
      set({ genres: response.data || [], loading: false });
      return response;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
}));
