import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import MyAccountOrdersSection from './src/components/MyAccountPages/Orders/OrdersPage/'

const MyAccountOrdersPage = (props: any) => {
  console.log("Business props:", props)

  return (
    <Fragment>
      <Route path="/giftcards" exact component={MyAccountOrdersSection} />
    </Fragment>
  )
}

export default MyAccountOrdersPage
