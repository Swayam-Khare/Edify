

export default function Button({ label, onClick }) {
  return (
    <button onClick={onClick} type="button" className="w-full bg-primary text-white rounded-3xl font-medium px-5 py-2.5 hover:bg-green-900">
      {label}
    </button>
  )
}