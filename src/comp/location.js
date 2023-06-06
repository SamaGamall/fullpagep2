import React, { useState } from 'react';
import { Link, NavLink  } from "react-router-dom";
import './Header.css';
import {FaBars} from 'react-icons/fa';
import './location.css';
import MenuIcon from '@mui/icons-material/Menu';


const Location = () => {
  return (
<>
  <meta charSet="UTF-8" />
  <link rel="stylesheet" href="css/all.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,900&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="css/master.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>donor center location</title>
  <section id="container1-3">
    <section className="container1-3">
      <div className="caption">
        <div className="grid-tex">
          <h1>DONATION CENTER LOCATIONS</h1>
          <p>
            Donors can make appointments to give blood at any of our permanent
            Donor Centers or at routine mobile locations located throughout
            ImpactLife’s service region.
          </p>
        </div>
        <div className="grid-img">
          <img src="images/WhatsApp Image 2023-04-29 at 10.18.54 AM (2).jpeg" />
        </div>
      </div>
    </section>
    <section className="tabel">
      <p>
        Select the most convenient donation center for a map and driving
        directions.You can also make an appointment online or by calling
        1-800-747-5401.
      </p>
      <div className="tabell">
        <div className="grid-tabel">
          <h3> Cairo</h3>
          <ul>
            <li>
              <a href="https://www.140online.com/company/NW13488/%D8%A8%D9%86%D9%83%20%D8%AF%D9%85%20%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9">
                القاهرة الجديدة
              </a>
            </li>
            <li>
              <a href="https://doctorak.com/eg/hospital/39/address">
                مستشفى البنك الأهلي
              </a>
            </li>
            <li>
              <a href="https://www.egyptianrc.org/Arabic/ERC-Activities/Activities/ActivityDetails/27">
                الهلال الاحمر
              </a>
            </li>
            <li>
              <a href="https://healtheg.com/ar/Results/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%8A%D8%A7%D8%AA/%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9/%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85">
                مستشفى السلام
              </a>
            </li>
            <li>
              {" "}
              <a href="http://hospitals.asu.edu.eg/?page_id=6234&lang=ar">
                الدمرداش{" "}
              </a>
            </li>
            <li>
              <a href="https://www.vaidam.com/ar/hospitals/new-kasr-el-aini-teaching-hospital-cairo">
                القصر العيني
              </a>
            </li>
            <li>
              <a href="https://healtheg.com/ar/Item/729/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D8%AD%D9%84%D9%88%D8%A7%D9%86-%D8%A7%D9%84%D8%B9%D8%A7%D9%85">
                حلوان العام{" "}
              </a>
            </li>
            <li>
              <a href="https://yellowpages.com.eg/ar/profile/%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%A7%D9%82%D9%84%D9%8A%D9%85%D9%89-%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%AF%D9%85/648796">
                مستشفي العباسية
              </a>
            </li>
            <li>
              <a href="https://www.140online.com/Classes/2/173/463/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D9%87/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%89/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%8A%D8%A7%D8%AA">
                المعادي
              </a>
            </li>
            <li>
              <a href="https://www.57357.org/ar/department/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%AA%D8%A8%D8%B1%D8%B9-%D8%A8%D8%A7%D9%84%D8%AF%D9%85/%D8%B9%D9%86-%D8%A7%D9%84%D9%82%D8%B3%D9%85/">
                57357{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-tabel">
          <h3> Giza</h3>
          <ul>
            <li>
              <a href="https://www.140online.com/company/C23222/%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%20%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%89%20%D9%84%D9%86%D9%82%D9%84%20%D8%A7%D9%84%D8%AF%D9%85/">
                المركز القومي
              </a>
            </li>
            <li>
              <a href="http://misrhospital.org/ar/outpatient-clinics/">
                مصرالدولي
              </a>
            </li>
            <li>
              <a href="https://alcairo24.com/places/20841847">بنك السوسري</a>
            </li>
            <li>
              <a href="https://eghospitals.com/hospital/3572">ام المصريين</a>
            </li>
          </ul>
        </div>
        <div className="grid-tabel">
          <h3> Alwajat albahriu</h3>
          <ul>
            <li>
              <a href="http://www2.mans.edu.eg/hospitals/emhospital/blood-donation.htm">
                المركز الإقليمي بالمنصورة
              </a>
            </li>
            <li>
              <a href="https://www.masrawy.com/howa_w_hya/relationship/details/2017/4/9/1057868/%D8%A8%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%88%D9%8A%D9%86-%D9%88%D8%A7%D9%84%D8%A3%D8%B1%D9%82%D8%A7%D9%85-%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D9%88%D8%A8%D9%86%D9%88%D9%83-%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%AF%D9%85-%D9%81%D9%8A-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9">
                المركز الإقليمي في طنطا
              </a>
            </li>
            <li>
              <a href="https://dmni.gov.eg/%D8%A7%D9%84%D8%AA%D8%A8%D8%B1%D8%B9-%D8%A8%D8%A7%D9%84%D8%AF%D9%85/">
                المركز الإقليمي بدمنهور
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/blood.bank.rbtc/">
                المركز الإقليمي بالاسماعيلية
              </a>
            </li>
            <li>
              <a href="https://www.dalil140.com/company?lng=ar&n=440555-regional-center-blood-transfusion">
                المركز الإقليمي بالزقازيق
              </a>
            </li>
            <li>
              <a href="http://www.qaliobia.gov.eg/SitePages/Blood_Bank.aspx">
                المركز الإقليمي ببنها
              </a>
            </li>
            <li>
              <a href="https://www.dalil140.com/branches?lng=ar&n=42150-regional-center-blood-transfusion&s=el-monofeya&c=shebein-el-kawm">
                المركز الإقليمي بشبين الكوم
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/AlmrkzAlaqlymyLkhdmatNqlAldmBkfralshykh/?locale=ar_AR">
                المركز الإقليمي بكفر الشيخ
              </a>
            </li>
            <li>
              <a href="http://www.facebook.com/bloodbankalex">
                المركز الاقليمي اسكندرية
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-tabel">
          <h3> Upper Egypt</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/Minya.RBTC/?locale=ar_AR">
                المركز الإقليمي المنيا
              </a>
            </li>
            <li>
              <a href="https://addarea.com/addarea/page/98742/%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%A7%D9%82%D9%84%D9%8A%D9%85%D9%89-%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%AF%D9%85-%D8%A8%D8%B3%D9%88%D9%87%D8%A7%D8%AC/">
                المركز الإقليمي بسوهاج
              </a>
            </li>
            <li>
              <a href="https://yellowpages.com.eg/ar/profile/%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%A7%D9%82%D9%84%D9%8A%D9%85%D9%89-%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%AF%D9%85/648907">
                المركز الإقليمي بأسيوط
              </a>
            </li>
            <li>
              <a href="https://blood-bank-12.business.site/">
                المركز الإقليمي بقنا
              </a>
            </li>
            <li>
              <a href="https://ar-ar.facebook.com/mr.and.mrs.hero/">
                المركز الإقليمي بالأقصر
              </a>
            </li>
            <li>
              <a href="https://healtheg.com/ar/Item/1295/%D8%A8%D9%86%D9%83-%D8%A7%D9%84%D8%AF%D9%85-%D8%A7%D9%84%D8%A7%D9%82%D9%84%D9%8A%D9%85%D9%89-%D8%A8%D8%A3%D8%B3%D9%88%D8%A7%D9%86">
                المركز الإقليمي بأسوان
              </a>
            </li>
            <li>
              <a href="https://099.tel/Egypt/w/blood-banks">
                Egypt Emergency Guide
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="map">
      <hr />
      <div className="maps">
        <div className="grid-map">
          <h2>Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110546.8020357678!2d31.32425831902136!3d30.019996932375864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584733ca6ef37b%3A0x8627a309b9fd698d!2z2YXYs9iq2LTZgdmJINin2YTZgti12LEg2KfZhNi52YrZhtmKINin2YTYqtiu2LXYtdmK!5e0!3m2!1sar!2seg!4v1682750902442!5m2!1sar!2seg"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </section>
</>


  );
}

export default Location;

