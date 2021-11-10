
import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Collapse, ListItem, ListItemIcon, ListItemText, SvgIconTypeMap } from '@mui/material';
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles(() => createStyles({
    rotate90: {
        color: 'rgba(0, 0, 0, 0.54)',
        transform: "rotate(90deg)"
    },
    rotate180: {
        color: 'rgba(0, 0, 0, 0.54)',
        transform: "rotate(180deg)"
    },
    liste_item_root: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.54)'
    }
}))

export function MenuItemWithSubmenu(props: {
    isExpanded: boolean
    onClick: () => void
    keyId: string
    children: React.ReactNode
    label: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}) {
    const classes = useStyles()
    const Icon = props.icon
    
    return <>
        <ListItem 
            button
            key={props.keyId ?? Math.random}
            onClick={props.onClick}
            classes={{
                root: classes.liste_item_root
            }}
        >
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText primary={props.label}  className={classes.liste_item_root} />
            {props.isExpanded ? <ExpandLessIcon className={classes.rotate180} /> : <ExpandLessIcon className={classes.rotate90} />}
        </ListItem>
        <Collapse in={props.isExpanded} unmountOnExit>
            {props.children}
        </Collapse>
    </>
}