import { TagType } from "@/app/_types/tag";
import { atom } from "jotai";

export type CategoriesAtomType = {
  list: TagType[]
};

export const categoriesAtom = atom({
  list: [] as TagType[],
});
