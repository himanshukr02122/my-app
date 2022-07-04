import React from "react"
import { Link } from 'react-router-dom'


const MainPageContent = (props)=> {
    return (
        <>
        
          <div className="flex justify-between m-9 mb-5 2xl:mb-8">
            <h2 className="text-white font-bold text-lg 2xl:text-2xl">Overview dashboard</h2>
            <div className="flex gap-4 text-sm 2xl:text-lg font-medium">
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

            <ul className="text-white flex mx-9 gap-2 border-b mb-4 2xl:mb-8 h-8 2xl:h-10 border-neutral-800 2xl:text-xl">
                <li className="px-4 hover:border-b-2 hover:border-green-500"> <Link to="/">Users</Link> </li>
                <li className="px-4 hover:border-b-2 hover:border-green-500" style={props.style}> <Link to="/business" >Business</Link> </li>
                <li className="px-4 hover:border-b-2 hover:border-green-500"> <Link to="/">Performance</Link> </li>
                <li className="px-4 hover:border-b-2 hover:"> <Link to="/">Conversion</Link> </li>
            </ul>
            {/* 2px solid #00FF00 */}
        </>
      
    )

}
export default MainPageContent;