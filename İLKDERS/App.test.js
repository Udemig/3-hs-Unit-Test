import { fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';


//TDD (TEST DRIVEN DEVELOPMENT) ilk test  // red-green test

//BDD (BEHAVIOUR DRIVEN DEVELOPMENT) ilk kod

test("buton doğru renge sahip" , () => {
  render(<App />)

  //elemneti seçme işlemi
  const colorBtn = screen.getByRole("button", {name:"Change to blue"})  //selectors (seçiciler)

  // buton ekrana basıldıuğında kırmızı olur
  expect(colorBtn).toHaveStyle({backgroundColor: "red"});

  //butına tıklam işlemi
  fireEvent.click(colorBtn)

  //butona tılkandıktan sonra mavi olur
  expect(colorBtn).toHaveStyle({backgroundColor:"blue"})

  //içindeki yazı doğru şekilde değişir
  expect(colorBtn).toHaveTextContent("Change to red")
} )


test("checbox tiklendiğinde buton inaktif olur" , () => {
  render(<App />)
  const colorBtn = screen.getByRole("button",{name: /change to blue/i })
  expect(colorBtn).toBeEnabled()

 // CHECBOX KISMI
  const checkbox = screen.getByRole("checkbox")
  fireEvent.click(checkbox)

  //tiklendikten sonra butan  inaktif olur
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({backgroundColor:"gray"})

  // tiki geri alır ve buton tekrar kırmızı olur
  fireEvent.click(checkbox)
  expect(colorBtn).toBeEnabled()
  expect(colorBtn).toHaveStyle({backgroundColor: "red"})
})