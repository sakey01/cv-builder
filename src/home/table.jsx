import TableRows from "./tableRows";

const Table = () => {
  return (
    <table className="table-auto min-w-full text-sm border border-stone-400">
      <thead>
        <tr className="bg-stone-700">
          <th className="px-4 py-2 text-left border">CV</th>
          <th className="px-4 py-2 text-left border">Created</th>
          <th className="px-4 py-2 text-left border">Last Edited</th>
          <th className="px-4 py-2 text-left border">Actions</th>
        </tr>
      </thead>
      <TableRows />
    </table>
  );
};

export default Table;
