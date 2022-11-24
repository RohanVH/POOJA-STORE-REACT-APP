import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import NavBar from "../components/Navbarnew";
import { useSelector, useDispatch } from "react-redux";
// import CheckoutStep from "../../Product/Cart/CheckoutStep.js"
import { savaShippingInfo } from "../redux/actions/cartAction";
import { useNavigate } from "react-router-dom";




const Checkout = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate()

  const { shippingInfo } = useSelector((state) => state.shippingDetails);

  function returnLastElement(shippingInfo) {
    return shippingInfo && shippingInfo.at(-1);
  }

  const value = returnLastElement(shippingInfo);

  //   const [name,setName] = useState(value && value.name)
  //   const [addresstype,setAddressType] = useState(value && value.addresstype)
  // const [address, setAddress] = useState(value &&  value.address)
  // const [phonenumber,setPhonenumber] = useState(value && value.phonenumber)
  // const [email,setEmail] = useState(value && value.email)
  // const [pincode,setPincode] = useState(value && value.pincode)
  // const [area,setArea] = useState(value && value.area)
  // const [city, setCity] = useState(value && value.city)
  // const [stateregion, setStateRegion] = useState(value && value.stateregion)
  // const [country, setCountry] = useState(value && value.country)
  const [address, setAddress] = useState(value && value.address)
  const [city, setCity] = useState(value && value.city)
  const [state, setState] = useState(value && value.state)
  const [country, setCountry] = useState(value && value.country)
  const [pincode, setPincode] = useState(value && value.pincode)
  const shippingSubmit = (e) => {
    e.preventDefault();
    // dispatch(savaShippingInfo({name,addresstype,address,phonenumber,email,pincode,area,city,stateregion,country}))
    dispatch(savaShippingInfo({ address, city, state, country, pincode }))

    naviagte('/user/confirm_order')
  }

  return (
    <>
      {/* <NavBar /> */}
      <div className="  w-full">
        <div className="md:m-20 border border-orange-900">
        <form action="" onSubmit={shippingSubmit} className="w-full">

          <div className="col-span-8 border  p-16 rounded ml-30 w-full ">
            <h3 className="text-3xl font-medium capitalize mb-4 text-center font-serif ">Shipping Details</h3>
            <div className="space-y-4">
              <div>
                <label className="text-gray-600 mb-2 block">
                  House/Office Name
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={address} onChange={(e) => setAddress(e.target.value)}
                />
              </div>
             
              <div>
                <label className="text-gray-600 mb-2 block">
                  Pincode
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={pincode} onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              
              <div>
                <label className="text-gray-600 mb-2 block">
                  City
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={city} onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  State_Region
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={state} onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Country
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={country} onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>

          </div>

          {/* <div className="col-span-4 w-[43rem] flex align-middle"> */}
            
          <button className="w-70 h-full bg-orange-300  button-primary flex items-end  mt-5  mx-auto" type="submit">Place Order</button>
          
            {/* </div> */}
            
      </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;