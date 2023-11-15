import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import MyAccountFavoritesSection from './src/components/MyAccountFavorites'

const MyAccountFavoritesPage = (props: any) => {
  console.log("props:", props)

  return (
    <Fragment>
      <Route path="/favorites" exact component={MyAccountFavoritesSection} />
    </Fragment>
  )
}

export default MyAccountFavoritesPage
