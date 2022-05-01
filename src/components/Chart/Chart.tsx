import React, { useState } from "react"
import { InputChartMenu } from "../InputChartMenu/InputChartMenu"

export const Chart: React.FC = React.memo(() => {
  const [months, setMonths] = useState(['January', 'February', 'March', 'April', 'May']);
  const [valuesByMonths, setValuesByMonths] = useState(['1', '5', '10', '1', '2']);

  return (
      <>
        <InputChartMenu 
          axis='X'
          value={months} 
          setValue={setMonths}
        />
        <InputChartMenu
          axis='Y' 
          value={valuesByMonths} 
          setValue={setValuesByMonths}
        />
      </>
  )
})