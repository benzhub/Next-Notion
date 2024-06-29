"use client";

import {
  CategoriesAtomType,
  categoriesAtom,
} from "@/app/store/atoms/categories-atom";
import { useAtom } from "jotai";
import Link from "next/link";

function Category() {
  const [categories, _] = useAtom<CategoriesAtomType>(categoriesAtom);
  return (
    <section className="flex flex-col gap-1">
      <h4 className="font-bold text-xl text-gray-500">分類</h4>
      <div className="bg-primary h-[3px] w-full" />
      <ul className="flex flex-col gap-2 px-1 py-2">
        {categories.list.map((category) => (
          <li key={category.id} className="hover:text-primary cursor-pointer">
            <Link href={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Category;
