import React from "react"

const BusinessChild= (props)=> {
    return (
      <div className="font-bold flex gap-2 text-white bg-gray-800 flex-col items-center justify-start h-100 p-8 ">
        <h4 className="font-medium 2xl:text-xl">{props.card_heading}</h4>
        <span className="text-2xl 2xl:text-3xl">{props.card_val}</span>
        <div className="rounded-full w-24 h-24 2xl:w-32 2xl:h-32 my-6 border-4 flex justify-center items-center">
          {props.card_icon}
        </div>
        <span className="text-sm xl:text-lg font-medium text-center">{props.status}</span>
        <span className="text-xl 2xl:text-2xl">{props.status_val}</span>
      </div>
  )}

  export default BusinessChild;