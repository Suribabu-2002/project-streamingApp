import { useApiStore } from '../store/apiStore';

const getTopShows = async () => {
    return await useApiStore.getState().getTopShows();
};

export default { getTopShows };
