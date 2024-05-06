

export default function TestCard({ subject, color }) {
  return (
    <div className={`rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 border-2 border-blue-400`}>
      <div className={`flex justify-center text-center items-center h-40 px-4 bg-gradient-to-r from-blue-200 to-blue-300`}>
        <div className="text-lg font-medium mt-2">{subject.name}</div>
      </div>
      <div className="mx-3 text-sm mt-4">
        <p className="">{subject.description}</p>
        <div className="text-center my-4">
          <button className="border-2 border-blue-500 text-blue-500 p-2 rounded-lg">View Report</button>
        </div>
      </div>
    </div>
  );
}