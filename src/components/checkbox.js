import React,{useState} from 'react'

const CheckBox = ()=>{
    const[checked,setChecked] = useState(true)
    const[checked1,setChecked1] = useState(true)
    return(
      <div>
        <label>
          <input type="checkbox"
          checked={checked}
          className="filled-in"
          onChange={()=>setChecked(!checked)}
          />
          <span>checkme!</span>
        </label>
        <label>
        <input type="checkbox"
        className="filled-in"
        checked={checked1}
        onChange={()=>setChecked1(!checked1)}
        />
        <span>checkme!</span>
      </label>
      </div>
    )
}

export default CheckBox