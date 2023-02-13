import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Scoops = () => {
  const [cesitler, setCesitler] = useState([]);

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

  return (
    <div>
      <h1 className="text-start">Dondurma Çeşitleri</h1>
      <p className="text-start">Tanesi 3$</p>
      <h2 className="text-start">Çeşitler Ücreti: 0</h2>
      <div className="row mt-4 d-flex gap-4 p-3">
        {cesitler.map((cesit) => {
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
              {/*TODO ALT TAG */}
              <label className="lead">{cesit.name}</label>

              <div className="d-flex gap-2 mt-2 align-items-center">
                <button className="btn btn-danger">Sıfırla</button>
                <span className="lead">0</span>
                <button className="btn btn-warning">Ekle</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scoops;