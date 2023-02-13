import React, { useState } from 'react'

const Form = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <form className='mt-4 row justify-content-center align-items-center'>
      <div className='col-4 d-flex gap-4'>
        <input type="checkbox" id="kosullar" onChange={(e)=> setIsChecked(e.target.checked)} />
        <label htmlFor="kosullar">Kosulları okudum ve kabul ediyorum</label>
      </div>
      <button disabled={!isChecked} className="btn btn-warning col-2 col-sm-2 col-md-1"> Siparişi Onayla</button>
    </form>
  )
}

export default Form