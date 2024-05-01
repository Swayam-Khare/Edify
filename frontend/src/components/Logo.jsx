

export default function Logo({ width }) {
  return (
    <div>
      <img src="./src/assets/logo.svg" className={`w-${width}`} alt="Edify Logo" />
    </div>
  )
}