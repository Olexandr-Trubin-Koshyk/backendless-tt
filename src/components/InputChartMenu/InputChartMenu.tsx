import React from "react"

interface Props {
  axis: 'X' | 'Y'; 
  value: string[];
  setValue: (s: string[]) => void;
}

export const InputChartMenu: React.FC<Props> = React.memo(({axis, value, setValue}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value 
      ? setValue(event.target.value.split(',')) 
      : setValue([]);
  }
    return (
      <div className="inputMenu">
        <p className="inputMenu__title">
          {`${axis} axis labels:`}
        </p>
        <input 
        className={axis === 'X' ? 'inputMenu__months' : 'inputMenu__valuesByMonths'}
        onChange={handleChange}
        defaultValue={value.join(', ')}
      />
      </div>
    )
})