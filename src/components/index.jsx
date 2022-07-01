import React from 'react'
import Layout from '../layouts'
import PageMainContent from './PageMainContent'



export default function Main() {
  return (
      <Layout>

        <section className="container mx-auto bg-zinc-900">
          <PageMainContent />
        </section>
      </Layout>
  )
}
