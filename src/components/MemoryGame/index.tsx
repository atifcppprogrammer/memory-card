import { useEffect, useState } from 'react'

import { getRandomEmoticons, shuffleArray } from '../../utils'
import Emoticon from '../Emoticon'
import './styles.css'

const MemoryGame = () => {

  const [emoticons, setEmoticons] = useState(getRandomEmoticons(12));
  const [selections, setSelections] = useState<string[]>([]);
  const [maxScore, setMaxScore] = useState(0);
  const [score, setScore] = useState(0);

  const handleEmoticonClick = (emoticon: string) => {
    return () => {
      const isFound = selections.findIndex(
        selection => selection === emoticon
      ) >= 0;
      if (!isFound) {
        setScore(previousScore => previousScore + 1);
        setSelections([...selections, emoticon]);
      } else {
        setSelections([]);
      }
    }
  }

  useEffect(() => {
    setEmoticons(shuffleArray(emoticons));
    if (selections.length === 0) {
      setMaxScore(Math.max(maxScore, score));
      setScore(0);
    }
  }, [selections, maxScore, score, emoticons]);

  return (
    <div className="mg-container">
      <div className="mg-header-container">
        <h4>Max Score: {maxScore}</h4>
        <h3>
          <a href="https://github.com/atifcppprogrammer/memory-card">
            Memory Card
          </a>
        </h3>
        <h4>Score: {score}</h4>
      </div>
      <div className="mg-inner-container">
        <div className="mg-grid-container">
          {emoticons.map(emoticon => (
            <Emoticon
              onEmoticonClick={handleEmoticonClick(emoticon)}
              name={emoticon}
              key={emoticon} />
          ))}
        </div>
      </div>
      <div className="mg-footer-container">
        <h4>
          A project by <a href="https://github.com/atifcppprogrammer">
            atifcppprogrammer
          </a>
        </h4>
      </div>
    </div>
  );
}

export default MemoryGame;
