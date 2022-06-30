import React from 'react'
import Business from '../components/Business';
import Kebab_Icon from '../assets/icons/more.png';

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
                   <i className="fa fa-calendar mr-2" aria-hidden="true"></i> 24 Mar 2019 - 24 Mar 2019 <i className="fa fa-angle-down ml-2" aria-hidden="true"></i> 
                </div>
            </div>
        </div>

        <div className="h-[80%] overflow-auto no-scrollbar border-t m-9 border-zinc-800 pt-5">
            <div className="flex justify-between my-2">
              <Business card_heading="Orders" card_val="932.00" card_icon= {[<i className="fas fa-lightbulb fa-lg fa-xl"></i>]} status="Completed" status_val="5443" />
              <Business card_heading="Unique Visitors" card_val="756,00" card_icon={[<i className="fa fa-user-circle fa-xl" aria-hidden="true"></i>]} status="Increased since yesterday" status_val="50%" />
              <Business card_heading="Impressions" card_val="100,38" card_icon={[<i className="fa-solid fa-eye fa-xl"></i>]} status="Increased since yesterday" status_val="35%" />
              <Business card_heading="Followers" card_val="4250k" card_icon={[<i className="fa-solid fa-eye fa-xl"></i>]} status="Decreased since yesterday" status_val="25%" />
            </div>
            
            <div className="bg-slate-800 text-white pb-4">
              <div className="my-6 mb-3 flex items-center justify-between">
                <p className="p-8 pb-2 font-medium">Recent Activity</p>
                <img src={Kebab_Icon} alt="" className=" w-4 mr-8 mt-10" />
              </div>

              <div className="mx-8 flex items-center gap-12">
                  <div className="flex items-center justify-between w-[25%]">
                    <span className="text-xs">Total Profit</span>
                    <span className="text-green-500"><i className="fa fa-arrow-up" aria-hidden="true"></i> 2.95%</span>
                  </div>
                
                <div className="flex items-center justify-between w-[75%]">
                  <div>
                    <span className="font-bold">Devices sales </span>
                    <span className="font-medium text-xs">( growth 62% )</span>
                  </div>
                  <div className="text-xs">
                    <span>Timezone: </span><span className="font-medium ml-1">GMT-0400 Eastern Delight Time</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mx-8">
                <span className="text-lg font-bold text-white">$92556</span>
                <span className="text-sm font-medium mt-2"><i className="far fa-dot-circle fa-sm fa-fw text-purple-800 mx-1"></i> Demand
                <i className="far fa-dot-circle fa-sm fa-fw text-pink-500 mx-1"></i> Supply
                </span>
              </div>

            </div>
        </div>
    </div>
  )
}
