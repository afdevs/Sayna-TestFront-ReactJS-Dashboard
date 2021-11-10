import React from 'react'
import { Route } from 'react-router-dom'
import { RoutesAdmin } from '../../utils/enum/RoutesAdmin'
import { BankCardsList } from '../components/BankCardsList'
import { DashContainer } from '../components/DashContainer'
import { MenuNav } from '../components/MenuNav'

export const Dashboard = () => {
    return (
        <div>
            
          <DashContainer menu={<MenuNav />} > 
          {/* toolbarMenu={<ToolbarMenu />} */} 

            {/* <Route path={RoutesAdmin.OVERVIEW} > */}
              <BankCardsList/>
            {/* </Route> */}

          </DashContainer>
        </div>
    )
}
