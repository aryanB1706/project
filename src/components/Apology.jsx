export default function Apology({ onNext }) {
  return (
    <div className="apology">
      <h2>I'm Truly Sorry</h2>
      <div className="apology-reason">
        <p>💔 I shouldn't have raised my voice</p>
        <p>😔 I let my emotions get the best of me</p>
        <p>🤦‍♂️ I know I was being unreasonable</p>
        <p>💖 You mean everything to me</p>
      </div>
      <div className="promises">
        <h3>I Promise To:</h3>
        <p>✅ Listen more and react less</p>
        <p>✅ Be more patient with you</p>
        <p>✅ Think before I speak</p>
      </div>
      <button onClick={onNext}>Remember Our Happy Times?</button>
    </div>
  )
}