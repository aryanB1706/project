export default function Forgiven() {
  return (
    <div className="forgiven">
      <h1>Thank you for your big heart ❤️</h1>
      <p>I'll make it up to you, I promise!</p>
      <div className="hearts-animation">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="floating-heart"
            style={{
              position: 'absolute',
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
              animation: `float-up ${Math.random() * 3 + 2}s forwards`,
              animationDelay: `${i * 0.2}s`,
              color: `hsl(${Math.random() * 60 + 330}, 100%, 65%)`
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  )
}