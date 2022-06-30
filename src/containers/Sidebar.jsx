import React from 'react'
import Application_Icon from '../assets/icons/application.png'
const ListItemsMain = [
    {img:<i className="fa fa-dashboard" aria-hidden="true"></i>, title: "Dashboard"},
    {img:<i className="fa-brands fa-delicious"></i>, title:"RTL"},
    {img:<i className="fa-brands fa-delicious"></i>, title:"Widgets"},
    {img: <img src={Application_Icon} alt="icon" width="16" />, title:"Applications"}
]
const ListItemsUIFeatures = [
    {img:<i className="fa fa-dashboard" aria-hidden="true"></i>, title: "Basic UI Elements"},
    {img:<i className="fa-brands fa-delicious"></i>, title:"Advanced UI"},
    {img: <i class="fa fa-bell-slash" aria-hidden="true"></i>, title:"Notifications"},
    {img:<i class="fa-solid fa-compact-disc"></i>, title:"Icons"},
    {img:<i class="fa fa-anchor" aria-hidden="true"></i> , title:"Form elements"}

]
const ListItemsDataRepresentaion = [
    {img:<i className="fa fa-dashboard" aria-hidden="true"></i>, title: "Basic UI Elements"},
    {img:<i className="fa-brands fa-delicious"></i>, title:"Advanced UI"},
    {img: <i class="fa fa-bell-slash" aria-hidden="true"></i>, title:"Notifications"},
    {img:<i class="fa-solid fa-compact-disc"></i>, title:"Icons"},
    {img:<i class="fa fa-anchor" aria-hidden="true"></i> , title:"Form elements"}

]
const ListItemsEditors = [
    {img:<i className="fa fa-dashboard" aria-hidden="true"></i>, title: "Text Editors"}
   
]
export default function Sidebar() {
  
    return (
    <div className="h-[92vh] overflow-auto border border-slate-800 w-1/5 pt-6 pl-6 text-gray-400 bg-slate-800">
        <h3 className="text-xs m-2">Main</h3>
        <ul className="my-3 mb-6">
            {ListItemsMain.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-xs flex items-center gap-3">
                 <span 
                    className="text-green-500 text-xs bg-slate-300 bg-opacity-10 w-6 h-6 rounded flex items-center justify-center">
                        {ListItem.img}</span>{ListItem.title}
              </li>)
            )}
        </ul>
        <h3 className="text-xs m-2">UI Features</h3>
        <ul className="my-3 mb-6">
            {ListItemsUIFeatures.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-xs flex items-center gap-3">
                 <span 
                    className="text-green-500 text-xs bg-slate-300 bg-opacity-10 w-6 h-6 rounded flex items-center justify-center">
                        {ListItem.img}</span>{ListItem.title}
              </li>)
            )}
        </ul>
        <h3 className="text-xs m-2">Data Representation</h3>
        <ul className="my-3 mb-6">
            {ListItemsDataRepresentaion.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-xs flex items-center gap-3">
                 <span 
                    className="text-green-500 text-xs bg-slate-300 bg-opacity-10 w-6 h-6 rounded flex items-center justify-center">
                        {ListItem.img}</span>{ListItem.title}
              </li>)
            )}
        </ul>
        <h3 className="text-xs m-2">Editors</h3>
        <ul className="my-3 mb-6">
            {ListItemsEditors.map((ListItem)=> 
             (<li key={ListItem.title} className="m-2 mt-4 text-xs flex items-center gap-3">
                 <span 
                    className="text-green-500 text-xs bg-slate-300 bg-opacity-10 w-6 h-6 rounded flex items-center justify-center">
                        {ListItem.img}</span>{ListItem.title}
              </li>)
            )}
        </ul>
    </div>
  )
}
