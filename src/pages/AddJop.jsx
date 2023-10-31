import React from 'react'
import { statusOptions, typeOptions } from '../constants/constant'
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddJop = () => {
  const navigate=useNavigate()

  const handleSubmit = (event) => {
      event.preventDefault();
      

      //form sınıfından örnek alma
     const form = new FormData(event.target)
     //formdaki verilerden obje oluşturmak
     const newjop= Object.fromEntries(form.entries());

     //select alanlarını kontrol etme
     if(!newjop.type || !newjop.status) {
      navigate("/")
      toast.info("Lütfen tip ve durum seçiniz")
      return;
     }

     //yeni işe id ekleme
     newjop.id= v4();
     //tarih ekleme
     newjop.date = new Date();

     axios.post("http://localhost:4000/jobs",newjop)
     .then(res=> {
      toast.success("Eklendi")
     })
     .catch(()=>toast.error("Ekleme işlemi başarısız"))
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
