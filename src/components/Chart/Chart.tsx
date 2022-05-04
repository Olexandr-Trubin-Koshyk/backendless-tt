import { ChartType } from "chart.js";
import React, { useState } from "react"
import { ChartRadioButton } from "../ChartDisplayChanger/ChartRadioButton";
import { ChartGraphics } from "../ChartGraphics/ChartGraphics";
import { InputChartMenu } from "../InputChartMenu/InputChartMenu"

export const Chart: React.FC = React.memo(() => {
  const [months, setMonths] = useState(['January', 'February', 'March', 'April', 'May']);
  const [valuesByMonths, setValuesByMonths] = useState(['1', '5', '10', '1', '2']);
  const [chartType, setChartType] = useState<ChartType>('line');

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    switch (event.target.value) {
      case "bar":
        setChartType('bar');
        break;
      case 'line':
        setChartType('line');
        break;
      case 'bubble':
        setChartType('bubble');
        break;
      default:
        return;
    }
  }

  return (
      <div className="chart">
        <div className="chart__inputs">
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
        </div>
        <ChartGraphics 
          chartType={chartType}
          months={months}
          valuesByMonths={valuesByMonths}
        />
        <div className="chart__radio">
          <ChartRadioButton type="line" defaultSelected={true} selector={handleSelect} />
          <ChartRadioButton type="bar" defaultSelected={false} selector={handleSelect} />
        </div>
      </div>
  )
})
