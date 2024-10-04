/* eslint-disable no-unused-vars */
// single selection

import { useState } from "react";
import data from "./data";

// multi selection
const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        // console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    function handleMultiSelection(getCurrentId){
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)    
        else  copyMultiple.splice(findIndexOfCurrentId, 1)  
        setMultiple(copyMultiple)
    }

  return (
  <div className=" bg-neutral-900 flex flex-col justify-evenly py-2 items-center">
    <button className="bg-violet-700 w-fit py-2 px-4 rounded-md font-bold text-neutral-300 cursor-pointer" 
    onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
    </button>
      <div className=" py-4 w-full flex flex-col items-center justify-center " key="data">  
        {
          data && data.length > 0 ? data.map((dataItem ) =>
           (      
           <div className=" w-full md:w-[40%] bg-violet-950 py-4 px-6 flex flex-col items-center mb-3 justify-between gap-4 border-[1px] border-violet-700" key="">
            <div className=" flex items-center justify-between px-3  py-5  w-full cursor-pointer" 
            onClick={enableMultiSelection 
            ? () => handleMultiSelection(dataItem.id) 
            : () => handleSingleSelection(dataItem.id)}>
                <h3 className="title font-semibold text-neutral-200" key="title">{dataItem .title}</h3>
                <span className="title font-bold text-neutral-200">+</span>
            </div>
            {
                enableMultiSelection ? multiple.indexOf(dataItem.id) != -1 &&
                <div className="desc font-thin text-sm text-neutral-400"><p key="desc">{dataItem.desc}</p></div> : selected === data.id &&
                <div className="desc font-thin text-sm text-neutral-400"><p key="desc">{dataItem.desc}</p></div>
            }
            {/* {selected === dataItem.id || multiple.indexOf(dataItem.id != -1) ? <div className="desc font-thin text-sm text-neutral-400"><p key="desc">{dataItem.desc}</p></div>: null} */}
           
           </div>
            )) : ( <div>No data found !</div> ) 
        }
      </div>
      </div>
  )
}

export default Accordian
