// import { fetchTags } from "@/lib/notion";

function SideBar({ isOpen }: { isOpen: boolean }) {
  // const tags = await fetchTags();
  // console.log('tags', tags)
  return (
    <div
      className={`p-4 overflow-y-scroll bg-neutral-content transition-all duration-400 delay-50 ${
        isOpen
          ? "!bg-[#eaeaec] absolute md:static top-0 w-full md:w-auto"
          : "w-0 h-0 invisible md:w-auto md:h-auto md:visible"
      }`}
    >
      <div className="max-w-[280px] h-[100dvh] mx-auto">
        <ul className="flex flex-col gap-4">
          <div className="px-2 py-4 w-full">
            <input
              type="text"
              placeholder="搜尋"
              className="outline outline-gray-200 p-2 rounded w-full"
            />
          </div>

          <section className="flex flex-col gap-1">
            <h4 className="font-bold text-xl text-gray-500">標籤</h4>
            <div className="bg-primary h-[3px] w-full" />
            <ul className="flex flex-wrap gap-2 px-1 py-2">
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2 bg-black text-white">
                items
              </li>
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2  bg-black text-white">
                items
              </li>
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2  bg-black text-white">
                items
              </li>
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2  bg-black text-white">
                items
              </li>
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2  bg-black text-white">
                items
              </li>
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2  bg-black text-white">
                items
              </li>
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2  bg-black text-white">
                items
              </li>
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2  bg-black text-white">
                items
              </li>
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2  bg-black text-white">
                items
              </li>
              <li className="rounded hover:text-primary cursor-pointer py-1 px-2  bg-black text-white">
                items
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-1">
            <h4 className="font-bold text-xl text-gray-500">近期文章</h4>
            <div className="bg-primary h-[3px] w-full" />
            <ul className="flex flex-col gap-2 px-1 py-2">
              <li className="hover:text-primary cursor-pointer">
                itemsitemsitems
              </li>
              <li className="hover:text-primary cursor-pointer">
                itemsitemsitems
              </li>
              <li className="hover:text-primary cursor-pointer">
                itemsitemsitems
              </li>
              <li className="hover:text-primary cursor-pointer">
                itemsitemsitems
              </li>
              <li className="hover:text-primary cursor-pointer">
                itemsitemsitems
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-1">
            <h4 className="font-bold text-xl text-gray-500">分類</h4>
            <div className="bg-primary h-[3px] w-full" />
            <ul className="flex flex-col gap-2 px-1 py-2">
              <li className="hover:text-primary cursor-pointer">items</li>
              <li className="hover:text-primary cursor-pointer">items</li>
              <li className="hover:text-primary cursor-pointer">items</li>
              <li className="hover:text-primary cursor-pointer">items</li>
              <li className="hover:text-primary cursor-pointer">items</li>
            </ul>
          </section>
        </ul>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
export default SideBar;
