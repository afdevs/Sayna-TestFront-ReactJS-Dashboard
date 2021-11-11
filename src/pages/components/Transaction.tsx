import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
    transaction:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    transactionIcon:{
        height: 50,
        transform: 'rotate(-34deg)',
        marginLeft: 5,
        marginRight: 16,
        paddingTop: 10,
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
        marginBottom: 5
    },
    transactionStatus:{
        fontSize: '0.9em',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    transactionDetail:{
        fontSize: '1.4em'

    },
    transactionAmount:{
        marginRight: 5

    },
    transactionMoneySign:{
        fontWeight: 'bold'
    }
 }));

export const Transaction = () => {
    const classes = useStyles();
    return (
        <div className={classes.transaction}>
            <div className={classes.transactionIcon}>
                <SendIcon/>
            </div>
            
            <div className={classes.transactionInfos}>

            <div className={classes.transactionUser}>
                <div className={classes.transactionUsername}>To martin Michel</div>
                <div className={classes.transactionStatus}>sent</div>
            </div>
            <div className={classes.transactionDetail}>
                <span className={classes.transactionAmount}>-3,00052</span>
                <span className={classes.transactionMoneySign}>USD</span>
            </div>


            </div>
        </div>
    )
}
