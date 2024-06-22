import { TagType } from "@/app/_types/tag";
import { atom } from "jotai";

export type TagsAtomType = {
  tags: TagType[];
};

export const tagsAtom = atom({
  tags: [],
});
