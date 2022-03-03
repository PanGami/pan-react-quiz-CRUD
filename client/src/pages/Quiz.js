import React, { Component } from 'react'
import QuestionList from '../Components/QuestionList'
import Scorebox from '../Components/Scorebox'
import Results from '../Components/Results'
import '../styles/quiz.css'
import { createQuizData as quizData } from '../api/opentdb'

const Timer = (props) => {
  const { initMinute = 0, initSeconds = 10 } = props
  const [minutes, setMinutes] = React.useState(initMinute)
  const [seconds, setSeconds] = React.useState(initSeconds)

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <React.Fragment>
			<div className='wrapper'>
				{ minutes === 0 && seconds === 0 ? (
          <div className='time-up'>
            <h1>Time's Up!</h1>
            <h2>You're done with the quiz!</h2>
          </div>
				) : (
					<React.Fragment>
						<h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
					</React.Fragment>
				)}
			</div>
    </React.Fragment>
  )
}

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      score: 0,
      current: 0,
      loading: undefined
    }
  }

  setCurrent(current) {
    this.setState({ current })
  }

  setScore(score) {
    this.setState({ score })
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true })
      this.setState({ questions: await quizData(), loading: false })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    
    if (this.state.loading === false) {      
      if (this.state.current >= this.state.questions.length) {
        var scorebox = ''
        var results = <Results {...this.state} />
      } else {
        scorebox = <Scorebox {...this.state} />
        results = ''
      }
      return (
        <div>          
          {scorebox}
          <QuestionList
            {...this.state}
            setCurrent={this.setCurrent.bind(this)}
            setScore={this.setScore.bind(this)}
          />
           
          {results}
          <Timer initMinute={3} initSeconds={30} />
        </div>
      )
    } else {
      return null
    }
  }
}

export default App