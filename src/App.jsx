import { useState } from 'react';
import { questions } from './questions';
import './App.css';

function App(){
  //1. inisilisasi state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer]=useState(false);

  //2. Menyiapkan variabe bantu 
  const currentCard = questions[currentIndex];
  const totalCards = questions.length;
  const progressPercent = Math.round(((currentIndex + 1)/totalCards) * 100);
  
  //3 Fungsi Navigasi
  const handleNext = () => {
    if(currentIndex < totalCards - 1){
      setCurrentIndex(currentIndex+1);
      setShowAnswer(false); //kembalikan karto ke posisi pertanyaan
    }
  };

  const handlePrevious = () =>{
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  //4. Tampilan antarmuka (UI)
  return (
    <div className="container">
      <h1>Flash Card</h1>

      {/* Bagian Progres Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
        <span className="progress-text">{progressPercent}% ({currentIndex + 1} of {totalCards})</span>
      </div>

      {/* Bagian Kartu */}
      <div 
        className={`card ${showAnswer ? 'flipped' : ''}`}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="card-content">
          {showAnswer ? currentCard.answer : currentCard.question}
        </div>
        <div className="card-hint">
          {showAnswer ? "Click to see Question" : "Click to see Answer"}
        </div>
      </div>

      {/* Bagian tombol navigasi */}
      <div className="navigation">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          &lt; Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === totalCards -1}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default App;