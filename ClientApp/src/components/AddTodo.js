import React, { useState } from 'react'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

// Services
import { postFunc } from "../services/todoService";
import { NotificationManager } from 'react-notifications';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: '5px',
        outline: 'none !important'
    }
}));

const AddTodo = ({refreshData}) => {
    const classes = useStyles()

    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    
    const saveTodo = () => {
        let body = {}
        if(value !== '')
        {
            setError(false)
            body["value"] = value
            postFunc(body).then(
                data => {
                    refreshData(data)
                    setValue('')
                    NotificationManager.success("Item successfully created!")
                }
            )
        }
        else
        {
            setError(true)
        }
        
    }
        
    return (
        <form>
            <Grid item xs={12}>
                <TextField 
                    fullWidth
                    size="small"
                    variant="outlined" 
                    label="New Item"
                    error={error}
                    helperText={error && 'Please enter something'}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </Grid>
            <Grid item xs={12} className={classes.button}>
                <Button startIcon={<AddIcon />} fullWidth variant="contained" color="primary" onClick={saveTodo} className={classes.button}>
                    add
                </Button>
            </Grid>
        </form>
    )
}

export default AddTodo



