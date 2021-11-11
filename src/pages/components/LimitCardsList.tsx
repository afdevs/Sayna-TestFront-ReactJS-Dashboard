import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import { LimitCard } from './LimitCard'

const useStyles = makeStyles(() => createStyles({
    CardlimitList:{
         display: 'flex',
         justifyContent:'space-between',
         alignItems: 'center',
         flexWrap: 'wrap',
         maxWidth: 600,
    }
 }))
const cardLimitList=[{
    title: 'Credit limit',
    amount: 1500,
    limit: 2000
},{
    title: 'Online limit',
    amount: 1324,
    limit: 1500
}]

export const LimitCardsList = () => {
    const classes= useStyles();
    
    return (
        <div className={classes.CardlimitList}>
            {
                cardLimitList.map(el=>{
                    return   <LimitCard {...el} />
                })
            }
        </div>
    )
}
