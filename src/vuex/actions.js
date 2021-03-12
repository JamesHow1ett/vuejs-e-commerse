import getDataFromApi from '../lib/api';
import { commitMutatiosAction } from './mutations';

const mutationCommit = commitMutatiosAction();

const actions = {
  async loadActivities({ commit }) {
    const activities = await getDataFromApi();

    return commit(mutationCommit.saveLoadedActivitiesToStore, activities);
  },

  addActivityToWishlist({ commit }, activityUUID) {
    return commit(mutationCommit.saveRemoveActivityInWishlist, activityUUID);
  },

  addActivityToCart({ commit }, activityData) {
    return commit(mutationCommit.saveActivityToCartList, activityData)
  }
}

export default actions;
