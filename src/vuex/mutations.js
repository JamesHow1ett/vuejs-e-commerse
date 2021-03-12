const mutations = {
  saveLoadedActivitiesToStore: (state, activities) => {
    state.activitiesList = activities;
  },

  saveRemoveActivityInWishlist: (state, activityUUID) => {
    if (!state.wishlistItems.includes(activityUUID)) {
      state.wishlistItems.push(activityUUID);
    } else {
      const findActivityIndex = state.wishlistItems.findIndex(uuid => {
        return uuid === activityUUID;
      });

      state.wishlistItems.splice(findActivityIndex, 1);
    }
  },

  saveActivityToCartList: (state, activityData) => {
    const similarID = (item) => item.id === activityData.id;

    if (!state.cartItems.some(similarID)) {
      state.cartItems.push(activityData);
    }
  },

  openCloseBag: (state) => {
    state.isBagOpen = !state.isBagOpen;
  },

  removeActivityFromCart: (state, activityUUID) => {
    const findActivityIndex = state.cartItems.findIndex(uuid => {
      return uuid === activityUUID;
    });

    state.cartItems.splice(findActivityIndex, 1);
  }
}

const commitMutatiosAction = () => {
  const mutationCommit = {}
  const mutationsKeys = Object.keys(mutations);

  mutationsKeys.forEach(key => mutationCommit[key] = key);

  return mutationCommit;
}

export { commitMutatiosAction }


export default mutations;
