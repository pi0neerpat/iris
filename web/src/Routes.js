// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/tokens/new" page={NewTokenPage} name="newToken" />
      <Route path="/tokens/{id}/edit" page={EditTokenPage} name="editToken" />
      <Route path="/tokens/{id}" page={TokenPage} name="token" />
      <Route path="/tokens" page={TokensPage} name="tokens" />
      <Route path="/merchants/new" page={NewMerchantPage} name="newMerchant" />
      <Route path="/merchants/{id}/edit" page={EditMerchantPage} name="editMerchant" />
      <Route path="/merchants/{id}" page={MerchantPage} name="merchant" />
      <Route path="/merchants" page={MerchantsPage} name="merchants" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
