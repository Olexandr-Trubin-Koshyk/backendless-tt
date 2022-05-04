import React from "react";

interface Props {
  type: string;
  defaultSelected: boolean;
  selector: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const ChartRadioButton: React.FC<Props> = React.memo(({type, defaultSelected, selector}) => {
  return (
    <label> 
      <input 
        type="radio" 
        value={type} 
        name="chart-display-type"
        onChange={selector} 
        defaultChecked={defaultSelected}
    /> {type}
    </label>
  )
})