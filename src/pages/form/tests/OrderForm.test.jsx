import { fireEvent,render,screen } from "@testing-library/react";
import Form from "../Form";
import  userEvent  from '@testing-library/user-event';

test("onayladığında buton tıklanabili olur",async()=>{
    const user = userEvent.setup();
    render(<Form />)

    //gerekli elemenaları alalım
    const termsCheck = screen.getByRole("checkbox",{name:"Kosulları okudum ve kabul ediyorum" }) 
    const orderBtn = screen.getByRole("button",{name: /siparişi onayla/i})

    //buton inaktiftir ve checkbox tiklenmemiştir
    expect(orderBtn).toBeDisabled()
    expect(termsCheck).not.toBeChecked()

    //sözleşmeleri kabul eder
    await user.click(termsCheck);
    expect(orderBtn).toBeEnabled();

    //tekrar inaktif olur
    await user.click(termsCheck)
    expect(orderBtn).toBeDisabled()
})