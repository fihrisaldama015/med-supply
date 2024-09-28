import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="scrollbar-hidden overflow-x-scroll px-4">
      <div className="flex gap-4 md:gap-8">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default CategoryList;

const Category = () => {
  return (
    <Link
      href={"/list?cat=test"}
      className="xl:-1/6 w-full flex-shrink-0 sm:w-1/2 lg:w-1/4"
    >
      <div className="relative h-96 w-full bg-slate-100">
        <img
          src="https://picsum.photos/800/1200"
          alt="photo"
          className="h-full w-full rounded-md object-cover duration-500 ease-in-out hover:brightness-75"
        />
      </div>
      <h1 className="mt-8 text-clip font-light tracking-wide">Category Name</h1>
    </Link>
  );
};
