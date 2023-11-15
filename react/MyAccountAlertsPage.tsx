import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import MyAccountAlertsSection from './src/components/MyAccountAlert'

const MyAccountAlertsPage = (props: any) => {
  console.log("props:", props)

  return (
    <Fragment>
      <Route path="/alerts" exact component={MyAccountAlertsSection} />
    </Fragment>
  )
}

export default MyAccountAlertsPage
