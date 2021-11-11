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
const cartLists=[0,2,3];
export const BankCardsList = () => {
    const classes=useStyles();
    return (
        <>
            <h2 className={classes.title}>Your cards </h2> <button className={classes.newCard}>New card <span className={classes.plusIcon}>+</span></button>
            <div className={classes.bankCardList}>
                {
                    cartLists.map(b=>{
                        return <BankCard/>
                    })
                }
            </div>
        </>
    )
}
