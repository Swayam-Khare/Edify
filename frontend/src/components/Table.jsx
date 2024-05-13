

export default function Table({ columns, data }) {
  return (
    <>
      <div className="rounded-xl shadow-lg overflow-hidden">
          <table className="table-auto">
            <thead className="bg-primary text-white">
              <tr>
                {columns.map(column => (
                  <th key={column} className="px-4 py-2">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  {columns.map(column => (
                    <td key={column} className="border px-4 py-2">{row[column]}</td>
                  ))}
                </tr>
              ))  
              }
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="5" className="border px-4 py-2">Total data: {data.length}</td>
              </tr>
            </tfoot>
          </table>
          </div>
    </>
  )
}