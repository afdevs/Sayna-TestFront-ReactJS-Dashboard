import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
// @ts-ignore
import logo from '../../images/logo.jpg';
import visa from '../../images/visa.svg';
import mastercard from '../../images/mastercard.svg';
import mastercardActived from '../../images/mastercard.png';

import LockIcon from '@mui/icons-material/Lock';


const useStyles = makeStyles(() => createStyles({
    bankCard:{
        width: 400,
        background: 'white',
        borderRadius: '10px',
        padding: '30px',
        textAlign: 'left',
        marginBottom: 30,
        position: 'relative'
    },
    bankCard__amount:{
        fontSize: '1.3em',
        margin:'30px 0 30px'
    },
    moneySign:{
        fontWeight: 'bold'
    },
    bankCard__number:{
        margin:'20px 0 5px',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    bankCard__date:{
        fontSize: '0.9em',      
        color: 'rgba(0, 0, 0, 0.54)',
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bankCard__company:{
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bankCard__companyDetail:{
        display: 'flex',
        alignItems: 'center',
    },
    bankCard__companyText:{
        fontWeight: 'bold'
    },
    bankCard__locked:{
        color: 'rgba(0, 0, 0, 0.54)'
    },
    logo:{
        marginRight: 16,
        width: 30,
        filter: 'saturate(0)'
    },
    cardIcon:{
        marginRight: 16,
        width: 30,
    }
}))

export const BankCard = (props:{companyName: string; amount: number; cardNumber: string; expiresDate:string; logo: React.ReactNode | null, isLocked: boolean, isActive:boolean; type: string}) => {
    const classes=useStyles()
    return (
        <div className={classes.bankCard}>
            <div className={classes.bankCard__company}>
                <div className={classes.bankCard__companyDetail}>
                    <img src={logo} alt="Logo"  className={classes.logo}/> <span className={classes.bankCard__companyText}>{props.companyName}</span>
                </div>
                { props.isLocked && <LockIcon className={classes.bankCard__locked}/> }
            </div>
            <div className={classes.bankCard__amount}>
              {props.amount} <span  className={classes.moneySign}>USD</span>
            </div>
            <div className={classes.bankCard__number}>
                {props.cardNumber}
            </div>
            <div className={classes.bankCard__date}>
                {props.expiresDate}
                <img src={props.type==='mastercard' ? mastercard : visa } alt={`Card ${props.type}`} className={classes.cardIcon} style={{filter:`saturate(${props.isActive ? 1 : 0})` }}/>

            </div>
        </div>
    )
}
