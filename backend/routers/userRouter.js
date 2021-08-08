import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken, isAdmin, isAuth } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/top-sellers",
  expressAsyncHandler(async (req, res) => {
    const topSellers = await User.find({ isSeller: true })
      .sort({ "seller.rating": -1 })
      .limit(3);
    res.send(topSellers);
  })
);

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          isSeller: user.isSeller,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      isSeller: user.isSeller,
      token: generateToken(createdUser),
    });
  })
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);
userRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (user.isSeller) {
        user.seller.name = req.body.sellerName || user.seller.name;
        user.seller.logo = req.body.sellerLogo || user.seller.logo;

        user.seller.shipping.Adrar =
          req.body.sellerShipping0 || user.seller.shipping.Adrar;

        user.seller.shipping.Chlef =
          req.body.sellerShipping1 || user.seller.shipping.Chlef;

        user.seller.shipping.Laghouat =
          req.body.sellerShipping2 || user.seller.shipping.Laghouat;

        user.seller.shipping.OumElBouaghi =
          req.body.sellerShipping3 || user.seller.shipping.OumElBouaghi;

        user.seller.shipping.Batna =
          req.body.sellerShipping4 || user.seller.shipping.Batna;

        user.seller.shipping.Béjaïa =
          req.body.sellerShipping5 || user.seller.shipping.Béjaïa;

        user.seller.shipping.Biskra =
          req.body.sellerShipping6 || user.seller.shipping.Biskra;

        user.seller.shipping.Béchar =
          req.body.sellerShipping7 || user.seller.shipping.Béchar;

        user.seller.shipping.Blida =
          req.body.sellerShipping8 || user.seller.shipping.Blida;

        user.seller.shipping.Bouira =
          req.body.sellerShipping9 || user.seller.shipping.Bouira;

        user.seller.shipping.Tamanrasset =
          req.body.sellerShipping10 || user.seller.shipping.Tamanrasset;

        user.seller.shipping.Tébessa =
          req.body.sellerShipping11 || user.seller.shipping.Tébessa;

        user.seller.shipping.Tlemcen =
          req.body.sellerShipping12 || user.seller.shipping.Tlemcen;

        user.seller.shipping.Tiaret =
          req.body.sellerShipping13 || user.seller.shipping.Tiaret;

        user.seller.shipping.TiziOuzou =
          req.body.sellerShipping14 || user.seller.shipping.TiziOuzou;

        user.seller.shipping.Alger =
          req.body.sellerShipping15 || user.seller.shipping.Alger;

        user.seller.shipping.Djelfa =
          req.body.sellerShipping16 || user.seller.shipping.Djelfa;

        user.seller.shipping.Jijel =
          req.body.sellerShipping17 || user.seller.shipping.Jijel;

        user.seller.shipping.Sétif =
          req.body.sellerShipping18 || user.seller.shipping.Sétif;

        user.seller.shipping.Saïda =
          req.body.sellerShipping19 || user.seller.shipping.Saïda;

        user.seller.shipping.Skikda =
          req.body.sellerShipping20 || user.seller.shipping.Skikda;

        user.seller.shipping.SidiBelAbbès =
          req.body.sellerShipping21 || user.seller.shipping.SidiBelAbbès;

        user.seller.shipping.Annaba =
          req.body.sellerShipping22 || user.seller.shipping.Annaba;

        user.seller.shipping.Guelma =
          req.body.sellerShipping23 || user.seller.shipping.Guelma;

        user.seller.shipping.Constantine =
          req.body.sellerShipping24 || user.seller.shipping.Constantine;

        user.seller.shipping.Médéa =
          req.body.sellerShipping25 || user.seller.shipping.Médéa;

        user.seller.shipping.Mostaganem =
          req.body.sellerShipping26 || user.seller.shipping.Mostaganem;

        user.seller.shipping.MSila =
          req.body.sellerShipping27 || user.seller.shipping.MSila;

        user.seller.shipping.Mascara =
          req.body.sellerShipping28 || user.seller.shipping.Mascara;

        user.seller.shipping.Ouargla =
          req.body.sellerShipping29 || user.seller.shipping.Ouargla;

        user.seller.shipping.Oran =
          req.body.sellerShipping30 || user.seller.shipping.Oran;

        user.seller.shipping.ElBayadh =
          req.body.sellerShipping31 || user.seller.shipping.ElBayadh;

        user.seller.shipping.Illizi =
          req.body.sellerShipping32 || user.seller.shipping.Illizi;

        user.seller.shipping.BordjBouArreridj =
          req.body.sellerShipping33 || user.seller.shipping.BordjBouArreridj;

        user.seller.shipping.Boumerdès =
          req.body.sellerShipping34 || user.seller.shipping.Boumerdès;

        user.seller.shipping.ElTarf =
          req.body.sellerShipping35 || user.seller.shipping.ElTarf;

        user.seller.shipping.Tindouf =
          req.body.sellerShipping36 || user.seller.shipping.Tindouf;

        user.seller.shipping.Tissemsilt =
          req.body.sellerShipping37 || user.seller.shipping.Tissemsilt;

        user.seller.shipping.ElOued =
          req.body.sellerShipping38 || user.seller.shipping.ElOued;

        user.seller.shipping.Khenchela =
          req.body.sellerShipping39 || user.seller.shipping.Khenchela;

        user.seller.shipping.SoukAhras =
          req.body.sellerShipping40 || user.seller.shipping.SoukAhras;

        user.seller.shipping.Tipaza =
          req.body.sellerShipping41 || user.seller.shipping.Tipaza;

        user.seller.shipping.Mila =
          req.body.sellerShipping42 || user.seller.shipping.Mila;

        user.seller.shipping.AïnDefla =
          req.body.sellerShipping43 || user.seller.shipping.AïnDefla;

        user.seller.shipping.Naâma =
          req.body.sellerShipping44 || user.seller.shipping.Naâma;

        user.seller.shipping.AïnTémouchent =
          req.body.sellerShipping45 || user.seller.shipping.AïnTémouchent;

        user.seller.shipping.Ghardaïa =
          req.body.sellerShipping46 || user.seller.shipping.Ghardaïa;

        user.seller.shipping.Relizane =
          req.body.sellerShipping47 || user.seller.shipping.Relizane;

        user.seller.description =
          req.body.sellerDescription || user.seller.description;
      }
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(updatedUser),
      });
    }
  })
);

userRouter.get(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

userRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === "admin@example.com") {
        res.status(400).send({ message: "Can Not Delete Admin User" });
        return;
      }
      const deleteUser = await user.remove();
      res.send({ message: "User Deleted", user: deleteUser });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

userRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isSeller = Boolean(req.body.isSeller);
      user.isAdmin = Boolean(req.body.isAdmin);
      // user.isAdmin = req.body.isAdmin || user.isAdmin;
      const updatedUser = await user.save();
      res.send({ message: "User Updated", user: updatedUser });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

export default userRouter;
