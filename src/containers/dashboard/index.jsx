import React from 'react'
import Layout from '../../layout'
// import MainPageContent from '../../components'
import { Link } from 'react-router-dom'



export default function Dashboard(props) {
  return (
    <>

    <Layout>
      <section className="bg-slate-900 w-full pt-16">

      <div className="flex justify-between m-9 mb-5">
            <h2 className="text-white font-bold text-lg">Overview dashboard</h2>
            <div className="flex gap-4 text-xs font-medium">
                <div className="flex items-center gap-5 text-gray-400 bg-slate-800 px-5 py-2.5 rounded">
                <span>7 Days</span>
                <span className="text-blue-600">1 Month</span>
                <span>3 Months</span>
                </div>
                <div className="flex items-center text-gray-400 bg-slate-800 px-5 py-2.5 rounded">
                    {/* <input type="date" name="date" id="date" /> */}
                    <i className="fa fa-calendar mr-2" aria-hidden="true"></i> 24 Mar 2019 - 24 Mar 2019 <i className="fa fa-angle-down ml-2" aria-hidden="true"></i> 
                </div>
            </div>
            </div>

            <ul className="text-white flex mx-9 gap-2 border-b mb-4 h-8 border-neutral-800">
                <li className="pr-4"> <Link to="/">Users</Link> </li>
                <li className="px-4" style={props.style}> <Link to="/business" >Business</Link> </li>
                <li className="px-4"> <Link to="/">Performance</Link> </li>
                <li className="px-4"> <Link to="/">Conversion</Link> </li>
            </ul>
      </section>
    </Layout>
    </>
  )
}
