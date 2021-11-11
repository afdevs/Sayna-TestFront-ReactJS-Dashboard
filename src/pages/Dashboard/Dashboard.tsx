import React from 'react'
import { Route } from 'react-router-dom'
import { RoutesAdmin } from '../../utils/enum/RoutesAdmin'
import { BankCardsList } from '../components/BankCardsList'
import { DashContainer } from '../components/DashContainer'
import { MenuNav } from '../components/MenuNav'
import { LimitCardsList } from '../components/LimitCardsList';
import { InternPayments } from '../components/InternPayments'
import { RecentActivities } from '../components/RecentActivities';
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => createStyles({
    interPayAndActivities:{
         display: 'flex',
         justifyContent:'space-between',
        //  alignItems: 'center'
    }
 }));
export const Dashboard = () => {
  const classes=useStyles();
    return (
        <div>
            
          <DashContainer menu={<MenuNav />} > 
          {/* toolbarMenu={<ToolbarMenu />} */} 

            {/* <Route path={RoutesAdmin.OVERVIEW} > */}
              <BankCardsList/>
            {/* </Route> */}
              <LimitCardsList/>
              <div className={classes.interPayAndActivities}>
                <InternPayments/>
                <RecentActivities />
              </div>
          </DashContainer>
        </div>
    )
}
