import React from 'react'

export default function Business(props) {
    return (
      <div className="font-bold flex gap-2 text-white bg-slate-800 flex-col items-center justify-center w-60 h-96 p-8 ">
        <h4 className="font-medium">{props.card_heading}</h4>
        <span className="text-2xl">{props.card_val}</span>
        <div className="rounded-full w-24 h-24 my-6 border-4 flex justify-center items-center">
          {props.card_icon}
        </div>
        <span className="text-sm font-medium text-center">{props.status}</span>
        <span className="text-xl">{props.status_val}</span>
      </div>
  )}

