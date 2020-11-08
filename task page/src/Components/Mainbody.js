import React, { Component } from 'react';
import "../font-awesome/css/font-awesome.min.css"
import "../CSS/MainBody.css"
import Buttons from "./Mainbody/Buttons.js"
import QuestionBox from "./Mainbody/QuestionBox.js"
import Questions from "../Data/Questions.js"


class Mainbody extends Component {
    constructor(){
        super();
        this.state = {
            QuestionHeading : "",
            QuestionText: ""
        };
      }
    render() {

this.state = Questions[0]

        return (
               <div className="main-body">

                    <div class="total-flex">
                        <div class="space">


                            <QuestionBox QuestionHeading={this.state.QuestionHeading} QuestionText={this.state.QuestionText}/>
                            <Buttons/>



                        </div>	
                    </div>

               </div>
         );
    }
}

export default Mainbody;