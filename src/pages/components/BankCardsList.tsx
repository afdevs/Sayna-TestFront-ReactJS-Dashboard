import { createStyles, makeStyles } from '@mui/styles';
import React from 'react'
import { BankCard } from './BankCard';

const useStyles = makeStyles(() => createStyles({
   bankCardList:{
    display: 'flex',
    justifyContent:'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'

   }
}))
const cartLists=[0,2,3]
export const BankCardsList = () => {
    const classes=useStyles();
    return (
        <div className={classes.bankCardList}>
            {
                cartLists.map(b=>{
                    return <BankCard/>
                })
            }
        </div>
    )
}
