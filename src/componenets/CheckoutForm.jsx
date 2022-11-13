import React from "react";

function CheckoutForm() {
  return (
    <form>
      <div className="form-control">
        <label for="form-name">Name</label>
        <input required type="text" name="name" id="form-name" />
      </div>
      <div className="form-control">
        <label for="form-email">E-mail</label>
        <input required type="email" name="email" id="form-email" />
      </div>
      <div className="form-control">
        <label for="form-address">Address</label>
        <textarea required name="address" id="form-address"></textarea>
      </div>
      <button>Pay</button>
    </form>
  );
}
//name
//email
//addres
//
export default CheckoutForm;
