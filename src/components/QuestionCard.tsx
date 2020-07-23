import React from 'react'
// Types
import { AnswerObject } from '../App'
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQues: number;
  gameOver: boolean;
  score: number
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQues,
  gameOver,
  score
}) => (
  <Wrapper>
    {!gameOver ? <p className='score'>Score: {score}</p> : null}
    <p className='number'>
      Question: {questionNum} / {totalQues}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
)

export default QuestionCard