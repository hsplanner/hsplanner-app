import create from 'zustand';

export const usePlannerStore = create(set => ({
  plannerList: [],
  setPlannerList: plannerList => set({plannerList}),
  increasePlanner: planner => set(state => ({plannerList: [...state.plannerList, planner]})),
/*   updateWork: work =>
    set(state => {
      const foundIndex = state.worksList.findIndex(x => x.id === work.id);
      var newList = [...state.worksList];
      newList[foundIndex] = work;
      return {worksList: newList};
    }),
  deleteWork: work =>
    set(state => ({
      worksList: [...state.worksList.filter(item => item !== work)],
    })), */
}));
