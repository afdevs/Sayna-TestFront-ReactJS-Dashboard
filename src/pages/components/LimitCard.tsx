import React from 'react'
// @ts-ignore
import circle from '../../images/circle.JPG';
import { createStyles, makeStyles } from '@mui/styles';
import { defaulColors } from '../../styles/defaultColors';

const useStyles = makeStyles(() => createStyles({
    cardLimit:{
        display: 'flex',
        alignItems: 'center',
        padding: '30px'

    },
    cardLimit__information:{

    },
        cardLimit__title:{
        display: 'block',
        fontWeight: 'bold',
        fontSize: '1em',
    },
    cardLimit__money:{
        fontSize: '0.7em'
    },
    cardLimit__Amount:{
        fontWeight: 'bold',
        fontSize: '1.5em',
        color: defaulColors.primary
    },
    circleIcon:{
        marginRight: 10
    }
    
}))
export const LimitCard = (props: {title:string, amount:number; limit:number}) => {
    const classes=useStyles()
    
    return (
        <div className={classes.cardLimit} >
            <img src={circle} alt="Circle stats" className={classes.circleIcon} />
            <div className={classes.cardLimit__information}>
                <span className={classes.cardLimit__title}>{props.title}</span>
                <span className={classes.cardLimit__money}> <span className={classes.cardLimit__Amount}>{`${props.amount}`} </span> {`/ ${props.limit} USD`}</span>
            </div>

        </div>
    )
}
