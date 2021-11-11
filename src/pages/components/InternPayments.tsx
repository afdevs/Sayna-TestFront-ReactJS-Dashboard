import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import { IntCard } from './IntCard';

const useStyles = makeStyles(() => createStyles({
    intPaymentHeader:{
         display: 'flex',
         justifyContent:'space-between',
         alignItems: 'center'
    },
    intPaymentContainer:{
        maxWidth: 600,
        padding: '30px',
    },
    lastDays:{
        fontSize: '0.8em',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    intPaymentList:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 16
    }
 }))

const intPayementData=[
    {
        total:8, 
        processName: 'Awaiting',
        alert: false
    },
    {
        total:5, 
        processName: 'In Progress',
        alert: true
    },
    {
        total:12, 
        processName: 'Completed',
        alert: false
    },
    {
        total:4, 
        processName: 'Canceled',
        alert: false
    }
]
export const InternPayments = () => {
    const classes= useStyles();
    return (
        <div className={classes.intPaymentContainer}>
            <div className={classes.intPaymentHeader}>
                <h3> 
                In Payement</h3>
                <span className={classes.lastDays}>
                the last 30 days
                </span>

            </div>

            <div className={classes.intPaymentList}>
                {
                    intPayementData.map(el=>(<IntCard {...el}/>))
                }
            </div>
        </div>
    )
}
