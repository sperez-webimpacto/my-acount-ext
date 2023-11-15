import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import MyAccountProductsSection from './src/components/MyAccountProducts'

const MyAccountProductsPage = (props: any) => {
  console.log("props:", props)

  return (
    <Fragment>
      <Route path="/products" exact component={MyAccountProductsSection} />
    </Fragment>
  )
}

export default MyAccountProductsPage
