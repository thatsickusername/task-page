import React from 'react';
import "../../CSS/Buttons.css"

function Buttons(props) {
        return (
            <div class="buttons">
                <button class="not-now-button">
                    Not Now
                </button>

                <button class="to-editor-button">
                    Proceed To Task
                </button>
            </div>
        );
}

export default Buttons;