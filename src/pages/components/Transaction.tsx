import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
    transaction:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    transactionIcon:{
        height: 60,
        width: 60,
        transform: 'rotate(-34deg)',
        marginLeft: 7,
        marginRight: 12,
        paddingTop: 3,
        color: 'rgba(0, 0, 0, 0.54)'
    },
    transactionInfos:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%'
    },
    transactionUser:{

    },
    transactionUsername:{
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'rgba(0, 0, 0, 0.54)'
    },
    transactionStatus:{
        fontSize: '0.9em',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    transactionDetail:{
        fontSize: '1.4em',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    transactionAmount:{
        marginRight: 5

    },
    transactionMoneySign:{
        fontWeight: 'bold'
    }
 }));

export const Transaction = (props: { isTransaction: boolean; operationName?:string; username?: string; status: string, amount: number, moneySign: string; icon: React.ReactNode}) => {
    const classes = useStyles();
    return (
        <div className={classes.transaction}>
            <div className={classes.transactionIcon}>
              {props.icon}
            </div>
            
            <div className={classes.transactionInfos}>

            <div className={classes.transactionUser}>
                <div className={classes.transactionUsername}>{ props.isTransaction && ('To') } {props.isTransaction ? props.username : props.operationName}</div>
                <div className={classes.transactionStatus}>{props.status}</div>
            </div>
            <div className={classes.transactionDetail}>
                <span className={classes.transactionAmount}>{props.amount}</span>
                <span className={classes.transactionMoneySign}>{props.moneySign}</span>
            </div>


            </div>
        </div>
    )
}
