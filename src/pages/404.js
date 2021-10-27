import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby";
const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to={`/`}>ホームに戻る</Link>
  </Layout>
)

export default NotFoundPage
