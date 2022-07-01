import React from 'react'
import Layout from '../layouts'
import MainPageContent from '../components'



export default function ContentSection() {
  return (
      <Layout>

        <section className="container mx-auto bg-zinc-900">
          <MainPageContent />
        </section>
      </Layout>
  )
}
