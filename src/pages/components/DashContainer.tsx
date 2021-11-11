import { CssBaseline, Drawer, Theme } from "@mui/material";
import React from "react";
import clsx from 'clsx';
import { makeStyles, createStyles } from "@mui/styles";

const drawerWidth = 250

const useStyles = makeStyles((theme:Theme) => createStyles ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: 'white',
        boxShadow: 'none',
        color: 'rgba(0, 0, 0, 0.54)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 4,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        paddingTop: 72, // appBar height + paddingTop of first content of link
        position: 'relative',
        height: '100vh'
    },
    drawerOpen: {
        paddingTop: 72, // appBar height + paddingTop of first content of link
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        left: 'inherit!important' as any,
        border: 'none!important' as any,
        borderRadius: 5,
        padding: '15px 20px 15px 10px!important' as any,
    },
    drawerClose: {
        paddingTop: 72, // appBar height + paddingTop of first content of link
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar_root: {
        justifyContent: 'space-between'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        
    },
    toolbar_menu: {
        display: 'flex',
        alignItems: 'center',
    },
    content: {
        background: '#f9fbff',
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export function DashContainer(props: {
    children: React.ReactNode
    menu: React.ReactNode
    toolbarMenu?: React.ReactNode
}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true)
    const handleToggleDrawer = () => {
        setOpen(open => !open)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })
                }}
            >
                {props.menu}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    )
}