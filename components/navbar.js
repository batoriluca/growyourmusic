import React from "react";
import style from "../styles/navbar.module.css";
import Link from "next/link";
import Script from "next/script";
import { FaSignOutAlt } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaRegPlusSquare, FaCommentDollar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";

const navbar = () => {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/68c6324e4e.js"
        crossOrigin="anonymous"
      />
      <div className={style.navbar}>
        <div className={style.navbar_title}>
          <div className={style.socialmed}>
            <img src="/img/Group_1.png" alt="" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-youtube" />
            <i className="fa-brands fa-tiktok" />
          </div>
        </div>
        <div className={style.menu_box}>
          <div className={style.menu}>
            <menu>
              <ul>
                <Link className={style.a_link} href="/feed">
                  <li className="li_menu">
                    <AiFillHome className={style.i} />
                    <h4>Acas&#259;</h4>
                  </li>
                </Link>
                <Link className={style.a_link} href="/createnew">
                  <li>
                    <FaRegPlusSquare className={style.i} />
                    <h4>Postare nou&#259;</h4>
                  </li>
                </Link>
                <Link className={style.a_link} href="/shop">
                  <li>
                    <MdShoppingCart className={style.i} />
                    <h4>Magazin</h4>
                  </li>
                </Link>
                <Link className={style.a_link} href="/chat">
                  <li>
                    <FaCommentDollar className={style.i} />
                    <h4>Mesaje</h4>
                  </li>
                </Link>
                <Link className={style.a_link} href="/leaderboard">
                  <li>
                    <IoMdTrophy className={style.i} />
                    <h4>Clasament</h4>
                  </li>
                </Link>
                <Link className={style.a_link} href="/settings">
                  <li>
                    <BsFillGearFill className={style.i} />
                    <h4>Set&#259;ri</h4>
                  </li>
                </Link>
              </ul>
            </menu>
          </div>
        </div>
      </div>
      <div className={style.sidebar_help_btn}>
        <div className={style.sidebar_icon}>
          <BsFillGearFill />
        </div>
        <div className={style.sidebar_icon}>
          <FaSignOutAlt />
        </div>
      </div>
    </>
  );
};

export default navbar;
