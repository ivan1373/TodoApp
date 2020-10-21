import React from 'react'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DeleteIcon from '@material-ui/icons/Delete';


// Services
import { deleteFunc } from "../services/todoService";
import { NotificationManager } from 'react-notifications';


const useStyles = makeStyles((theme) => ({
    button: {
        outline: 'none !important'
    }
}));

const Todo = ({item, refreshData}) => {
    const classes = useStyles()
    
    const deleteQuote = id => {
        deleteFunc(id).then(
            () => {
                refreshData(id)
                NotificationManager.success('Item successfully removed!')
            }
        )
    }

    return (
        <>
            {
                item && 
                <ListItem divider={true}>
                    <ListItemAvatar>
                        <Avatar>
                            <FormatListBulletedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.value}
                    />
                    <ListItemSecondaryAction>
                        <IconButton disableFocusRipple={true} onClick={()=>deleteQuote(item.id)} size="small" className={classes.button}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            }
        </>
    )
}

export default Todo



