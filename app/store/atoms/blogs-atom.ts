import { atom } from "jotai";

export type BlogsAtomType = {
  list: any[]
};

export const blogsAtom = atom({
  list: [] as any[],
});
