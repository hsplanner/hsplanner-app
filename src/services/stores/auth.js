import create from 'zustand';

export const useAuthInfoStore = create(set => ({
  user: {},
  setUser: user => set({user}),
  cleanUser: () => set({user: {}}),

  /*   setWorksList: worksList => set({worksList}),
  increaseWork: work => set(state => ({worksList: [...state.worksList, work]})),
  updateWork: work =>
    set(state => {
      const foundIndex = state.worksList.findIndex(x => x.id === work.id);
      var newList = [...state.worksList];
      newList[foundIndex] = work;
      return {worksList: newList};
    }),
  deleteWork: work =>
    set(state => ({
      worksList: [...state.worksList.filter(item => item !== work)],
    })),
 */
  /*setHouseList: data => set({ housesList: data }), */
}));
