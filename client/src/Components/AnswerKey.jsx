import React, { Component } from 'react'

class AnswerKey extends Component {
    render() {
        return (
            <div className="answer-key">
                {
                    this.props.questions.map((question, index) => {
                        return (
                            <div key={index}>
                                <center> 
                                    <h4>Pertanyaan ke-{index + 1} : {question.text}</h4>                                    
                                    <h4>Jawaban yang Benar : {question.correct}</h4>                                    
                                </center>
                                <hr />
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

export default AnswerKey