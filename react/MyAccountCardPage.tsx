import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import MyAccountCardSection from './src/components/MyAccountCard'

const MyAccountCardPage = (props: any) => {
  console.log("props:", props)

  return (
    <Fragment>
      <Route path="/card" exact component={MyAccountCardSection} />
    </Fragment>
  )
}

export default MyAccountCardPage
