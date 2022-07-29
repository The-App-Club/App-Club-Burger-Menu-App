import create from 'zustand';

const useScrollPosition = create((set) => {
  return {
    scrollPositionMap: new Map(),
    setScrollPosition: ({pathName, scrollY}) => {
      set((state) => {
        state.scrollPositionMap.set(pathName, scrollY);
      });
    },
  };
});

export {useScrollPosition};
