import { useState } from 'react'
import HeartButton from './components/HeartButton'
import MainMessage from './components/MainMessage'
import Apology from './components/Apology'
import Memories from './components/Memories'
import Forgiven from './components/Forgiven'
import './App.css'

function App() {
  const [stage, setStage] = useState(0) // 0: heart, 1: message, 2: apology, 3: memories, 4: forgiven
  const [musicPlaying, setMusicPlaying] = useState(false)

  // Replace with your actual photos (put them in `/src/assets/images/`)
  const photos = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
  ]

  const handleNextStage = () => setStage(prev => prev + 1)
  const handlePlayMusic = () => {
    setMusicPlaying(true)
    handleNextStage()
  }

  return (
    <div className="app-container">
      {/* Background music (add an MP3 file in `/src/assets/audio/`) */}
      {musicPlaying && (
        <audio autoPlay loop>
          <source src="/public/assets/audio/love-song.mp3" type="audio/mpeg" />
        </audio>
      )}

      {/* Render current stage */}
      {stage === 0 && <HeartButton onClick={handlePlayMusic} />}
      {stage === 1 && <MainMessage onNext={handleNextStage} />}
      {stage === 2 && <Apology onNext={handleNextStage} />}
      {stage === 3 && <Memories photos={photos} onForgive={() => setStage(4)} />}
      {stage === 4 && <Forgiven />}
    </div>
  )
}

export default App