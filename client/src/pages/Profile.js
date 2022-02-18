import { useState } from "react";
import { Container } from "react-bootstrap";

//import components
import Navbar from "../components/Navbar"

//import data profile
import { userProfile } from "../fake-data/userProfile"

//import data transactions
import { dataTransactions } from "../fake-data/data-transactions"

export default function Profile() {

  const [isLogin, setIsLogin] = useState(true)
  const dataUser = userProfile

  let {id, url, fullName, email, phone} = dataUser

  let bill = dataTransactions[0].date

  console.log(new Date(bill))

  console.log(new Date().getDate())

  console.log(getFullTime(new Date(bill)))

  return(
    <Container fluid>
      <Navbar isLogin={isLogin}/>
      <div className="profile">
        <div className="profile-left">
          <h3>
            My Profile
          </h3>
          <div className="profile-data">
            <div className="profile-data-img">
              <img src={url} alt="profile-image"/>
            </div>
            <div className="profile-data-user">
              <div className="profile-data-user-group">
                <h6>
                  Full Name
                </h6>
                <p>
                  {fullName}
                </p>
              </div>
              <div className="profile-data-user-group">
                <h6>
                  Email
                </h6>
                <p>
                  {email}
                </p>
              </div>
              <div className="profile-data-user-group">
                <h6>
                  Phone
                </h6>
                <p>
                  {phone}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-right">
          <h3>
            History Transaction
          </h3>

          {dataTransactions.map((data)=> {
            return (
              <div key={data.id} className="transaction-detail">
                <h6 className="transaction-film">
                  {data.filmTitle}
                </h6>
                <h6 className="transaction-day">
                 {getDay(data.date)}, <span className="transaction-date">{getFullTime(new Date(data.date))}</span>
                </h6>
                <h6 className="transaction-price">
                  Total : Rp. {data.price}
                </h6>
                <span className="transaction-status">{data.status}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

const month = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

function getDay(time) {
  // let d = new Date(time)
  let day = days[new Date(time).getDay()]

  return day
}

function getFullTime(time) {

  /* This is new Date() default value:
  Mon Dec 20 2021 09:05:06 GMT+0700 (Waktu Indonesia Barat)*/
  
  let date = time.getDate() //tanggal getDate()
  let monthIndex = time.getMonth() //Bulan getMonth()
  let year = time.getFullYear() //Tahun getFullYear()

  let hours = time.getHours() //Jam getHours()
  let minutes = time.getMinutes() //Menit getMinutes()

  let fullTime = `${date} ${month[monthIndex]} ${year}`

  return fullTime
}