import React, { Component } from 'react'
import AnswerKey from './AnswerKey'
import { Button, Well } from 'react-bootstrap'

class Results extends Component {
    createScoreMessage(percent) {
        let message = ''
        if (percent === 100) {
            message = 'Sempurna!'
        } else if (percent >= 80) {
            message = 'Baik!'
        } else if (percent >= 70) {
            message = 'Cukup!'
        } else {
            message = "Belajar Lagi!"
        }
        return message
    }

    render() {
        var percent = (this.props.score / this.props.questions.length * 100)
        return (
            <div>
                <Well>
                    <center>
                        <h4>Benar {this.props.score} dari {this.props.questions.length} Soal</h4>
                        <h1>Benar {percent}%, {this.createScoreMessage(percent)}</h1>
                        <hr />
                    </center>
                    <hr />
                    <center>
                        <Button bsStyle="success" href="/">Take Again</Button>
                    </center>
                </Well>
                <Well>
                    <center>
                        <h3>Answer Key</h3>
                    </center>
                    <hr />
                    <AnswerKey questions={this.props.questions} />
                </Well>
            </div >
        )
    }
}

export default Results