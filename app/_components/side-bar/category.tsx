function Category() {
  return (
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
  );
}

export default Category;
