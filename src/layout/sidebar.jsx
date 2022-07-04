import React from 'react'
import Application_Icon from '../assets/icons/application.png'
import '../index.css';


const ListItemsMain = [
    {img:<i className="fa fa-dashboard" aria-hidden="true"></i>, title: "Dashboard"},
    {img:<i className="fa-brands fa-delicious"></i>, title:"RTL"},
    {img:<i className="fa-brands fa-delicious"></i>, title:"Widgets"},
    {img: <img src={Application_Icon} alt="icon" width="16" />, title:"Applications"}
]
const ListItemsUIFeatures = [
    {img:<i className="fa fa-dashboard" aria-hidden="true"></i>, title: "Basic UI Elements"},
    {img:<i className="fa-brands fa-delicious"></i>, title:"Advanced UI"},
    {img:<i className="fa fa-bell-slash" aria-hidden="true"></i>, title:"Notifications"},
    {img:<i className="fa-solid fa-compact-disc"></i>, title:"Icons"},
    {img:<i className="fa fa-anchor" aria-hidden="true"></i> , title:"Form elements"}

]
const ListItemsDataRepresentaion = [
    {img:<i className="fa fa-dashboard" aria-hidden="true"></i>, title: "Basic UI Elements"},
    {img:<i className="fa-brands fa-delicious"></i>, title:"Advanced UI"},
    {img:<i className="fa fa-bell-slash" aria-hidden="true"></i>, title:"Notifications"},
    {img:<i className="fa-solid fa-compact-disc"></i>, title:"Icons"},
    {img:<i className="fa fa-anchor" aria-hidden="true"></i> , title:"Form elements"}

]
const ListItemsEditors = [
    {img:<i className="fa fa-dashboard" aria-hidden="true"></i>, title: "Text Editors"}
   
]
export default function Sidebar() {
  
    return (
    <div 
        className="overflow-auto border border-slate-800 no-scrollbar font-medium w-64 mt-14 pt-4 pl-2 lg:w-80 lg:pl-4 xl:pl-8 text-gray-400 bg-slate-800">
        <h3 className="text-sm xl:text-base m-2">Main</h3>
        <ul className="my-3 mb-6">
            {ListItemsMain.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-base xl:text-xl flex items-center gap-3">
                 <span 
                    className="text-green-500 bg-slate-300 bg-opacity-10 w-6 h-6 rounded flex items-center justify-center">
                        {ListItem.img}</span>{ListItem.title}
              </li>)
            )}
        </ul>
        <h3 className="text-sm xl:text-base m-2">UI Features</h3>
        <ul className="my-3 mb-6">
            {ListItemsUIFeatures.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-base xl:text-xl flex items-center gap-3">
                 <span 
                    className="text-green-500 bg-slate-300 bg-opacity-10 w-6 h-6 rounded flex items-center justify-center">
                        {ListItem.img}</span>{ListItem.title}
              </li>)
            )}
        </ul>
        <h3 className="text-sm xl:text-base m-2">Data Representation</h3>
        <ul className="my-3 mb-6">
            {ListItemsDataRepresentaion.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-base xl:text-xl flex items-center gap-3">
                 <span 
                    className="text-green-500 bg-slate-300 bg-opacity-10 w-6 h-6 rounded flex items-center justify-center">
                        {ListItem.img}</span>{ListItem.title}
              </li>)
            )}
        </ul>
        <h3 className="text-sm xl:text-base m-2">Editors</h3>
        <ul className="my-3 mb-6">
            {ListItemsEditors.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-base xl:text-xl flex items-center gap-3">
                 <span 
                    className="text-green-500 bg-slate-300 bg-opacity-10 w-6 h-6 rounded flex items-center justify-center">
                        {ListItem.img}</span>{ListItem.title}
              </li>)
            )}
        </ul>
    </div>
  )
}
