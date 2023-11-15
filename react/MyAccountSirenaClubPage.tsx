import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import MyAccountBusinessSection from './src/components/MyAccountPages/Business/BusinessPage'

const MyAccountBusinessPage = (props: any) => {
  console.log("Business props:", props)

  return (
    <Fragment>
      <Route path="/sirenaclub" exact component={MyAccountBusinessSection} />
    </Fragment>
  )
}

export default MyAccountBusinessPage
