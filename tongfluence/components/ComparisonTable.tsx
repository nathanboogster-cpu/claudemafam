// A real <table> for genuinely tabular comparisons. Used sparingly — only
// where a table makes something clearer than a paragraph would.
export function ComparisonTable({
  caption,
  columns,
  rows,
  rowHeader,
}: {
  caption: string;
  rowHeader: string;
  columns: string[];
  rows: { label: string; cells: React.ReactNode[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-tf-border bg-white">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-tf-border bg-tf-paper-deep">
            <th scope="col" className="px-4 py-3 font-semibold text-tf-ink">
              {rowHeader}
            </th>
            {columns.map((c) => (
              <th key={c} scope="col" className="px-4 py-3 font-semibold text-tf-ink">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-tf-border last:border-0 align-top">
              <th scope="row" className="px-4 py-3 font-medium text-tf-ink">
                {row.label}
              </th>
              {row.cells.map((cell, i) => (
                <td key={`${row.label}-${i}`} className="px-4 py-3 leading-relaxed text-tf-ink-soft">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
