import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import { Transaction } from './Transaction';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles(() => createStyles({
    recentActivityHeader:{
         display: 'flex',
         justifyContent:'space-between',
         alignItems: 'center'
    },
    buttonActivityContainer:{
        fontSize: '0.8em'
    },
    viewOnReport:{
        display: 'inline-block',
        background: '#e9ecf5',
        padding: '8px 15px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '0.9em',
        cursor: 'pointer',
        verticalAlign: 'super',
        transition: 'background 300ms ease',
        color: 'rgba(0, 0, 0, 0.54)',
        '&:hover':{
            background: '#cfd3e1'
        }
    },
    transactionList:{
        marginBottom: 16
    },
    recentActivity:{
        width: 600,
        padding: 30
    },
    activityDate:{
        fontSize: '0.9em',
        color: 'rgba(0, 0, 0, 0.54)'
    }
 }));

const transtionsData=[
    {
        isTransaction: true,
        username: 'Martin Michel', 
        status: 'sent',
        amount: -3.00052,
        moneySign: 'USD',
        icon:   <SendIcon/>
    },
    {
        isTransaction: true,
        username: 'Jane Klamberberg', 
        status: 'sent',
        amount: -1.0023,
        moneySign: 'USD',
        icon:   <SendIcon/>
    },

    {
        isTransaction: false,
        operationName: 'EURO to USD', 
        status: 'sent',
        amount: -3.00052,
        moneySign: 'USD',
        icon:   <PublishedWithChangesIcon/>
    },
    
]
export const RecentActivities = () => {
    const classes = useStyles();
    return (
        <div className={classes.recentActivity}>
            <div className={classes.recentActivityHeader}>
                <h3> 
                Recent Activities</h3>
                <span className={classes.buttonActivityContainer}>
                <button className={classes.viewOnReport}>View on report</button>
                </span>
            </div>
            <span className={classes.activityDate}>
                Today
            </span>
            <div className={classes.transactionList}>
                {
                    transtionsData.map(el=>(<Transaction {...el}/>))
                }
            </div>
            <span className={classes.activityDate}>
                Yesterday
            </span>

        </div>
    )
}
