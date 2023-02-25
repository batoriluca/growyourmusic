import Head from 'next/head'
import { AiOutlineSearch } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import style from '../styles/setupacc.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
var jwt = require('jsonwebtoken');
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Cookies from 'js-cookie';

const initialValues = {
  artistname: "",
  featurefee: "",
  description: "",
}

export default function Home() {

  const router = useRouter();

  const [username, setUsername] = useState("Loading")
  const [useremail, setUserEmail] = useState("Loading")

  const [media, setMedia] = useState("")
  const [profilepic, setProfilepic] = useState("")
  const [profileerror, setProfileerror] = useState("")

  const setupSchema = Yup.object({
    artistname: Yup.string().required("Please Enter Artist Name"),
    featurefee: Yup.string().required("Please Enter Feature Fee"),
    description: Yup.string().min(15, "It must be at least 15 char").max(150).required("Please tell us about yourself"),
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: setupSchema,

    onSubmit: async (values, action) => {

      const artistname = values.artistname;
      const featurefee = values.featurefee;
      const description = values.description;

      await imageUpload();
      const data = { artistname, description, featurefee, profilepic, username, useremail };

      let res = await fetch('http://localhost:3000/api/setup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let response = await res.json()

      console.log(response);
      if (response.success) {
        toast.success(response.msg, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        localStorage.setItem('l_token', response.token)
        Cookies.set('token', response.token)

        setTimeout(() => {
          router.push("/feed")
        }, 500);
        action.resetForm();
      } else {
        toast.error(response.msg, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  })

  const imageUpload = async () => {
    const data = new FormData()
    data.append('file', media)

    if (media) {
      if (media.type == "image/jpeg" || media.type == "image/png" || media.type == "image/jpg") {
        if (media.size <= 2097152) {
          const res = await fetch("http://localhost:3000/api/uploadprofile", {
            method: 'POST',
            body: data
          })
          const res2 = await res.json()
          if (res2.success == true) {
            setProfilepic(res2.filename)
          } else {
            toast.error("Please Try again...!!!", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        } else {
          setProfileerror("Image size should be less than 2 MB")
          toast.error("Image size should be less than 2 MB", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        setProfileerror("Only jpeg, jpg and png images are allowed")
        toast.error("Only jpeg, jpg and png images are allowed", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      setProfileerror("Please select the image first")
      toast.error("Please select the image first", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <>
      <Head>
        <title>Set-up Account -- Growyourmusic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        limit={5}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={style.sc1}>
        <div className={style.main_container}>
          <div className={style.navbar_contanier}>
            <div className={style.navbar}>
              <div className={style.navbar_title}>
                <div className={style.sidebar_logo}>
                  <img src="/img/wgb-logo.png" alt="Logo" className={style.img_logo} />
                </div>
              </div>
              <div className={style.menu_box}>
                <Navbar />
              </div>
            </div>
            <div className={style.sidebar_help_btn}>
              <div className={style.sidebar_icon}><BsFillGearFill /></div>
              <div className={style.sidebar_icon}><FaSignOutAlt /></div>
            </div>
          </div>
          <div className={style.content_contanier}>
            <div className={style.status_bar}>
              <div className={style.greets_to_user}>
                <p>Hello, Username</p>
              </div>
              <div className={style.container_searchbar}>
                <div className={style.user_btns}>
                  <IoMdNotifications />
                  <div className={style.user_pic}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.feed_with_user}>
              <div className={style.feed_posts}>
                <div className={style.dm}>
                  <form onSubmit={handleSubmit} method="POST">
                    <div className={style.r_side}>
                      <div className={style.changeimg_input}>
                        <h1>Imaginea de profil</h1>
                        <input
                          style={{ display: "none" }}
                          type="file"
                          name="imgInput"
                          id="fileInputImg"
                          onChange={(e) => setMedia(e.target.files[0])}
                          accept="image/png, image/jpeg, image/jpg"
                        />
                        <label htmlFor="fileInputImg">
                          <h2 style={{ cursor: "pointer" }}>Apasă pentru a schimba imaginea </h2>
                        </label>
                        {profileerror ? <p className={style.from_error}>{profileerror}</p> : null}
                      </div>
                      <div className={style.artistname_input}>
                        <h1>Nume de scenă</h1>
                        <input
                          type="text"
                          placeholder="Schimbă numele de scenă..."
                          id="artistname"
                          name='artistname'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.artistname || ""}
                        />
                        {errors.artistname && touched.artistname ? <p className={style.from_error}>{errors.artistname}</p> : null}
                      </div>
                      <div className="featurefee-input">
                        <h1>Preţ de colaborare</h1>
                        <input
                          type="text"
                          placeholder="Schimbă preţul de colaborare..."
                          id="featurefee"
                          name='featurefee'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.featurefee || ""}
                        />
                        {errors.featurefee && touched.featurefee ? <p className={style.from_error}>{errors.featurefee}</p> : null}
                      </div>
                      <div className={style.artistname_input}>
                        <h1>Descriere</h1>
                        <textarea
                          placeholder="Schimbă descrierea..."
                          id="description"
                          name='description'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description || ""}
                        />
                        {errors.description && touched.description ? <p className={style.from_error}>{errors.description}</p> : null}
                      </div>
                      <div className="savechanges">
                        <input type="submit" defaultValue="Salvează" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className={style.profile_bar}>
                <div className={style.user_detail}>
                  <div className={style.user_detail_with_image}>
                    <div className={style.profile_pic}>
                      <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                    </div>
                    <div className={style.feat}>
                      <h3 className={style.full_name}>Demo Account</h3>
                      <h3 className={style.username}>@Username</h3>
                      <p>Preţ de colaborare:</p>
                      <span>$300M</span>
                    </div>
                  </div>

                  <div className={style.bio}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, nihil
                      cumque! Quos voluptates quae ea soluta porro tempora nam illum dicta
                      autem cum saepe, voluptatem exercitationem, inventore fugiat pariatur
                      atque!
                    </p>
                  </div>
                </div>
                <div className={style.news_card}>
                  <h1>Verifică noutăţile #GrowYourMusic!</h1>
                  <p>Citeşte ultimele notificări primite.</p>
                  <p>
                    <b>#GrowYourMusicDELUXEComingSoon</b>
                  </p>
                  <Link href="/news">
                    <h4>Verifică-le aici</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
