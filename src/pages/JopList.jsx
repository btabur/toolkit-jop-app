import React from 'react'
import Card from '../components/Card'
import { useEffect } from "react";
import axios  from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setJop,setError } from '../redux/jopSlice';
import Loading from '../components/Loading';
import RefresButton from '../components/RefresButton'
import Filter from '../components/Filter';

const JopList = () => {
  const dispatch = useDispatch()
  const state = useSelector((store)=> store)

  const getData = ()=> {
    axios.get('http://localhost:4000/jobs')
    .then((res) =>dispatch(setJop(res.data)) )
    .catch(()=> dispatch(setError()))
  }

  useEffect(()=> {
    getData();
   
  },[])
  return (
    <div className='list-page'>
      {state.isShowFilter &&
       <Filter/>
      }
     
      <h3 className='jop-count'>
        Bulunan {state.mainJop.length} iş arasından {state.jops.length} tane görüntüleniyor
      </h3>
      <section className='jop-list'>
          {!state.initialized && <Loading/>}
          {state.initialized && !state.isError ?  (
            state.jops.map((jop)=> <Card jop= {jop}/>)
          ):
          <p className='error-msg'>
            <span>Üzgünüz Bir hata oldu </span>
            <RefresButton handleClick={()=>getData()}/>  
            </p>}
      </section>
    </div>
  )
}

export default JopList
