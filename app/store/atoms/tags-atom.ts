import { TagType } from "@/app/_types/tag";
import { atom } from "jotai";

export type TagsAtomType = {
  list: TagType[]
};

export const tagsAtom = atom({
  list: [] as TagType[],
});
