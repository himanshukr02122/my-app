import React, { Component } from 'react'
import Kebab_Icon from '../../assets/icons/more.png';
import Layout from '../../layout';
import { MainPageContent } from '../dashboard';
import BusinessChild from '../../components/business/businessCards';

const styles = {
  borderBottom:"2px solid #00FF00"
}

export default class Business extends Component {
    
    render() {
      return (
        <Layout>
          <section className="overflow-auto no-scrollbar w-full h-[91vh] mt-[9vh] py-4 bg-slate-900">

            <MainPageContent style={styles} />

            <div className="mx-9">
              <div className="grid grid-cols-4 gap-3 2xl:gap-10 justify-between my-2">
                <BusinessChild card_heading="Orders" card_val="932.00" card_icon= {[<i className="fas fa-lightbulb fa-lg fa-xl"></i>]} status="Completed" status_val="5443" />
                <BusinessChild card_heading="Unique Visitors" card_val="756,00" card_icon={[<i className="fa fa-user-circle fa-xl" aria-hidden="true"></i>]} status="Increased since yesterday" status_val="50%" />
                <BusinessChild card_heading="Impressions" card_val="100,38" card_icon={[<i className="fa-solid fa-eye fa-xl"></i>]} status="Increased since yesterday" status_val="35%" />
                <BusinessChild card_heading="Followers" card_val="4250k" card_icon={[<i className="fa-solid fa-eye fa-xl"></i>]} status="Decreased since yesterday" status_val="25%" />
              </div>
              
              <div className="bg-gray-800 text-white pb-4">
                <div className="my-6 mb-3 flex items-center justify-between">
                  <p className="p-8 pb-2 font-medium 2xl:text-xl 2xl:font-bold">Recent Activity</p>
                  <img src={Kebab_Icon} alt="" className=" w-4 mr-8 mt-10" />
                </div>

                <div className="mx-8 mb-2 flex items-center gap-12">
                    <div className="flex items-center justify-between w-[25%]">
                      <span className="text-xs xl:text-lg">Total Profit</span>
                      <span className="text-green-500 xl:text-lg"><i className="fa fa-arrow-up" aria-hidden="true"></i> 2.95%</span>
                    </div>
                  
                  <div className="flex items-center justify-between w-[75%]">
                    <div>
                      <span className="font-bold xl:text-xl">Devices sales </span>
                      <span className="font-medium text-xs xl:text-lg">( growth 62% )</span>
                    </div>
                    <div className="text-xs xl:text-base">
                      <span>Timezone: </span><span className="font-medium ml-1">GMT-0400 Eastern Delight Time</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mx-8 mt-4 xl:mt-6">
                  <span className="text-lg xl:text-xl font-bold text-white">$ 92556</span>
                  <span className="text-sm xl:text-lg font-medium mt-2"><i className="far fa-dot-circle fa-sm fa-fw text-blue mx-1"></i> Demand
                  <i className="far fa-dot-circle fa-sm fa-fw text-pink-500 mx-1"></i> Supply
                  </span>
                </div>
                
              </div>
            </div>
          
          </section>
        </Layout>
      )
    }
}

