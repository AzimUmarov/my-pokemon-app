import React from 'react';
import "./DetailsPoke.css"
import App from "../App";
function DetailsPoke({shows, setShows}) {
    return (
        <div>
            <div id="myModal" className="modal" style={shows ? {display: "block"} : {display: "none"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Modal Header</h2>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
                    </div>
                </div>
            </div>
            <script>
            </script>
        </div>
    );
}

export default DetailsPoke;