export default function MainMessage({ onNext }) {
  return (
    <div className="message">
      <h1>My Dearest Love,</h1>
      <p>I owe you the biggest apology...</p>
      <p>I spoke without thinking, and my words hurt you.</p>
      <p>That was never my intention.</p>
      <button onClick={onNext}>Click to see how sorry I am</button>
    </div>
  )
}