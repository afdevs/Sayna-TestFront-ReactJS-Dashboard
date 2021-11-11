import { createStyles, makeStyles } from '@mui/styles';
import ErrorIcon from '@mui/icons-material/Error';
import React from 'react';
const useStyles = makeStyles(() => createStyles({
    intCard:{
        width: 135,
        textAlign: 'center',
        padding: '25px 0px',
        borderLeft:'1px solid #e1dede87',
        position: 'relative',
        '&:last-child':{
            borderRight: '1px solid #e1dede87',
        }
    },
    intTpaymentHeader:{
         display: 'flex',
         justifyContent:'space-between',
         alignItems: 'center'
    },
    intPaymentContainer:{
        maxWidth: 480,
        padding: '30px',
    },
    lastDays:{
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginBottom:10
    },
    processName:{
        fontSize: '1em',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    intCard__error:{
        color: 'red',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    intCard_errorIcon:{
        fontSize: '2.2em!important' as any
    }
 }))

export const IntCard = (props:{total:number; processName:string; alert:boolean}) => {
    const classes=useStyles();
    return (
        <div className={classes.intCard}>
            {
                props.alert &&
                <div className={classes.intCard__error}>
                    <ErrorIcon className={classes.intCard_errorIcon} />
                </div>
            }
            <div className={classes.lastDays}>
               {props.total}
            </div>
            <div className={classes.processName}>
                {props.processName}
            </div>
            
        </div>
    )
}
