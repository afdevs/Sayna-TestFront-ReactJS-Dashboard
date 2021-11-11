import React from 'react'
// import { RouteAdmin } from '../constant/routesName';
import { MenuItemWithSubmenu } from './MenuItemWithSubmenu';
import { List } from '@mui/material';
import { MenuItem } from './MenuItem';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import { RoutesAdmin } from '../../utils/enum/RoutesAdmin';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation } from 'react-router';
import { createStyles, makeStyles } from '@mui/styles';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const useStyles = makeStyles(() => createStyles({
    listNav: {
        height: '100%',
    },
    footerNav:{
        position: 'absolute',
        bottom: 60,
        width: '100%'
    }
}));


export function MenuNav() {
    const location= useLocation();
    const [activeMenu, setActiveMenu] = React.useState<string>(location.pathname)
    const [expanded, setExpanded] = React.useState<string >(location.pathname);

    const classes = useStyles()
    
    const handleChange = (panel: string) => () => {
        setExpanded(panel)
    }

    const handleChangeActiveMenu=(menuTitle:string)=>{
        setActiveMenu(menuTitle);
    }

    return (
        <List className={classes.listNav}>
             <MenuItem 
                label="Overview"
                active={activeMenu === RoutesAdmin.OVERVIEW}
                path={RoutesAdmin.OVERVIEW}
                onClick={handleChangeActiveMenu}
                icon={HomeIcon}
            />
            <MenuItem 
               label="Cards"
               active={activeMenu === RoutesAdmin.CARDS}
               path={RoutesAdmin.CARDS}
               onClick={handleChangeActiveMenu}
               icon={MarkunreadMailboxIcon}
           />
            <MenuItemWithSubmenu
                keyId={'payments-menu'}
                onClick={handleChange('/admin/payments')}
                isExpanded={expanded.includes(RoutesAdmin.PAYMENTS)}
                icon={PaymentIcon}
                label="Overview"
            >
                <MenuItem 
                    label="History"
                    active={activeMenu === RoutesAdmin.PAYMENTS_HISTORY}
                    path={RoutesAdmin.PAYMENTS_HISTORY}
                    isSubmenu
                    onClick={handleChangeActiveMenu}
                />
            </MenuItemWithSubmenu>

            <MenuItemWithSubmenu
                keyId={'reports-menu'}
                onClick={handleChange('/admin/reports')}
                isExpanded={expanded.includes(RoutesAdmin.REPORTS)}
                icon={AssessmentIcon}
                label="Overview"
            >
                <MenuItem 
                    label="History"
                    active={activeMenu === RoutesAdmin.REPORTS_HISTORY}
                    path={RoutesAdmin.REPORTS_HISTORY}
                    isSubmenu
                    onClick={handleChangeActiveMenu}
                />
            </MenuItemWithSubmenu>

            <MenuItem 
                label="Contact"
                active={activeMenu === RoutesAdmin.CONTACTS}
                path={RoutesAdmin.CONTACTS}
                onClick={handleChangeActiveMenu}
                icon={PermContactCalendarIcon}
            />

            <div className={classes.footerNav}>
                <MenuItem 
                    label="Settings"
                    active={activeMenu === RoutesAdmin.SETTINGS}
                    path={RoutesAdmin.SETTINGS}
                    onClick={handleChangeActiveMenu}
                    icon={SettingsIcon}
                />

                <MenuItem 
                    label="account"
                    active={activeMenu === RoutesAdmin.ACCOUNT}
                    path={RoutesAdmin.ACCOUNT}
                    onClick={handleChangeActiveMenu}
                    icon={PersonOutlineIcon}
                />
            </div>
        </List>
    )
}