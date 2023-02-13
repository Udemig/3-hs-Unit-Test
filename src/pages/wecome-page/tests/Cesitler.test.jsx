import { findAllByRole, render, screen } from '@testing-library/react';
import Scoops from './../Scoops';
/*
!SEÇİCİLER
? Komut [All] BySeçici
! komut > get  / find / query
! get =>  elementler DOMda var ise kullanılır
! find => elementlerin ne zaman geliceği belli değilse //async
! query => elementler DOM da yok ise  
*/

test('API den gelen veri her çeşit için ekrana basılır', async () => {
  render(<Scoops />);

  //çeşitlerde resimleri çek
  const resimler = await screen.findAllByRole('img', { name: 'cesit' }); //selectors
});
