import Head from 'next/head'
import style from '../styles/login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
var jwt = require('jsonwebtoken');
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Script from 'next/script'

const initialValues = {
  email: "",
  password: "",
}

export default function Home() {

  const router = useRouter();

  const loginSchema = Yup.object({
    email: Yup.string().email("It must be an email").required("Please Enter Email ID"),
    password: Yup.string().min(6, "It must be at least 6 char").max(25).required("Please Enter Password"),
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,

    onSubmit: async (values, action) => {

      const email = values.email;
      const password = values.password;

      const data = { email, password };

      let res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let response = await res.json()
      if (response.sucess) {
        Cookies.set('token', response.token)
        localStorage.setItem('l_token', response.token)

        toast.success("Your enterd Details are right", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        action.resetForm();

        setTimeout(() => {
          router.push("/feed")
        }, 1500);

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

  return (
    <>
      <Head>
        <title>Loghează-te -- Grow Your Music</title>
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
      <div className={style.container}>
        <div className={style.sc1} id="sc1">
          <div className={style.intro}>
            <h3>Loghează-te</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Nume de utilizator"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email || ""}
                name='email'
              />
              {errors.email && touched.email ? <p className={style.from_error}>{errors.email}</p> : null}
              <input
                type="password"
                placeholder="Parola"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password || ""}
                name='password'
              />
              {errors.password && touched.password ? <p className={style.from_error}>{errors.password}</p> : null}
              <input type="submit" defaultValue="Loghează-te" />
            </form>
            <img src="/img/Group 16.png" className={style.logo} alt="" />
            <p>pentru artisti &amp; producatori la inceput de drum</p>
          </div>
        </div>
      </div>

    </>
  )
}


export async function getServerSideProps(ctx: any) {

  const { token } = parseCookies(ctx)

  if (!token) {

  } else {
    var decoded = jwt.decode(token);
    if (decoded.membership == 'inactive') {
      const { res } = ctx
      res.writeHead(302, { location: "/feed" })
      res.end()
    } else if (decoded.accstatus == 'pending') {
      const { res } = ctx
      res.writeHead(302, { location: "/setupacc" })
      res.end()
    } else {
      const { res } = ctx
      res.writeHead(302, { location: "/feed" })
      res.end()
    }
  }
  return {
    props: {}, // will be passed to the page component as props
  }
}