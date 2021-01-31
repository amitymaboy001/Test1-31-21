import React, { useState, Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'



const initialState = [{ id: 1, text: 'ok', crossLine: false }];

function TodoList() {
    const [num, setNum] = useState(initialState);
    const [text, setText] = useState([]);

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            // console.log(event.key);
            // setText(event.target.value);
            // console.log(event.target.value);
            setNum([
                ...num,
                {
                    id: num.reduce((maxId, item) => Math.max(maxId, item.id), -1) + 1,
                    key: num.reduce((maxId, item) => Math.max(maxId, item.key), -1) + 1,
                    text: event.target.value,
                    crossLine: false,
                }
            ])

        }
    };

    const onDelete = (id) => {
        const updateDelete = num.filter((num) => num.id !== id);
        setNum(updateDelete);
    }

    const onCrossLine = (id) => {

    }

    function Post({ id, text }) {
        return (

            <Grid item xs={12} style={{ textAlign: "center" }}>
                <br />
                {"ID : " + id + " TEXT : " + text}<button onClick={() => onDelete(id)}>-</button><button onClick={() => onCrossLine}>done</button>
            </Grid>

        );
    }

    return (
        <>
            <Grid container justify="center">
                <Grid item xs={2} >
                    <TextField onKeyDown={onKeyPress} placeholder="Enter what you want to do here..."></TextField>
                </Grid>
                {/* <Grid item xs={2} >
                    <p>dasd</p>
                </Grid><br></br> */}
                {

                    num.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            text={post.text}
                            crossLine={post.crossline}

                        />
                    ))
                }
            </Grid>


        </>
    );



};

export default TodoList;