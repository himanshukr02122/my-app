import React from 'react'
import Layout from '../layouts'
import PageMainContent from './business/business'



export default function Business() {
  return (
      <Layout>

        <section className="container mx-auto bg-zinc-900">
          <PageMainContent />
        </section>
      </Layout>
  )
}
