import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import ListSubheader from '@material-ui/core/ListSubheader';
import SendIcon from '@material-ui/icons/Send';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
/**import { List } from 'react-bootstrap/lib/Media';*/
import grey from '@material-ui/core/colors/grey';

import List from '@material-ui/core/List';


const useStyles = makeStyles((prop) => ({
    root: {
        width: '100%',
        height: prop.height,
        maxWidth: prop.width,
        backgroundColor: '#003458',
        color: 'white'
    },
    nested:{
        paddingLeft: prop.spacing(4),
    }
}));


function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={`Lecture ${index + 1}`} />
        </ListItem>
    );
}

renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
};


export const SideBar = (prop) => {
    const classes = useStyles(prop);
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        /**
         * <div className={classes.root}>
            <FixedSizeList height={prop.height} width={prop.width} itemSize={50} itemCount={15}>
                {renderRow}
            </FixedSizeList>
        </div>
         */
        
        <List 
            component="nav"
            /*subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Scratch
                </ListSubheader>
            }*/
            className={classes.root}
        >
            

            {/* <ListItem button>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts"/>
            </ListItem> */}
            
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Lectures" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{color:grey[50]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Lecture1"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{color:grey[50]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Lecture2"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{color:grey[50]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Lecture3"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{color:grey[50]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Lecture4"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{color:grey[50]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Lecture5"/>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}
