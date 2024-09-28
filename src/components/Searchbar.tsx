"use client";

import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    console.log("🚀 ~ handleSubmit ~ search:", search);

    if (search) {
      router.push(`/list?name=${search}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-1 items-center justify-between gap-4 rounded-md bg-slate-100 p-2"
    >
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button type="submit" className="cursor-pointer">
        <IoSearch className="h-4 w-4" />
      </button>
    </form>
  );
};

export default Searchbar;
