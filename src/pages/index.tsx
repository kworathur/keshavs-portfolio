import * as React from 'react'
import Layout from '../components/Layout/Layout';


const IndexPage = () => {
  return (
    <Layout>
      <h1>Keshav's Portfolio Site</h1>
      <p>Fourth-Year Computer Science Specialist at UofT.</p>
    </Layout>
  )
}


export const Head = () => (
  <>
    <title>Keshav Worathur</title>
    <meta name="description" content="Keshav Worathur's Portfolio. Keshav Worathur is a fourth year computer science specialist at Uoft" />
  </>
);


export default IndexPage