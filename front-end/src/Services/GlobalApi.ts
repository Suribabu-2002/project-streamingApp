import { useApiStore } from '../store/apiStore';
import type { Show } from '../store/apiStore';

const getTopShows = async (): Promise<Show[]> => {
    return await useApiStore.getState().getTopShows();
};

const GlobalApi = {
    getTopShows
};

export default GlobalApi;
