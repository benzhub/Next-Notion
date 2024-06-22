function RecnetlyPosts() {
  return (
    <section className="flex flex-col gap-1">
      <h4 className="font-bold text-xl text-gray-500">近期文章</h4>
      <div className="bg-primary h-[3px] w-full" />
      <ul className="flex flex-col gap-2 px-1 py-2">
        <li className="hover:text-primary cursor-pointer">itemsitemsitems</li>
        <li className="hover:text-primary cursor-pointer">itemsitemsitems</li>
        <li className="hover:text-primary cursor-pointer">itemsitemsitems</li>
        <li className="hover:text-primary cursor-pointer">itemsitemsitems</li>
        <li className="hover:text-primary cursor-pointer">itemsitemsitems</li>
      </ul>
    </section>
  );
}

export default RecnetlyPosts;
