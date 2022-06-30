import React from 'react'
import Business from '../components/Business'

export default function Main() {
  return (
    <div className="container mx-auto bg-zinc-900">
        <div className="flex justify-between m-9">
            <h2 className="text-white font-bold text-lg">Overview dashboard</h2>
            <div className="flex gap-4 text-xs font-medium">
                <div className="flex items-center gap-5 text-gray-400 bg-slate-800 px-5 py-2.5 rounded">
                    <span>7 Days</span>
                    <span className="text-blue-600">1 Month</span>
                    <span>3 Months</span>

                </div>
                <div className="flex items-center text-gray-400 bg-slate-800 px-5 py-2.5 rounded">
                    {/* <input type="date" name="date" id="date" /> */}
                   <i class="fa fa-calendar mr-2" aria-hidden="true"></i> 24 Mar 2019 - 24 Mar 2019 <i class="fa fa-angle-down ml-2" aria-hidden="true"></i> 
                </div>
            </div>
        </div>

        <div className="h-[80%] overflow-auto no-scrollbar border-t m-9 border-zinc-800 pt-5">
            <div className="flex gap-5">
              <Business />
            </div>

            

        </div>
    </div>
  )
}
