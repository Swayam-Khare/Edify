import logo from '../assets/logo.svg';

export default function Logo({ width }) {
  return (
    <div>
      <img src={logo} className={`w-${width}`} alt="Edify Logo" />
    </div>
  )
}