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
      <Route path="/transactions/new" page={NewTransactionPage} name="newTransaction" />
      <Route path="/transactions/{id}/edit" page={EditTransactionPage} name="editTransaction" />
      <Route path="/transactions/{id}" page={TransactionPage} name="transaction" />
      <Route path="/transactions" page={TransactionsPage} name="transactions" />
      <Route path="/heroes/new" page={NewHeroPage} name="newHero" />
      <Route path="/heroes/{id}/edit" page={EditHeroPage} name="editHero" />
      <Route path="/heroes/{id}" page={HeroPage} name="hero" />
      <Route path="/heroes" page={HeroesPage} name="heroes" />
      <Route path="/quests/new" page={NewQuestPage} name="newQuest" />
      <Route path="/quests/{id}/edit" page={EditQuestPage} name="editQuest" />
      <Route path="/quests/{id}" page={QuestPage} name="quest" />
      <Route path="/quests" page={QuestsPage} name="quests" />
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
