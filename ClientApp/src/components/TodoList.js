import React, {useEffect, useState} from 'react'

// Material-UI
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';

// Components
import Todo from './Todo'
import AddTodo from "./AddTodo";

// Services
import { getAll } from '../services/todoService'


const TodoList = () => {
    
    const [items, setItems] = useState([])
    
    const setQuotes = () => {
        getAll().then(
            data=>setItems(data)
        )
    }
    
    const updateQuotes = (item) =>{
        setItems(items.concat(item))
    }

    const removeQuote = (id) =>{
        setItems(items.filter(item => item.id !== id))
    }
    
    useEffect(
        ()=>{
            setQuotes()
            return () => setItems([])
        }
        ,
        []
    )

    /*useEffect(
        ()=>{
            items.length !== 0 ? update
            return () => setItems([])
        }
        ,
        []
    )*/
    
    
    return (
        <Grid container
              direction="column"
              justify="space-around"
              alignItems="center"
              spacing={2}
        >
            <Grid container item xs={12}
                  justify="space-around"
                  alignItems="center">
                <AddTodo refreshData={updateQuotes}/>
            </Grid>
            <Grid item xs={12} style={{minWidth: '229px'}}>
                <List dense={false}>
                    {
                        items.map(
                            (item, index) => (
                                <Todo key={index} item={item} refreshData={removeQuote}/>
                            )
                        )
                    }
                </List>
            </Grid>
        </Grid>
        
    )
}

export default TodoList



