import React from 'react'
import '../index.css';


const ListItemsMain = [
    {img:'fa fa-dashboard', title: "Dashboard"},
    {img:'fa-brands fa-delicious', title:"RTL"},
    {img:'fa-brands fa-delicious', title:"Widgets"},
    {img:'fa fa-asterisk', title:"Applications"}
]
const ListItemsUIFeatures = [
    {img:'fa fa-dashboard', title: "Basic UI Elements"},
    {img:'fa-brands fa-delicious', title:"Advanced UI"},
    {img:'fa fa-bell-slash', title:"Notifications"},
    {img:'fa-solid fa-compact-disc', title:"Icons"},
    {img:'fa fa-anchor', title:"Form elements"}

]
const ListItemsDataRepresentaion = [
    {img:'fa fa-dashboard', title: "Basic UI Elements"},
    {img:'fa-brands fa-delicious', title:"Advanced UI"},
    {img:'fa fa-bell-slash', title:"Notifications"},
    {img:'fa-solid fa-compact-disc', title:"Icons"},
    {img:'fa fa-anchor' , title:"Form elements"}

]
const ListItemsEditors = [
    {img:<i className="fa fa-dashboard" aria-hidden="true"></i>, title: "Text Editors"}
   
]
export default function Sidebar() {
  
    return (
        
    <div 
        className="overflow-auto border border-gray-800 no-scrollbar font-medium w-64 h-[91vh] mt-[9vh] pt-4 pl-2 lg:w-80 lg:pl-4 xl:pl-8 text-gray-400 bg-gray-800">
        <h3 className="text-sm xl:text-base m-2">Main</h3>
        <ul className="my-3 mb-6">
            {ListItemsMain.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-base xl:text-xl flex items-center gap-3">
                 <span 
                    className="text-green-500 bg-slate-300 bg-opacity-10 w-7 h-7 rounded flex items-center justify-center">
                        <i className={ListItem.img} aria-hidden="true"></i></span>{ListItem.title}
              </li>)
            )}
        </ul>
        <h3 className="text-sm xl:text-base m-2">UI Features</h3>
        <ul className="my-3 mb-6">
            {ListItemsUIFeatures.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-base xl:text-xl flex items-center gap-3">
                 <span 
                    className="text-green-500 bg-slate-300 bg-opacity-10 w-7 h-7 rounded flex items-center justify-center">
                        <i className={ListItem.img} aria-hidden="true"></i></span>{ListItem.title}
              </li>)
            )}
        </ul>
        <h3 className="text-sm xl:text-base m-2">Data Representation</h3>
        <ul className="my-3 mb-6">
            {ListItemsDataRepresentaion.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-base xl:text-xl flex items-center gap-3">
                 <span 
                    className="text-green-500 bg-slate-300 bg-opacity-10 w-7 h-7 rounded flex items-center justify-center">
                        <i className={ListItem.img} aria-hidden="true"></i></span>{ListItem.title}
              </li>)
            )}
        </ul>
        <h3 className="text-sm xl:text-base m-2">Editors</h3>
        <ul className="my-3 mb-6">
            {ListItemsEditors.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-base xl:text-xl flex items-center gap-3">
                 <span 
                    className="text-green-500 bg-slate-300 bg-opacity-10 w-7 h-7 rounded flex items-center justify-center">
                        {ListItem.img}</span>{ListItem.title}
              </li>)
            )}
        </ul>
    </div>
  )
}
