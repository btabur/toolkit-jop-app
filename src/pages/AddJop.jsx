import React from 'react'
import { statusOptions, typeOptions } from '../constants/constant'


const AddJop = () => {

  const handleSubmit = (event) => {
      event.preventDefault();

      //form sınıfından örnek alma
     const form = new FormData(event.target)
     const newjop= Object.fromEntries(form.entries());
  }
  return (
   <div className='add-page'>
     <section className='add-sec'>
      <h2>Yeni İş Ekle</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Position</label>
          <input type="text" name='position' required/>
        </div>
        <div>
          <label htmlFor="">Şirket</label>
          <input type="text" name='company' required/>
        </div>
        <div>
          <label htmlFor="">Lokasyon</label>
          <input type="text" name='location' required/>
        </div>
        <div>
          <label >Durum</label>
          <select name="status">
          <option selected disabled>Seçiniz</option>
            {statusOptions.map((item)=> <option key={item}>{item}</option>)}
          </select>
        </div>
        <div>
          <label>Tür</label>
          <select name="type">
            <option selected disabled>Seçiniz</option>
            {typeOptions.map((item)=> <option key={item}>{item}</option>)}
          </select>
        </div>
        <div>
          <button className='button-add'>Ekle</button>
        </div>
      </form>
      
    </section>
   </div>
  )
}

export default AddJop
