import Head from 'next/head'
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import style from '../styles/news.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>News Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="sc1" className={style.sc1}>
        <div className={style.main_container}>
          <div className={style.navbar_contanier}>
            <Navbar />
          </div>
          <div className={style.content_contanier}>
            <div className={style.status_bar}>
              <div className={style.greets_to_user}>
                <p>Hello, Username</p>
              </div>
              <div className={style.container_searchbar}>
                <div className={style.searchbox}>
                  <AiOutlineSearch />
                  <input
                    type="text"
                    placeholder='Explore'
                    className={style.searchInput}
                  />
                </div>
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
                  <div className={style.l_side}>

                    <div className={style.notifications_card}>
                      <h1>Notificări</h1>
                      <div className={`${style.notification} ${style.volume_text}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>
                            <Link href="userprofile">vrea să măreşti volumul!</Link>
                          </p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="txtpost">("loremips ...")</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.volume_vid}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>vrea să măreşti volumul!</p>
                        </div>
                        <Link href="/vidpost" className={style.post_thumbnail}>
                          <video
                            controlsList="nodownload"
                            disablePictureInPicture={true}
                            className={style.fixed_aspect_ratio}
                          >
                            <source src="/img/Pop Cola 2021 feat. ABI.mp4" />
                          </video>
                        </Link>
                      </div>
                      <div className={`${style.notification} ${style.fan}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>te urmăreşte!</p>
                        </div>
                      </div>
                      <div className={`${style.notification} ${style.feat}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>vrea să colaboraţi!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="chat">Colaborează!</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.joined}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>s-a alăturat!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="userprofile">Vezi contul!</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.volume_text}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>
                            <Link href="txtpost">vrea să măreşti volumul!</Link>
                          </p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="txtpost">("loremips ...")</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.volume_vid}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>vrea să măreşti volumul!</p>
                        </div>
                        <Link href="/vidpost" className={style.post_thumbnail}>
                          <video
                            preload="auto"
                            controlsList="nodownload"
                            disablePictureInPicture={true}
                            className={style.fixed_aspect_ratio}
                          >
                            <source src="/img/Pop Cola 2021 feat. ABI.mp4" />
                          </video>
                        </Link>
                      </div>
                      <div className={`${style.notification} ${style.fan}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>
                            <Link href="userprofile">te urmăreşte!</Link>
                          </p>
                        </div>
                      </div>
                      <div className={`${style.notification} ${style.feat}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>vrea să colaboraţi!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="chat">Colaborează!</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.contract_accept}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>a acceptat oferta!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="productws">Vezi contractul</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.contract_reject}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>a refuzat oferta!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="chat">Vezi contractul</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.contract_expired}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>nu a răspuns ofertei!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="chat">Vezi contractul</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.prod_sent}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>a trimis un produs!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="review">Vezi produsul</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.review}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>și-a dat părerea despre produs!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="chat">Vezi produsul</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.feat}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>vrea să colaboraţi!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="chat">Colaborează!</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.joined}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>s-a alăturat!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="userprofile">Vezi contul!</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.volume_text}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>
                            <Link href="userprofile">vrea să măreşti volumul!</Link>
                          </p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="txtpost">("loremips ...")</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.volume_vid}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>vrea să măreşti volumul!</p>
                        </div>
                        <Link href="/vidpost" className={style.post_thumbnail}>
                          <video
                            preload="auto"
                            controlsList="nodownload"
                            disablePictureInPicture={true}
                            className={style.fixed_aspect_ratio}
                          >
                            <source src="/img/Pop Cola 2021 feat. ABI.mp4" />
                          </video>
                        </Link>
                      </div>
                      <div className={`${style.notification} ${style.fan}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>te urmăreşte!</p>
                        </div>
                      </div>
                      <div className={`${style.notification} ${style.feat}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>vrea să colaboraţi!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="chat">Colaborează!</Link>
                          </b>
                        </p>
                      </div>
                      <div className={`${style.notification} ${style.joined}`}>
                        <div className={style.p1}>
                          <img src="/img/osky1.jpg" alt="" className={style.profileimg} />
                          <p className={style.notif_username}>
                            <b>
                              <Link href="userprofile">loremipsum</Link>
                            </b>
                          </p>
                          <p>s-a alăturat!</p>
                        </div>
                        <p className={style.post_thumbnail}>
                          <b>
                            <Link href="userprofile">Vezi contul!</Link>
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={style.r_side}>
                    <div className={style.monthly_cards}>
                      <div className={style.artistofthemonth}>
                        <img src="/img/osky1.jpg" className={style.profileimg} alt="" />
                        <div className={style.blok}>
                          <h2>ARTISTUL LUNII!</h2>
                          <h3>
                            <Link href="userprofile">LOREM123</Link>
                          </h3>
                        </div>
                      </div>
                      <div className={style.sellerofthemonth}>
                        <img src="/img/osky1.jpg" className={style.profileimg} alt="" />
                        <div className={style.blok}>
                          <h2>VÂNZĂTORUL LUNII!</h2>
                          <h3>
                            <Link href="userprofile">LOREM123</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className={style.quests}>
                      <h1>MISIUNI</h1>
                      <div className={style.q1}>
                        <h4>
                          Creează 12 postări pentru a primi 1 punct în clasamentul artiștilor
                        </h4>
                        <div className={`${style.checked_q1} ${style.completed}`}>
                          <i className="fa-solid fa-check" />
                        </div>
                      </div>
                      <div className={style.q2}>
                        <h4>
                          Creează 7 produse pentru a primi 1 punct în clasamentul vânzătorilor{" "}
                        </h4>
                        <div className={style.checked_q2}>
                          <i className="fa-solid fa-check" />
                        </div>
                      </div>
                      <h1>DESPRE MISIUNI</h1>
                      <p>
                        Completează aceste misiuni în fiecare lună pentru a avea un avantaj în
                        fața celorlalți și pentru a avansa în clasament. Terminându-le, mai
                        mulți utilizatori îți vor vedea conținutul.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.profile_bar}>

                <div className={style.frow}>
                  <h5>Listă Contracte</h5>
                  <Link
                    href="/chat"
                    style={{
                      width: 180,
                      borderRadius: "5px",
                      cursor: "pointer",
                      display: "flex",
                      padding: "10px ",
                      color: "white",
                      backgroundColor: "#6657DA"
                    }}
                  >
                    <h4 style={{ fontSize: 14 }}>Verifică-ți mesajele</h4>
                    <i
                      className="fa-solid fa-arrow-right-long"
                      style={{ marginLeft: 145, marginTop: 3 }}
                    />
                  </Link>
                </div>
                <ul>
                  <Link href="#">
                    <li className={`${style.get} ${style.notif}`}>
                      <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                      <div className={style.message}>
                        <h1 className={style.artistname}>LOREM123</h1>
                        <p>contract primit</p>
                      </div>
                    </li>
                  </Link>

                  <li className={style.send}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                    <div className={style.message}>
                      <h1 className={style.artistname}>LOREM123</h1>
                      <p>contract trimis</p>
                    </div>
                  </li>

                  <li className={style.send}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                    <div className={style.message}>
                      <h1 className={style.artistname}>LOREM123</h1>
                      <p>contract trimis</p>
                    </div>
                  </li>
                  <Link href="#">
                    <li className={`${style.get} ${style.notif}`}>
                      <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                      <div className={style.message}>
                        <h1 className={style.artistname}>LOREM123</h1>
                        <p>contract primit</p>
                      </div>
                    </li>
                  </Link>
                  <li className={style.send}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                    <div className={style.message}>
                      <h1 className={style.artistname}>LOREM123</h1>
                      <p>contract trimis</p>
                    </div>
                  </li>
                  <Link href="#">
                    <li className={`${style.get} ${style.notif}`}>
                      <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                      <div className={style.message}>
                        <h1 className={style.artistname}>LOREM123</h1>
                        <p>contract primit</p>
                      </div>
                    </li>
                  </Link>

                  <li className={style.send}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                    <div className={style.message}>
                      <h1 className={style.artistname}>LOREM123</h1>
                      <p>contract trimis</p>
                    </div>
                  </li>

                  <li className={style.send}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                    <div className={style.message}>
                      <h1 className={style.artistname}>LOREM123</h1>
                      <p>contract trimis</p>
                    </div>
                  </li>
                  <Link href="#">
                    <li className={`${style.get} ${style.notif}`}>
                      <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                      <div className={style.message}>
                        <h1 className={style.artistname}>LOREM123</h1>
                        <p>contract primit</p>
                      </div>
                    </li>
                  </Link>
                  <li className={style.send}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                    <div className={style.message}>
                      <h1 className={style.artistname}>LOREM123</h1>
                      <p>contract trimis</p>
                    </div>
                  </li>
                  <Link href="#">
                    <li className={`${style.get} ${style.notif}`}>
                      <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                      <div className={style.message}>
                        <h1 className={style.artistname}>LOREM123</h1>
                        <p>contract primit</p>
                      </div>
                    </li>
                  </Link>

                  <li className={style.send}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                    <div className={style.message}>
                      <h1 className={style.artistname}>LOREM123</h1>
                      <p>contract trimis</p>
                    </div>
                  </li>

                  <li className={style.send}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                    <div className={style.message}>
                      <h1 className={style.artistname}>LOREM123</h1>
                      <p>contract trimis</p>
                    </div>
                  </li>
                  <Link href="#">
                    <li className={`${style.get} ${style.notif}`}>
                      <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                      <div className={style.message}>
                        <h1 className={style.artistname}>LOREM123</h1>
                        <p>contract primit</p>
                      </div>
                    </li>
                  </Link>
                  <li className={style.send}>
                    <img src="/img/osky1.jpg" alt="" className={style.profileImg} />
                    <div className={style.message}>
                      <h1 className={style.artistname}>LOREM123</h1>
                      <p>contract trimis</p>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div >
      <Script
        src="/js/animation.js"
        onLoad={() => {
          console.log('Script has loaded')
        }}
      />
    </>
  )
}
