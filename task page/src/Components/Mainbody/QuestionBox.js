import React, { Component } from 'react';
import "../../CSS/QuestionBox.css"

function QuestionBox(props) {
        return (
                            <div class="question-box">
                                <div class="question-heading">{props.QuestionHeading}
                                
                                </div>
                                <div class="question-text">{props.QuestionText}
                                
                                </div>
                            </div>
        );
}

export default QuestionBox;