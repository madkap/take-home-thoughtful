import { useState } from 'react'
import { Plus, MessageCircleQuestionMark, Circle } from 'lucide-react';

type CardType = {
  question: string;
}

const questions = [
  'What percentage does the plan cover for co-insurance on diagnostic lab services?',
  'What services or procedures do you provide?',
  'Who are the patients you primarily serve?',
  'Where are your facilities located?',
  'How many providers work in your practice?',
  'What licenses or accreditations do you hold?',
  'What is your average monthly patient volume?',
  'Do you submit claims electronically?', 
  'Which billing or EHR systems do you use?',
  'Have you had any claims denials in the past year?',
  'Who is the main contact for insurance matters?'
];

const chooseRandomQuestion = () => {
  return questions[Math.floor(Math.random() * questions.length)];
}

const Card = ({question}: CardType) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <MessageCircleQuestionMark />
          <span className="card-header-text">Question</span>
        </div>
        <div className="card-body">
          {question}
        </div>
        <div className="card-actions">
          <div className="card-action-top"><Circle fill="#fff" size="12" color="#a500dd" /></div>
          <div className="card-action-bottom"><Circle fill="#fff" size="12" color="#a500dd" /></div>
        </div>
      </div>
      <div className="arrow">
        <div className="arrow-line" />
        <div className="arrow-head" />
      </div>
    </>
  )
}

const App = () => {
  const [questions, setQuestions] = useState([chooseRandomQuestion()]);
  return (
    <>
      <header>
        <span>Workflow Builder</span>
        <button onClick={() => setQuestions(prev => [...prev, chooseRandomQuestion()])}>
          <Plus size="16" color="#fff" />
          <span className="button-text">Add Node</span>
        </button>
      </header>
      <main>
        {
          questions.map((question, index) => {
            return (
              <Card
                key={`card-${index}`}
                question={question}
              />
            )
          })
        }

      </main>
    </>
  )
};

export default App
