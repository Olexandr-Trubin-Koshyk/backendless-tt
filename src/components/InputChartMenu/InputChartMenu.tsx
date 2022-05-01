import React from "react"

interface Props {
  asix: 'x' | 'y'; 
  value: string[];
  setValue: (s: string[]) => void;
}

export const InputChartMenu: React.FC<Props> = React.memo(({asix, value, setValue}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value 
      ? setValue(event.target.value.split(',')) 
      : setValue([]);
  }
    return (
      <input 
        className={asix === 'x' ? 'inputMenu__months' : 'inputMenu__valuesByMonths'}
        onChange={handleChange}
        defaultValue={value.join(', ')}
      />
    )
})