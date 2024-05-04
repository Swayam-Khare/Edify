import Button from "./Button";


export default function SubjectCard({ subject, color }) {
  return (
    <div className={`flex cursor-pointer mr-2 mb-2 flex-col items-center justify-center shadow-md rounded-lg px-4 py-8 bg-gradient-to-r from-${color}-200 to-${color}-300 transform transition-transform duration-500 hover:scale-105 border-2 border-${color}-400`}>
      
      <div className="text-lg font-medium mt-2">{subject.name}</div>
      <div className="text-sm text-gray-700 mt-1">{subject.description}</div>
    </div>
  );
}