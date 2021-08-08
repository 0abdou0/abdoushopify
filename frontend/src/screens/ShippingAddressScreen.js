import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
  const userAddressMap = useSelector((state) => state.userAddressMap);
  const { address: addressMap } = userAddressMap;

  if (!userInfo) {
    props.history.push("/signin");
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [number, setNumber] = useState(shippingAddress.number);
  const [state, setWilaya] = useState(shippingAddress.state);
  const [price, setPrice] = useState(shippingAddress.price);
  const dispatch = useDispatch();
  const updateStatePrice = async (e) => {
    setWilaya(e.target.value);
    setPrice(e.target.selectedOptions[0].getAttribute("price"));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newLat = addressMap ? addressMap.lat : lat;
    const newLng = addressMap ? addressMap.lng : lng;
    if (addressMap) {
      setLat(addressMap.lat);
      setLng(addressMap.lng);
    }
    let moveOn = true;
    if (!newLat || !newLng) {
      moveOn = window.confirm(
        "You did not set your location on map. Continue?"
      );
    }
    if (moveOn) {
      dispatch(
        saveShippingAddress({
          fullName,
          address,
          city,
          number,
          postalCode,
          state,
          price,
          lat: newLat,
          lng: newLng,
        })
      );
      props.history.push("/payment");
    }
  };
  const chooseOnMap = () => {
    dispatch(
      saveShippingAddress({
        fullName,
        address,
        city,
        number,
        postalCode,
        state,
        price,
        lat,
        lng,
      })
    );
    props.history.push("/map");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="number">Phone number</label>
          <input
            type="text"
            id="number"
            placeholder="Enter phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <select id="state" value={state} onChange={updateStatePrice} required>
            <option
              value="Adrar"
              price={cart.cartItems[0].seller.seller.shipping.Adrar}
            >
              Adrar
            </option>

            <option
              value="Chlef"
              price={cart.cartItems[0].seller.seller.shipping.Chlef}
            >
              Chlef
            </option>

            <option
              value="	Laghouat"
              price={cart.cartItems[0].seller.seller.shipping.Laghouat}
            >
              Laghouat
            </option>
            <option
              value="OumElBouaghi"
              price={cart.cartItems[0].seller.seller.shipping.OumElBouaghi}
            >
              OumElBouaghi
            </option>

            <option
              value="	Batna"
              price={cart.cartItems[0].seller.seller.shipping.Batna}
            >
              Batna
            </option>
            <option
              value="	Béjaïa"
              price={cart.cartItems[0].seller.seller.shipping.Béjaïa}
            >
              Béjaïa
            </option>

            <option
              value="Biskra"
              price={cart.cartItems[0].seller.seller.shipping.Biskra}
            >
              Biskra
            </option>

            <option
              value="	Béchar"
              price={cart.cartItems[0].seller.seller.shipping.Béchar}
            >
              Béchar
            </option>

            <option
              value="	Blida"
              price={cart.cartItems[0].seller.seller.shipping.Blida}
            >
              Blida
            </option>

            <option
              value="Bouira"
              price={cart.cartItems[0].seller.seller.shipping.Bouira}
            >
              Bouira
            </option>

            <option
              value="Tamanrasset"
              price={cart.cartItems[0].seller.seller.shipping.Tamanrasset}
            >
              Tamanrasset
            </option>

            <option
              value="	Tébessa"
              price={cart.cartItems[0].seller.seller.shipping.Tébessa}
            >
              Tébessa
            </option>

            <option
              value="Tlemcen"
              price={cart.cartItems[0].seller.seller.shipping.Tlemcen}
            >
              Tlemcen
            </option>

            <option
              value="	Tiaret"
              price={cart.cartItems[0].seller.seller.shipping.Tiaret}
            >
              Tiaret
            </option>

            <option
              value="TiziOuzou"
              price={cart.cartItems[0].seller.seller.shipping.TiziOuzou}
            >
              TiziOuzou
            </option>

            <option
              value="Alger"
              price={cart.cartItems[0].seller.seller.shipping.Alger}
            >
              Alger
            </option>

            <option
              value="Djelfa"
              price={cart.cartItems[0].seller.seller.shipping.Djelfa}
            >
              Djelfa
            </option>

            <option
              value="Jijel"
              price={cart.cartItems[0].seller.seller.shipping.Jijel}
            >
              Jijel
            </option>

            <option
              value="Sétif"
              price={cart.cartItems[0].seller.seller.shipping.Sétif}
            >
              Sétif
            </option>

            <option
              value="Saïda"
              price={cart.cartItems[0].seller.seller.shipping.Saïda}
            >
              Saïda
            </option>

            <option
              value="Skikda"
              price={cart.cartItems[0].seller.seller.shipping.Skikda}
            >
              Skikda
            </option>

            <option
              value="SidiBelAbbès"
              price={cart.cartItems[0].seller.seller.shipping.SidiBelAbbès}
            >
              Sidi Bel Abbès
            </option>

            <option
              value="	Annaba"
              price={cart.cartItems[0].seller.seller.shipping.Annaba}
            >
              Annaba
            </option>

            <option
              value="	Guelma"
              price={cart.cartItems[0].seller.seller.shipping.Guelma}
            >
              Guelma
            </option>

            <option
              value="Constantine"
              price={cart.cartItems[0].seller.seller.shipping.Constantine}
            >
              Constantine
            </option>

            <option
              value="Médéa"
              price={cart.cartItems[0].seller.seller.shipping.Médéa}
            >
              Médéa
            </option>

            <option
              value="Mostaganem"
              price={cart.cartItems[0].seller.seller.shipping.Mostaganem}
            >
              Mostaganem
            </option>
            <option
              value="MSila"
              price={cart.cartItems[0].seller.seller.shipping.MSila}
            >
              MSila
            </option>

            <option
              value="Mascara"
              price={cart.cartItems[0].seller.seller.shipping.Mascara}
            >
              Mascara
            </option>

            <option
              value="Ouargla"
              price={cart.cartItems[0].seller.seller.shipping.Ouargla}
            >
              Ouargla
            </option>

            <option
              value="Oran"
              price={cart.cartItems[0].seller.seller.shipping.Oran}
            >
              Oran
            </option>

            <option
              value="ElBayadh"
              price={cart.cartItems[0].seller.seller.shipping.ElBayadh}
            >
              ElBayadh
            </option>

            <option
              value="Illizi"
              price={cart.cartItems[0].seller.seller.shipping.Illizi}
            >
              Illizi
            </option>

            <option
              value="BordjBouArreridj"
              price={cart.cartItems[0].seller.seller.shipping.BordjBouArreridj}
            >
              BordjBouArreridj
            </option>

            <option
              value="Boumerdès"
              price={cart.cartItems[0].seller.seller.shipping.Boumerdès}
            >
              Boumerdès
            </option>

            <option
              value="ElTarf"
              price={cart.cartItems[0].seller.seller.shipping.ElTarf}
            >
              ElTarf
            </option>

            <option
              value="Tindouf"
              price={cart.cartItems[0].seller.seller.shipping.Tindouf}
            >
              Tindouf
            </option>

            <option
              value="Tissemsilt"
              price={cart.cartItems[0].seller.seller.shipping.Tissemsilt}
            >
              Tissemsilt
            </option>

            <option
              value="ElOued"
              price={cart.cartItems[0].seller.seller.shipping.ElOued}
            >
              ElOued
            </option>

            <option
              value="Khenchela"
              price={cart.cartItems[0].seller.seller.shipping.Khenchela}
            >
              Khenchela
            </option>

            <option
              value="SoukAhras"
              price={cart.cartItems[0].seller.seller.shipping.SoukAhras}
            >
              SoukAhras
            </option>

            <option
              value="Tipaza"
              price={cart.cartItems[0].seller.seller.shipping.Tipaza}
            >
              Tipaza
            </option>
            <option
              value="Mila"
              price={cart.cartItems[0].seller.seller.shipping.Mila}
            >
              Mila
            </option>

            <option
              value="	AïnDefla"
              price={cart.cartItems[0].seller.seller.shipping.AïnDefla}
            >
              AïnDefla
            </option>

            <option
              value="	Naâma"
              price={cart.cartItems[0].seller.seller.shipping.Naâma}
            >
              Naâma
            </option>

            <option
              value="AïnTémouchent"
              price={cart.cartItems[0].seller.seller.shipping.AïnTémouchent}
            >
              AïnTémouchent
            </option>

            <option
              value="Ghardaïa"
              price={cart.cartItems[0].seller.seller.shipping.Ghardaïa}
            >
              Ghardaïa
            </option>

            <option
              value="Relizane"
              price={cart.cartItems[0].seller.seller.shipping.Relizane}
            >
              Relizane
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="chooseOnMap">Location</label>
          <button type="button" onClick={chooseOnMap}>
            Choose On Map
          </button>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
