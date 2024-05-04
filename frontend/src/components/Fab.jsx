

export default function Fab({ id }) {
  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fixed bottom-5 right-5">
      <button onClick={() => goTo(id)} className="bg-green-500 hover:bg-primary text-white font-bold p-4 rounded-full">
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
        </div>
      </button>
    </div>
  );
}