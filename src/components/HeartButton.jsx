export default function HeartButton({ onClick }) {
  return (
    <div>
      <div className="heart" onClick={onClick}>❤️</div>
      <p>Click the heart to begin</p>
    </div>
  )
}