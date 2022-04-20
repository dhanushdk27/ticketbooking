import React from 'react';

function Navdwon(props) {
    return (
        <div style={{
            background: "rgb(34, 37, 57)",
            height: "2rem"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                background: "rgb(34, 37, 57)",
                height: "2rem",
                width:"20rem",
                marginLeft: "5rem"
            }}>

                <a style={{ color: " rgb(204, 204, 204)" }} href='Train'>Tamil</a>
                <a style={{ color: " rgb(204, 204, 204)" }} href='Airplane'>English</a>
                <a style={{ color: " rgb(204, 204, 204)" }} href='Sports'>Kannadam</a>
                <a style={{ color: " rgb(204, 204, 204)" }} href='Movies'>Malayalam</a>
            </div>
        </div>
    );
}

export default Navdwon;