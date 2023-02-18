import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Scoops = () => {
  const [cesitler, setCesitler] = useState([]);
  const [sepet, setSepet] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3030/cesitler')
      .then((res) => {
        setCesitler(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // SIFIRLAMA İŞLEMİ

  const handleReset = (param) => {
    const reseted = sepet.filter((i) => i.name !== param.name);
    setSepet(reseted);
  };

  //ADET BULMA FONK.
  const findAmount = (param) => {
    const bulundu = sepet.filter((i) => i.name === param.name);
    return bulundu.length;
  };

  return (
    <div>
      <h1 className="text-start">Dondurma Çeşitleri</h1>
      <p className="text-start">Tanesi 3$</p>
      <h2 className="text-start">Çeşitler Ücreti: {sepet.length * 3} $</h2>
      <div className="row mt-4 d-flex gap-4 p-3">
        {cesitler.map((cesit) => {
          const adet = findAmount(cesit);
          return (
            <div
              className="col-3 d-flex flex-column align-items-center"
              style={{ width: '150px' }}
            >
              <img
                id={cesit.name}
                className="w-100"
                src={cesit.imagePath}
                alt="cesit"
              />
              <label className="lead">{cesit.name}</label>

              <div className="d-flex gap-2 mt-2 align-items-center">
                <button
                  className="btn btn-danger"
                  onClick={() => handleReset(cesit)}
                >
                  Sıfırla
                </button>
                <span className="lead">{adet}</span>
                <button
                  className="btn btn-warning"
                  onClick={() => setSepet([...sepet, cesit])}
                >
                  Ekle
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scoops;
