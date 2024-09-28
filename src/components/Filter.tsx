const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id=""
          className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-medium"
        >
          <option value="all">All</option>
          <option value="stethoscope">Stethoscope</option>
          <option value="thermometer">Thermometer</option>
          <option value="syringe">Syringe</option>
          <option value="scalpel">Scalpel</option>
          <option value="forceps">Forceps</option>
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
      </div>
      <div>
        <select
          name="sort"
          id="sort"
          className="bg-slate-white w-max rounded-lg px-4 py-2 text-xs font-medium ring-1 ring-neutral-400"
        >
          <option>Sort By</option>
          <option value="price_asc">Harga Terendah</option>
          <option value="price_desc">Harga Tertinggi</option>
          <option value="newest">Terbaru</option>
          <option value="oldest">Terlama</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
