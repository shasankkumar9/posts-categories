import React from 'react'
import Select from 'react-select'
import './styles/DropDown.css'
import { useGlobalContext } from '../context'

function DropDown() {
  const { setCategory } = useGlobalContext()
  const options = [
    { value: 1, label: 'All' },
    { value: 5, label: 'Five' },
    { value: 2, label: 'Two' },
  ]
  return (
    <div className='dropdown-parent'>
      <Select
        className='drop-down'
        options={options}
        defaultValue={options[0]}
        onChange={(e) => setCategory(e.value)}
      />
    </div>
  )
}

export default DropDown