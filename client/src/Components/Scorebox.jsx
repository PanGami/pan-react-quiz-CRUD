import React, { Component } from 'react'
import { Well } from 'react-bootstrap'

class Scorebox extends Component {
    render() {
        return (
            <Well className="scorebox">
                <center>
                <strong>Skor anda </strong><span className="score">{this.props.score}</span><br/>
                    Pertanyaan Ke- <strong>{this.props.current + 1}</strong> Dari <strong>{this.props.questions.length}</strong>                    
                </center>
            </Well>
        )
    }
}

export default Scorebox