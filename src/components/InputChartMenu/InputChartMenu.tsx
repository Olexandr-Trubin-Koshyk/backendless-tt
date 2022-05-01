import React from "react"

interface Props {
  axis: 'X' | 'Y'; 
  value: string[];
  setValue: (s: string[]) => void;
}

export const InputChartMenu: React.FC<Props> = React.memo(({axis, value, setValue}) => {
  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.currentTarget.value 
      ? setValue(event.currentTarget.value.split(',')) 
      : setValue([]);
    } 
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
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
          onKeyPress={handlePressEnter}
          onBlur={handleBlur}
          defaultValue={value.join(', ')}
        />
      </div>
    )
})