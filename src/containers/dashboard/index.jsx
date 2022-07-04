import React from 'react'
import Layout from '../../layout'
import MainPageContent from '../../components/mainPageContent'
// import { Link } from 'react-router-dom'



export default function Dashboard() {
  return (
    <>
    <Layout>
      <section className="bg-slate-900 w-full h-[91vh] mt-[9vh] pt-4">
        <MainPageContent />
      </section>
    </Layout>
    </>
  )
}
