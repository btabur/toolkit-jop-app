import React from 'react'

const AddJop = () => {

  const handleSubmit = () => {

  }
  return (
    <section>
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
      </form>
      
    </section>
  )
}

export default AddJop
