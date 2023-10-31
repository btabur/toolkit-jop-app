import React from 'react'
import { sortOptions,typeOptions,statusOptions } from '../constants/constant'
import { useDispatch } from 'react-redux'
import { clearFilters, filterBySearch, filterByStatus, filterByType, showFilter, sortJops } from '../redux/jopSlice'

const Filter = () => {
const dispatch = useDispatch()

    const handleChange = (event)=> {
        dispatch(filterBySearch(event.target.value))
        
    }
    const handleReset=()=> {
        dispatch(clearFilters());
    }
    const handleClose = ()=> {
      dispatch(showFilter())
    }
  return (
    <section className='filter-sec'>
      <div className='filter-sec-header'>
        <h2>Filtreleme Formu</h2>
        <button onClick={handleClose} className='filter-close'>X</button>
      </div>
   

    <form >
      <div>
        <label>Şirket</label>
        <input onChange={handleChange} type="search" />
      </div>
     
      {/* Select */}
      <div>
        <label >Durum</label>
        <select
         onChange={(e)=>dispatch(filterByStatus(e.target.value))}>
        <option selected disabled>Seçiniz</option>
          {statusOptions.map((item)=> <option key={item}>{item}</option>)}
        </select>
      </div>
      <div>
        <label >Tür</label>
        <select
        onChange={(e)=>dispatch(filterByType(e.target.value))} >
        <option selected disabled>Seçiniz</option>
          {typeOptions.map((item)=> <option key={item}>{item}</option>)}
        </select>
      </div>
      <div>
        <label>Sırala</label>
        <select
           onChange={(e)=>dispatch(sortJops(e.target.value))} >
          <option selected disabled>Seçiniz</option>
          {sortOptions.map((item)=> <option key={item}>{item}</option>)}
        </select>
      </div>
      <div>
        <button onClick={handleReset} type='button' className='button-add'>Sıfırla</button>
      </div>
    </form>
    
  </section>
  )
}

export default Filter
