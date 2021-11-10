
import { ListItem, ListItemIcon, ListItemText, SvgIconTypeMap } from '@mui/material';
import clsx from "clsx"
import { Link } from "react-router-dom";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { defaulColors } from '../../styles/defaultColors';
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles(() => createStyles({
    active: {
        color: defaulColors.primary,
        background: '#f5f8fe!important' as any,
        fontWeight: 'bold!important' as any,
        // color: '#303778'
    },
    icon_active: {
        fill: defaulColors.primary
    },
    liste_item_root: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    linkNav:{
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    sub_item_root: {
        color: 'black'
    },
    sub_item: {
        borderLeftStyle: "solid",
        borderLeftWidth: 1,
        borderLeftColor: "rgba(0, 0, 0, 0.54)",
        paddingLeft: 0,
        marginLeft: 16
    }

}))

export function MenuItem(props: {
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    label: string
    active: boolean
    onClick: (menuTitle: string) => void
    path: string
    isSubmenu?: boolean
}) {
    const classes = useStyles()
    const Icon = props.icon
    return (
        <Link to={props.path} onClick={()=>props.onClick(props.path)} className={classes.linkNav}>
            <ListItem 
                button 
                key={props.path} 
                classes={{ 
                    root: clsx({ 
                        [classes.liste_item_root]: !props.active && !props.isSubmenu, 
                        [classes.sub_item_root]: !props.active && props.isSubmenu, 
                        [classes.active]: props.active,
                        [classes.sub_item]: props.isSubmenu
                    }) 
                }}
            >
                <ListItemIcon>{Icon && <Icon className={clsx({ [classes.active]: props.active })} />}</ListItemIcon>
                <ListItemText primary={props.label} 
                classes={{ 
                    root: clsx({ 
                        [classes.active]: props.active,
                    }) 
                }}
                />
            </ListItem>
        </Link>
    )
}