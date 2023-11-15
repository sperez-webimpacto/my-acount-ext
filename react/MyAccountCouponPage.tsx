import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import MyAccountBusinessSection from './src/components/MyAccountCoupon'

const MyAccountBusinessPage = (props: any) => {
  console.log("props:", props)

  return (
    <Fragment>
      <Route path="/coupon" exact component={MyAccountBusinessSection} />
    </Fragment>
  )
}

export default MyAccountBusinessPage
