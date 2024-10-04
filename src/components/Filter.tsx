'use client';

import { Category } from '@/types/type';
import { useRouter } from 'next/navigation';

type FilterProps = {
  category: Category[];
};

const Filter = ({ category }: FilterProps) => {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const category = formData.get('category');
    const min = formData.get('min');
    const max = formData.get('max');
    const sort = formData.get('sort');

    console.log({ category, min, max, sort });

    const queryParams = new URLSearchParams({
      category: category as string,
      sort: sort as string,
    }).toString();
    router.push(`/list?${queryParams}`);
  };

  const onSelectSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    const queryParams = new URLSearchParams({
      sort,
    }).toString();
    router.push(`/list?${queryParams}`);
  };

  const clearFilter = () => {
    const queryParams = new URLSearchParams({
      category: 'all',
      sort: 'newest',
    }).toString();
    router.push(`/list?${queryParams}`);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="mt-12 flex justify-between">
        <div className="flex flex-wrap gap-6">
          <select
            name="category"
            id="category"
            className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-medium"
          >
            <option value="all">All</option>
            {category.map((item: Category) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
          <input
            type="number"
            name="min"
            placeholder="Harga Terendah"
            className="w-30 rounded-lg pl-2 text-xs ring-1 ring-neutral-400"
          />
          <span>-</span>
          <input
            type="number"
            name="max"
            placeholder="Harga Tertinggi"
            className="w-30 rounded-lg pl-2 text-xs ring-1 ring-neutral-400"
          />
          <button className="rounded-md bg-rose-500 px-3 py-1 text-sm text-white transition-all hover:bg-rose-600">
            Apply Filter
          </button>
          <button
            className="rounded-md bg-neutral-100 px-3 py-1 text-sm text-neutral-500 transition-all hover:bg-neutral-200"
            onClick={clearFilter}
          >
            Clear Filter
          </button>
        </div>
        <div>
          <select
            name="sort"
            id="sort"
            defaultValue={'newest'}
            onChange={onSelectSortChange}
            className="bg-slate-white w-max rounded-lg px-4 py-2 text-xs font-medium ring-1 ring-neutral-400"
          >
            <option value="">Sort By</option>
            <option value="price_asc">Harga Terendah</option>
            <option value="price_desc">Harga Tertinggi</option>
            <option value="newest">Terbaru</option>
            <option value="oldest">Terlama</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Filter;
