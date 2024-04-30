

export default function Button({ label, onClick }) {
  return (
    <button onClick={onClick} type="button" className="w-full bg-primary text-white rounded-3xl mt-2 px-5 py-2.5 me-2 mb-1">
      {label}
    </button>
  )
}