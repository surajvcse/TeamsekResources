export default function Logo() {
  const base = import.meta.env.BASE_URL || '/'
  return (
    <img
      className="mark"
      src={`${base}Logo/temasek-logo.png`}
      alt="Temasek Resources"
      width="48"
      height="48"
    />
  )
}