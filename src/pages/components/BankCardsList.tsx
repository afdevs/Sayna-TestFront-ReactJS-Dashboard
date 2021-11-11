import { createStyles, makeStyles } from '@mui/styles';
import React from 'react'
import { BankCard } from './BankCard';

const useStyles = makeStyles(() => createStyles({
   bankCardList:{
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 10
   },
   CardlimitList:{
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: 480
   },
   newCard:{
    color: 'rgba(0, 0, 0, 0.54)',
    display: 'inline-block',
    background: '#e9ecf5',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '0.9em',
    cursor: 'pointer',
    verticalAlign: 'super',
    transition: 'background 300ms ease',
    '&:hover':{
        background: '#cfd3e1'
    }
        
   },
   plusIcon:{
    marginLeft: 16,
    fontSize: '1.5em',
    verticalAlign: 'middle'
   },
   title:{
       marginTop: 0,
       display: 'inline-block',
       marginRight: 16,
       fontSize: '2em'
   }
}))
const cardData=[{
        companyName: '',
        amount: 1224.42,
        cardNumber: '5434 3456 4344 4345',
        expiresDate: '04 / 04',
        logo: null,
        isLocked: false,
        isActive: true

    },{
        companyName: '',
        amount: 249.00,
        cardNumber: '4535 8933 1673 6770',
        expiresDate: '05 / 25',
        logo: null,
        isLocked: false,
        isActive: false

    }
    ,{
        companyName: 'Corprorate',
        amount: 249.00,
        cardNumber: '5363 7205 7398 4138',
        expiresDate: '01 / 25',
        logo: null,
        isLocked: true,
        isActive: false

    }
];
export const BankCardsList = () => {
    const classes=useStyles();
    return (
        <>
            <h2 className={classes.title}>Your cards </h2> <button className={classes.newCard}>New card <span className={classes.plusIcon}>+</span></button>
            <div className={classes.bankCardList}>
                {
                    cardData.map(el=>{
                        return <BankCard {...el} />
                    })
                }
            </div>
        </>
    )
}
