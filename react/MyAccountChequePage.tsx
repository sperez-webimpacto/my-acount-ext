import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import MyAccountChequeSection from './src/components/MyAccountCheque'

const MyAccountChequePage = (props: any) => {
  console.log("props:", props)

  return (
    <Fragment>
      <Route path="/cheque" exact component={MyAccountChequeSection} />
    </Fragment>
  )
}

export default MyAccountChequePage
