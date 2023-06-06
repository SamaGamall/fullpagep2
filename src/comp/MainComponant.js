import zIndex from '@mui/material/styles/zIndex';
import './MainComponant.css';
import React from 'react';

const MainComponant = () => {
  return (
    <>


  {/* Start About  */}

  <div className=" grid main-header ">
    <section className="main-header__desc">
      <h2>
        Blood <span>Donate</span> <br />
        To Save a Life
      </h2>
      <p>
        Connecting volunteer blood donors with patients with minutes at
        <span>zero cost.</span>
      </p>
      <a className="button " href="#">
        {" "}
        Find Blood Now
      </a>
      {/* <p>your blood can bring a smile in another person's face.</p> */}
    </section>
    <section className="main-header__img">
      <div className="animations">
        <img src="./images/header.svg" alt="header animation" />
      </div>
    </section>
  </div>
  {/* End header */}
  {/* Start About  */}
  <section id="about" className="about grid">
    <div href="about" className="about__container">
      <h2>About BloodDonate Connect</h2>
      <p>
        BloodDonate Connect is an innovative approach to health treatment in
        Egypt. We provide immediate access to blood donors across Egypt, 24
        hours a day, 7 days a week. BloodDonate Connect is one of many community
        organizations that work together as one network.
      </p>
      <a href="#" className="button ">
        Learn More About us <span className="arrow " />
      </a>
    </div>
  </section>


  {/* End About  */}
  {/* Start Acceptable */}
  <section id="blood" className="acceptable">
    <div className="grid">
      <div className="acceptable__header">
        <h2>blood donation</h2>
        <p>
          You can usually donate blood two to three times during the year, every
          16 weeks so that there is enough time period for your blood to build
          up its iron stock between each donation.
        </p>
      </div>
      <div className="acceptable__main">
        {/* blood type A+ */}
        <div className=" main-grid " id="Type_1" data-target-content="">
          <div className="content-desc">
            <h2 className="content-desc__header">A+</h2>
            <div className="content-desc__main">
              <p>
                The bearer of this superfamily is characterized by the body the
                process of metabolism is very rapid sensitivity of the
                gastrointestinal tract but has a very weak immune system has the
                capacity to cope with environmental changes and food there are
                some foods that fit his body like
                <span> seafood, vegetables, legumes </span> and prefers not to
                eat red meat and dairy derivatives, wheat . Blood Type A is more
                likely to
                <span>
                  accumulate and accumulate mucosa in the digestive tract than
                  other species.
                </span>
              </p>
              <ul className="main-type">
                <li>
                  <h3>Receive</h3>
                  <ul>
                    <li>A+</li>
                    <li>A-</li>
                    <li>O+</li>
                    <li>O-</li>
                  </ul>
                </li>
                <li>
                  <h3>Donates</h3>
                  <ul>
                    <li>A+</li>
                    <li>AB+</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        
        </div>
        {/* blood type A- */}

        <div className="main-grid" id="Type_2" data-target-content="">
          <div className="content-desc">
            <h2 className="content-desc__header">A-</h2>
            <div className="content-desc__main">
              <p>
                The bearer of this superfamily is characterized by the body the
                process of metabolism is very rapid sensitivity of the
                gastrointestinal tract but has a very weak immune system has the
                capacity to cope with environmental changes and food there are
                some foods that fit his body like
                <span> seafood, vegetables, legumes </span> and prefers not to
                eat red meat and dairy derivatives, wheat . Blood Type A is more
                likely to
                <span>
                  accumulate and accumulate mucosa in the digestive tract than
                  other species.
                </span>
              </p>
              <ul className="main-type">
                <li>
                  <h3>Receive</h3>
                  <ul>
                    <li>A-</li>
                    <li>O-</li>
                  </ul>
                </li>
                <li>
                  <h3>Donates</h3>
                  <ul>
                    <li>A+</li>
                    <li>A-</li>
                    <li>AB+</li>
                    <li>AB-</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        {/* blood type Ab+ */}
        
        <div className="main-grid" id="Type_3" data-target-content="">
          <div className="content-desc">
            <h2 className="content-desc__header">AB+</h2>
            <div className="content-desc__main">
              <p>
                It's called the stingy species because it doesn't accept blood
                from any other species, but it only gives blood to its species.
                The bearer of this superfamily is characterized by device
                regions of weak and foods that fit the nature of his body is a
                combination of special food with A blood type B in addition to
                that, his body more susceptible to certain diseases
                <span>such as diabetes, anemia, and cancer </span>.
              </p>
              <ul className="main-type">
                <li>
                  <h3>Receive</h3>
                  <ul>
                    <li>Every One</li>
                  </ul>
                </li>
                <li>
                  <h3>Donates</h3>
                  <ul>
                    <li>AB+</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        
        </div>
        
        {/* blood type Ab- */}
        <div className="main-grid" id="Type_4" data-target-content="">
          <div className="content-desc">
            <h2 className="content-desc__header">AB-</h2>
            <div className="content-desc__main">
              <p>
                It's called the stingy species because it doesn't accept blood
                from any other species, but it only gives blood to its species.
                The bearer of this superfamily is characterized by device
                regions of weak and foods that fit the nature of his body is a
                combination of special food with A blood type B in addition to
                that, his body more susceptible to certain diseases
                <span> such as diabetes, anemia, and cancer</span>.
              </p>
              <ul className="main-type">
                <li>
                  <h3>Receive</h3>
                  <ul>
                    <li>AB-</li>
                    <li>A-</li>
                    <li>B-</li>
                    <li>O-</li>
                  </ul>
                </li>
                <li>
                  <h3>Donates</h3>
                  <ul>
                    <li>AB+</li>
                    <li>AB-</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        
        {/* blood type o+ */}
        <div className="main-grid" id="Type_5" data-target-content="">
          <div className="content-desc">
            <h2 className="content-desc__header">O+</h2>
            <div className="content-desc__main">
              <p>
                Allow a platoon of blood-precious because it does not contain
                antibodies to the head of this platoon does not take blood only
                from the species itself, but it gives the blood of the factions
                other, heat blood type O is characterized by the fact that her
                digestive system strong and suitable for an active also there is
                a range of foods to fit his body too
                <span>
                  such as vegetables, fruits, red meat, legumes, and wheat{" "}
                </span>
                . These persons are exposed to coagulopathy, clots, arthritis,
                allergies and ulcers.
              </p>
              <ul className="main-type">
                <li>
                  <h3>Receive</h3>
                  <ul>
                    <li>O+</li>
                    <li>O-</li>
                  </ul>
                </li>
                <li>
                  <h3>Donates</h3>
                  <ul>
                    <li>AB+</li>
                    <li>O+</li>
                    <li>B+</li>
                    <li>A+</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        
        {/* blood type o- */}
        <div className="main-grid" id="Type_6" data-target-content="">
          <div className="content-desc">
            <h2 className="content-desc__header">O-</h2>
            <div className="content-desc__main">
              <p>
                Allow a platoon of blood-precious because it does not contain
                antibodies to the head of this platoon does not take blood only
                from the species itself, but it gives the blood of the factions
                other, heat blood type O is characterized by the fact that her
                digestive system strong and suitable for an active also there is
                a range of foods to fit his body too
                <span>
                  such as vegetables, fruits, red meat, legumes, and wheat
                </span>
                . These persons are exposed to coagulopathy, clots, arthritis,
                allergies and ulcers.
              </p>
              <ul className="main-type">
                <li>
                  <h3>Receive</h3>
                  <ul>
                    <li>O-</li>
                  </ul>
                </li>
                <li>
                  <h3>Donates</h3>
                  <ul>
                    <li>Every One</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        
        </div>
        
        {/* blood type B+ */}
        <div className="main-grid" id="Type_7" data-target-content="">
          <div className="content-desc">
            <h2 className="content-desc__header">B+</h2>
            <div className="content-desc__main">
              <p>
                The bearer of this superfamily is characterized by the ability
                to cope with changes in food and Environmental has a strong
                immune system and a nervous system balanced .There are a range
                of foods suitable to the nature of his body but would prefer not
                to excessive in some foods
                <span>
                  such as legumes, vegetables, milk and dairy products and
                  fruits{" "}
                </span>
                . The risks of this species are their vulnerability to diseases
                such as osteoporosis, diabetes and chronic fatigue.
              </p>
              <ul className="main-type">
                <li>
                  <h3>Receive</h3>
                  <ul>
                    <li>B+</li>
                    <li>B-</li>
                    <li>O+</li>
                    <li>O-</li>
                  </ul>
                </li>
                <li>
                  <h3>Donates</h3>
                  <ul>
                    <li>AB+</li>
                    <li>B+</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        
        </div>
        
        {/* blood type B- */}
        <div className="main-grid" id="Type_8" data-target-content="">
          <div className="content-desc">
            <h2 className="content-desc__header">B-</h2>
            <div className="content-desc__main">
              <p>
                The bearer of this superfamily is characterized by the ability
                to cope with changes in food and Environmental has a strong
                immune system and a nervous system balanced .There are a range
                of foods suitable to the nature of his body but would prefer not
                to excessive in some foods
                <span>
                  such as legumes, vegetables, milk and dairy products and
                  fruits
                </span>
                . The risks of this species are their vulnerability to diseases
                such as osteoporosis, diabetes and chronic fatigue.
              </p>
              <ul className="main-type">
                <li>
                  <h3>Receive</h3>
                  <ul>
                    <li>B-</li>
                    <li>O-</li>
                  </ul>
                </li>
                <li>
                  <h3>Donates</h3>
                  <ul>
                    <li>B+</li>
                    <li>B-</li>
                    <li>AB+</li>
                    <li>AB-</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  {/* End Acceptable */}
  {/* Start section care */}
  {/* start Pre donation */}
  <section id="instructions" className="care-section grid">
    <h2>Pre donation instructions</h2>
    <div className="care-section__content">
      <div>
        <img src="./images/sleep.png" alt="sleep photo" />
        <p>Get enough sleep on the night of the donation.</p>
      </div>
      <div>
        <img src="./images/eat.png" alt="Eat photo" />
        <p>Eat a balanced meal two hours before donating.</p>
      </div>
      <div>
        <img src="./images/no-drink.png" alt="no drink photo" />
        <span className="icon icon--error" />
        <p>You should not drink liquids with caffeine.</p>
      </div>
      <div>
        <img src="./images/Drink.png" alt="drink photo" />
        <p>You should drink more fluids than usual.</p>
      </div>
    </div>
  </section>
  {/* End Pre donation */}
  {/* Start Donation instructions */}
  <section className="instructions grid ">
    <div className="instructions-header">
      <h2>Donation instructions</h2>
      <span className="icon" />
    </div>
    <div className="instructions-main">
      <div className="instructions-main__desc">
        <div className="left">
          <img src="./images/reception.png" alt="image some instructions" />
        </div>
        <div className="right">
          <h3>Go to the reception</h3>
          <p>The donor starts their journey by contacting the registry.</p>
        </div>
      </div>
      <div className="instructions-main__desc">
        <div className="left">
          <img src="./images/blood sample.png" alt="image some instructions" />
        </div>
        <div className="right">
          <h3>Take blood sample</h3>
          <p>
            Take a blood sample and test to determine whether or not to donate.
          </p>
        </div>
      </div>
      <div className="instructions-main__desc">
        <div className="left">
          <img src="./images/Doctor's permit.png" alt="image some instructions" />
        </div>
        <div className="right">
          <h3>Doctor's permit</h3>
          <p>The doctor makes a decision about accepting a blood donation.</p>
        </div>
      </div>
      <div className="instructions-main__desc">
        <div className="left">
          <img src="./images/eat.png" alt="image some instructions" />
        </div>
        <div className="right">
          <h3>Food</h3>
          <p>
            Before donating it is necessary to eat a meal, do not donate blood
            on an empty stomach.
          </p>
        </div>
      </div>
      <div className="instructions-main__desc">
        <div className="left">
          <img src="./images/donation room.png" alt="image some instructions" />
        </div>
        <div className="right">
          <h3>Blood donation</h3>
          <p>The donation is made in the donation room.</p>
        </div>
      </div>
      <div className="instructions-main__desc">
        <div className="left">
          <img
            src="./images/Donors certificate.png"
            alt="/image some instructions"
          />
        </div>
        <div className="right">
          <h3>Donor's certificate</h3>
          <p>After donating, the donor's certificate will be issued.</p>
        </div>
      </div>
    </div>
  </section>
  {/* End Donation instructions */}
  {/* start Post donation */}
  <section id="instructions" className="care-section grid">
    <h2>Post donation instructions</h2>
    <div className="care-section__content">
      <div>
        <img src="./images/Drink.png" alt="drink photo" />
        <p>You should drink more fluids than usual.</p>
      </div>
      <div>
        <img src="./images/break.png" alt="break photo" />
        <p>After donating, take a break and snack.</p>
      </div>
      <div>
        <img src="./images/Leave.png" alt="leave photo" />
        <p>After 10-15 minutes you can leave the place.</p>
      </div>
      <div>
        <img src="./images/gym.png" alt="gym photo" />
        <span className="icon icon--error" />
        <p>Avoid heavy physical activity for 5 hours.</p>
      </div>
    </div>
  </section>
</>


  
  );
}

export default MainComponant;
