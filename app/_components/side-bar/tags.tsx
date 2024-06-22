'use client';
import { TagsAtomType, tagsAtom } from "@/app/store/atoms/tags-atom";
import { useAtom } from "jotai";

function Tags() {
  const [tags, _] = useAtom<TagsAtomType>(tagsAtom);
  return (
    <section className="flex flex-col gap-1">
      <h4 className="font-bold text-xl text-gray-500">標籤</h4>
      <div className="bg-primary h-[3px] w-full" />
      <ul className="flex flex-wrap gap-2 px-1 py-2">
        {tags.list.map(({id, color, name}) => {
          const tagBgColor = color === "default" ? '#c7c3c3': color;
          return <li key={id} style={{ background: tagBgColor }} className="backdrop-contrast-0 grayscale-50 rounded cursor-pointer py-1 px-2 text-white/85 hover:text-primary">
          {name}
        </li>
        })}
      </ul>
    </section>
  );
}

export default Tags;
