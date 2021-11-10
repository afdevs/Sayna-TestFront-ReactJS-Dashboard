import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
// import logo from '../../images/logo.JPG';

const useStyles = makeStyles(() => createStyles({
    bankCard:{
        width: '450px',
        background: '#ebe9e9',
        borderRadius: '10px',
        padding: '30px',
        textAlign: 'left',
        marginBottom: 30
    },
    bankCard__amount:{
        fontSize: '1.3em',
        margin:'20px 0 40px'
    },
    moneySign:{
        fontWeight: 'bold'
    },
    bankCard__number:{
        margin:'20px 0 5px'
    },
    bankCard__date:{
        fontSize: '0.9em',
    }
}))

export const BankCard = () => {
    const classes=useStyles()
    return (
        <div className={classes.bankCard}>
            {/* <img src={logo} alt="Logo" /> */}
            <div className={classes.bankCard__amount}>
                1224.42 <span  className={classes.moneySign}>USD</span>
            </div>
            <div className={classes.bankCard__number}>
                5434 3456 4344 4345
            </div>
            <div className={classes.bankCard__date}>
                04 / 04
            </div>
        </div>
    )
}
