
function Tags({tags}: {tags: any[]}) {
  console.log(tags)
  return (
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
  );
}

export default Tags;
