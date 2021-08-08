import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import Axios from "axios";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sellerName, setSellerName] = useState("");
  // const [sellerLogo, setSellerLogo] = useState("");
  const [sellerLogo, setImage] = useState("");
  const [sellerDescription, setSellerDescription] = useState("");

  const [sellerShipping0, setSellerShipping0] = useState("");
  const [sellerShipping1, setSellerShipping1] = useState("");
  const [sellerShipping2, setSellerShipping2] = useState("");
  const [sellerShipping3, setSellerShipping3] = useState("");
  const [sellerShipping4, setSellerShipping4] = useState("");
  const [sellerShipping5, setSellerShipping5] = useState("");
  const [sellerShipping6, setSellerShipping6] = useState("");
  const [sellerShipping7, setSellerShipping7] = useState("");
  const [sellerShipping8, setSellerShipping8] = useState("");
  const [sellerShipping9, setSellerShipping9] = useState("");
  const [sellerShipping10, setSellerShipping10] = useState("");
  const [sellerShipping11, setSellerShipping11] = useState("");
  const [sellerShipping12, setSellerShipping12] = useState("");
  const [sellerShipping13, setSellerShipping13] = useState("");
  const [sellerShipping14, setSellerShipping14] = useState("");
  const [sellerShipping15, setSellerShipping15] = useState("");
  const [sellerShipping16, setSellerShipping16] = useState("");
  const [sellerShipping17, setSellerShipping17] = useState("");
  const [sellerShipping18, setSellerShipping18] = useState("");
  const [sellerShipping19, setSellerShipping19] = useState("");
  const [sellerShipping20, setSellerShipping20] = useState("");
  const [sellerShipping21, setSellerShipping21] = useState("");
  const [sellerShipping22, setSellerShipping22] = useState("");
  const [sellerShipping23, setSellerShipping23] = useState("");
  const [sellerShipping24, setSellerShipping24] = useState("");
  const [sellerShipping25, setSellerShipping25] = useState("");
  const [sellerShipping26, setSellerShipping26] = useState("");
  const [sellerShipping27, setSellerShipping27] = useState("");
  const [sellerShipping28, setSellerShipping28] = useState("");
  const [sellerShipping29, setSellerShipping29] = useState("");
  const [sellerShipping30, setSellerShipping30] = useState("");
  const [sellerShipping31, setSellerShipping31] = useState("");
  const [sellerShipping32, setSellerShipping32] = useState("");
  const [sellerShipping33, setSellerShipping33] = useState("");
  const [sellerShipping34, setSellerShipping34] = useState("");
  const [sellerShipping35, setSellerShipping35] = useState("");
  const [sellerShipping36, setSellerShipping36] = useState("");
  const [sellerShipping37, setSellerShipping37] = useState("");
  const [sellerShipping38, setSellerShipping38] = useState("");
  const [sellerShipping39, setSellerShipping39] = useState("");
  const [sellerShipping40, setSellerShipping40] = useState("");
  const [sellerShipping41, setSellerShipping41] = useState("");
  const [sellerShipping42, setSellerShipping42] = useState("");
  const [sellerShipping43, setSellerShipping43] = useState("");
  const [sellerShipping44, setSellerShipping44] = useState("");
  const [sellerShipping45, setSellerShipping45] = useState("");
  const [sellerShipping46, setSellerShipping46] = useState("");
  const [sellerShipping47, setSellerShipping47] = useState("");
  //Tzid 48 hna men 0 lel 47

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      if (user.seller) {
        setSellerName(user.seller.name);
        setImage(user.seller.logo);
        setSellerDescription(user.seller.description);
        setSellerShipping0(user.seller.shipping.Adrar);
        setSellerShipping1(user.seller.shipping.Chlef);
        setSellerShipping2(user.seller.shipping.Laghouat);
        setSellerShipping3(user.seller.shipping.OumElBouaghi);
        setSellerShipping4(user.seller.shipping.Batna);
        setSellerShipping5(user.seller.shipping.Béjaïa);
        setSellerShipping6(user.seller.shipping.Biskra);
        setSellerShipping7(user.seller.shipping.Béchar);
        setSellerShipping8(user.seller.shipping.Blida);
        setSellerShipping9(user.seller.shipping.Bouira);
        setSellerShipping10(user.seller.shipping.Tamanrasset);
        setSellerShipping11(user.seller.shipping.Tébessa);
        setSellerShipping12(user.seller.shipping.Tlemcen);
        setSellerShipping13(user.seller.shipping.Tiaret);
        setSellerShipping14(user.seller.shipping.TiziOuzou);
        setSellerShipping15(user.seller.shipping.Alger);
        setSellerShipping16(user.seller.shipping.Djelfa);
        setSellerShipping17(user.seller.shipping.Jijel);
        setSellerShipping18(user.seller.shipping.Sétif);
        setSellerShipping19(user.seller.shipping.Saïda);
        setSellerShipping20(user.seller.shipping.Skikda);
        setSellerShipping21(user.seller.shipping.SidiBelAbbès);
        setSellerShipping22(user.seller.shipping.Annaba);
        setSellerShipping23(user.seller.shipping.Guelma);
        setSellerShipping24(user.seller.shipping.Constantine);
        setSellerShipping25(user.seller.shipping.Médéa);
        setSellerShipping26(user.seller.shipping.Mostaganem);
        setSellerShipping27(user.seller.shipping.MSila);
        setSellerShipping28(user.seller.shipping.Mascara);
        setSellerShipping29(user.seller.shipping.Ouargla);
        setSellerShipping30(user.seller.shipping.Oran);
        setSellerShipping31(user.seller.shipping.ElBayadh);
        setSellerShipping32(user.seller.shipping.Illizi);
        setSellerShipping33(user.seller.shipping.BordjBouArreridj);
        setSellerShipping34(user.seller.shipping.Boumerdès);
        setSellerShipping35(user.seller.shipping.ElTarf);
        setSellerShipping36(user.seller.shipping.Tindouf);
        setSellerShipping37(user.seller.shipping.Tissemsilt);
        setSellerShipping38(user.seller.shipping.ElOued);
        setSellerShipping39(user.seller.shipping.Khenchela);
        setSellerShipping40(user.seller.shipping.SoukAhras);
        setSellerShipping41(user.seller.shipping.Tipaza);
        setSellerShipping42(user.seller.shipping.Mila);
        setSellerShipping43(user.seller.shipping.AïnDefla);
        setSellerShipping44(user.seller.shipping.Naâma);
        setSellerShipping45(user.seller.shipping.AïnTémouchent);
        setSellerShipping46(user.seller.shipping.Ghardaïa);
        setSellerShipping47(user.seller.shipping.Relizane);
      }
    }
  }, [dispatch, userInfo._id, user]);
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert("Password and Confirm Password Are Not Matched");
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
          password,
          sellerName,
          sellerLogo,
          sellerDescription,
          sellerShipping0,
          sellerShipping1,
          sellerShipping2,
          sellerShipping3,
          sellerShipping4,
          sellerShipping5,
          sellerShipping6,
          sellerShipping7,
          sellerShipping8,
          sellerShipping9,
          sellerShipping10,
          sellerShipping11,
          sellerShipping12,
          sellerShipping13,
          sellerShipping14,
          sellerShipping15,
          sellerShipping16,
          sellerShipping17,
          sellerShipping18,
          sellerShipping19,
          sellerShipping20,
          sellerShipping21,
          sellerShipping22,
          sellerShipping23,
          sellerShipping24,
          sellerShipping25,
          sellerShipping26,
          sellerShipping27,
          sellerShipping28,
          sellerShipping29,
          sellerShipping30,
          sellerShipping31,
          sellerShipping32,
          sellerShipping33,
          sellerShipping34,
          sellerShipping35,
          sellerShipping36,
          sellerShipping37,
          sellerShipping38,
          sellerShipping39,
          sellerShipping40,
          sellerShipping41,
          sellerShipping42,
          sellerShipping43,
          sellerShipping44,
          sellerShipping45,
          sellerShipping46,
          sellerShipping47,
        })
      );
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Profile Updated Successfully
              </MessageBox>
            )}
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Enter confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            {user.isSeller && (
              <>
                <h2>Seller</h2>
                <div>
                  <label htmlFor="sellerName">Seller Name</label>
                  <input
                    id="sellerName"
                    type="text"
                    placeholder="Enter Seller Name"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerLogo">Seller Logo</label>
                  <input
                    id="sellerLogo"
                    type="text"
                    placeholder="Enter Seller Logo"
                    value={sellerLogo}
                    onChange={(e) => setImage(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="imageFile">Seller Logo</label>
                  <input
                    type="file"
                    id="imageFile"
                    label="Choose Image"
                    accept="image\*"
                    onChange={uploadFileHandler}
                  ></input>
                  {loadingUpload && <LoadingBox></LoadingBox>}
                  {errorUpload && (
                    <MessageBox variant="danger">{errorUpload}</MessageBox>
                  )}
                </div>
                <div>
                  <label htmlFor="sellerDescription">Seller Description</label>
                  <input
                    id="sellerDescription"
                    type="text"
                    placeholder="Enter Seller Description"
                    value={sellerDescription}
                    onChange={(e) => setSellerDescription(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping0">Adrar</label>
                  <input
                    id="sellerShipping0"
                    type="text"
                    placeholder="Adrar price"
                    value={sellerShipping0}
                    onChange={(e) => setSellerShipping0(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping1"> Chlef</label>
                  <input
                    id="sellerShipping1"
                    type="text"
                    placeholder="	Chlef price"
                    value={sellerShipping1}
                    onChange={(e) => setSellerShipping1(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping2"> Laghouat</label>
                  <input
                    id="sellerShipping2"
                    type="text"
                    placeholder="	Laghouat price"
                    value={sellerShipping2}
                    onChange={(e) => setSellerShipping2(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping3">OumElBouaghi</label>
                  <input
                    id="sellerShipping3"
                    type="text"
                    placeholder="OumElBouaghi price"
                    value={sellerShipping3}
                    onChange={(e) => setSellerShipping3(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping4">Batna</label>
                  <input
                    id="sellerShipping4"
                    type="text"
                    placeholder="Batna price"
                    value={sellerShipping4}
                    onChange={(e) => setSellerShipping4(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping5"> Béjaïa</label>
                  <input
                    id="sellerShipping5"
                    type="text"
                    placeholder="	Béjaïa price"
                    value={sellerShipping5}
                    onChange={(e) => setSellerShipping5(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping6"> Biskra</label>
                  <input
                    id="sellerShipping6"
                    type="text"
                    placeholder="	Biskra price"
                    value={sellerShipping6}
                    onChange={(e) => setSellerShipping6(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping7">Béchar</label>
                  <input
                    id="sellerShipping7"
                    type="text"
                    placeholder="Béchar price"
                    value={sellerShipping7}
                    onChange={(e) => setSellerShipping7(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping8"> Blida</label>
                  <input
                    id="sellerShipping8"
                    type="text"
                    placeholder="	Blida price"
                    value={sellerShipping8}
                    onChange={(e) => setSellerShipping8(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping9"> Bouira</label>
                  <input
                    id="sellerShipping9"
                    type="text"
                    placeholder="	Bouira price"
                    value={sellerShipping9}
                    onChange={(e) => setSellerShipping9(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping10"> Tamanrasset</label>
                  <input
                    id="sellerShipping10"
                    type="text"
                    placeholder="	Tamanrasset price"
                    value={sellerShipping10}
                    onChange={(e) => setSellerShipping10(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping11">Tébessa</label>
                  <input
                    id="sellerShipping11"
                    type="text"
                    placeholder="Tébessa price"
                    value={sellerShipping11}
                    onChange={(e) => setSellerShipping11(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping12">Tlemcen</label>
                  <input
                    id="sellerShipping12"
                    type="text"
                    placeholder="Tlemcen price"
                    value={sellerShipping12}
                    onChange={(e) => setSellerShipping12(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping13"> Tiaret</label>
                  <input
                    id="sellerShipping13"
                    type="text"
                    placeholder="	Tiaret price"
                    value={sellerShipping13}
                    onChange={(e) => setSellerShipping13(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping14"> TiziOuzou</label>
                  <input
                    id="sellerShipping14"
                    type="text"
                    placeholder="	TiziOuzou price"
                    value={sellerShipping14}
                    onChange={(e) => setSellerShipping14(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping15">Alger</label>
                  <input
                    id="sellerShipping15"
                    type="text"
                    placeholder="Alger price"
                    value={sellerShipping15}
                    onChange={(e) => setSellerShipping15(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping16">Djelfa</label>
                  <input
                    id="sellerShipping16"
                    type="text"
                    placeholder="Djelfa price"
                    value={sellerShipping16}
                    onChange={(e) => setSellerShipping16(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping17"> Jijel</label>
                  <input
                    id="sellerShipping17"
                    type="text"
                    placeholder="	Jijel price"
                    value={sellerShipping17}
                    onChange={(e) => setSellerShipping17(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping18"> Sétif</label>
                  <input
                    id="sellerShipping18"
                    type="text"
                    placeholder="	Sétif price"
                    value={sellerShipping18}
                    onChange={(e) => setSellerShipping18(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping19">Saïda</label>
                  <input
                    id="sellerShipping19"
                    type="text"
                    placeholder="Saïda price"
                    value={sellerShipping19}
                    onChange={(e) => setSellerShipping19(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping20">Skikda</label>
                  <input
                    id="sellerShipping20"
                    type="text"
                    placeholder="Skikda price"
                    value={sellerShipping20}
                    onChange={(e) => setSellerShipping20(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping21"> SidiBelAbbès</label>
                  <input
                    id="sellerShipping21"
                    type="text"
                    placeholder="	SidiBelAbbès price"
                    value={sellerShipping21}
                    onChange={(e) => setSellerShipping21(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping22"> Annaba</label>
                  <input
                    id="sellerShipping22"
                    type="text"
                    placeholder="	Annaba price"
                    value={sellerShipping22}
                    onChange={(e) => setSellerShipping22(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping23">Guelma</label>
                  <input
                    id="sellerShipping23"
                    type="text"
                    placeholder="Guelma price"
                    value={sellerShipping23}
                    onChange={(e) => setSellerShipping23(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping24">Constantine</label>
                  <input
                    id="sellerShipping24"
                    type="text"
                    placeholder="Constantine price"
                    value={sellerShipping24}
                    onChange={(e) => setSellerShipping24(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping25"> Médéa</label>
                  <input
                    id="sellerShipping25"
                    type="text"
                    placeholder="	Médéa price"
                    value={sellerShipping25}
                    onChange={(e) => setSellerShipping25(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping26"> Mostaganem</label>
                  <input
                    id="sellerShipping26"
                    type="text"
                    placeholder="	Mostaganem price"
                    value={sellerShipping26}
                    onChange={(e) => setSellerShipping26(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping27">MSila</label>
                  <input
                    id="sellerShipping27"
                    type="text"
                    placeholder="MSila price"
                    value={sellerShipping27}
                    onChange={(e) => setSellerShipping27(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping28">Mascara</label>
                  <input
                    id="sellerShipping28"
                    type="text"
                    placeholder="Mascara price"
                    value={sellerShipping28}
                    onChange={(e) => setSellerShipping28(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping29"> Ouargla</label>
                  <input
                    id="sellerShipping29"
                    type="text"
                    placeholder="	Ouargla price"
                    value={sellerShipping29}
                    onChange={(e) => setSellerShipping29(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping30">Oran</label>
                  <input
                    id="sellerShipping30"
                    type="text"
                    placeholder="Oran price"
                    value={sellerShipping30}
                    onChange={(e) => setSellerShipping30(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping31"> ElBayadh</label>
                  <input
                    id="sellerShipping31"
                    type="text"
                    placeholder="	ElBayadh price"
                    value={sellerShipping31}
                    onChange={(e) => setSellerShipping31(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping32"> Illizi</label>
                  <input
                    id="sellerShipping32"
                    type="text"
                    placeholder="	Illizi price"
                    value={sellerShipping32}
                    onChange={(e) => setSellerShipping32(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping33"> BordjBouArreridj</label>
                  <input
                    id="sellerShipping33"
                    type="text"
                    placeholder="	BordjBouArreridj price"
                    value={sellerShipping33}
                    onChange={(e) => setSellerShipping33(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping34"> Boumerdès</label>
                  <input
                    id="sellerShipping34"
                    type="text"
                    placeholder="	Boumerdès price"
                    value={sellerShipping34}
                    onChange={(e) => setSellerShipping34(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping35">El Tarf</label>
                  <input
                    id="sellerShipping35"
                    type="text"
                    placeholder="El Tarf price"
                    value={sellerShipping35}
                    onChange={(e) => setSellerShipping35(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping36">Tindouf</label>
                  <input
                    id="sellerShipping36"
                    type="text"
                    placeholder="Tindouf price"
                    value={sellerShipping36}
                    onChange={(e) => setSellerShipping36(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping37"> Tissemsilt</label>
                  <input
                    id="sellerShipping37"
                    type="text"
                    placeholder="	Tissemsilt price"
                    value={sellerShipping37}
                    onChange={(e) => setSellerShipping37(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping38"> ElOued</label>
                  <input
                    id="sellerShipping38"
                    type="text"
                    placeholder="	ElOued price"
                    value={sellerShipping38}
                    onChange={(e) => setSellerShipping38(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping39">Khenchela</label>
                  <input
                    id="sellerShipping39"
                    type="text"
                    placeholder="Khenchela price"
                    value={sellerShipping39}
                    onChange={(e) => setSellerShipping39(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping40"> SoukAhras</label>
                  <input
                    id="sellerShipping40"
                    type="text"
                    placeholder="	SoukAhras price"
                    value={sellerShipping40}
                    onChange={(e) => setSellerShipping40(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label htmlFor="sellerShipping41"> Tipaza</label>
                  <input
                    id="sellerShipping41"
                    type="text"
                    placeholder="	Tipaza price"
                    value={sellerShipping41}
                    onChange={(e) => setSellerShipping41(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping42"> Mila</label>
                  <input
                    id="sellerShipping42"
                    type="text"
                    placeholder="Mila price"
                    value={sellerShipping42}
                    onChange={(e) => setSellerShipping42(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping43"> AïnDefla</label>
                  <input
                    id="sellerShipping43"
                    type="text"
                    placeholder="	AïnDefla price"
                    value={sellerShipping43}
                    onChange={(e) => setSellerShipping43(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping44">Naâma</label>
                  <input
                    id="sellerShipping44"
                    type="text"
                    placeholder="Naâma price"
                    value={sellerShipping44}
                    onChange={(e) => setSellerShipping44(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping45"> AïnTémouchent</label>
                  <input
                    id="sellerShipping45"
                    type="text"
                    placeholder="	AïnTémouchent price"
                    value={sellerShipping45}
                    onChange={(e) => setSellerShipping45(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping46"> Ghardaïa</label>
                  <input
                    id="sellerShipping46"
                    type="text"
                    placeholder="	Ghardaïa price"
                    value={sellerShipping46}
                    onChange={(e) => setSellerShipping46(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerShipping47">Relizane</label>
                  <input
                    id="sellerShipping47"
                    type="text"
                    placeholder="Relizane price"
                    value={sellerShipping47}
                    onChange={(e) => setSellerShipping47(e.target.value)}
                  ></input>
                </div>
              </>
            )}
            <div>
              <label />
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
