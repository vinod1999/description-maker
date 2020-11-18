import React from "react";

function Informations({
  descTextComponents,
  specTextComponents,
  altComponents,
  descImageComponents,
  specImageComponents,
  allImageComponents,
}) {
  return (
    <div>
      <section className="section-3">
        <div className="information">
          <input type="checkbox" id="ch1" checked />
          <input type="checkbox" id="ch2" checked />
          <input type="checkbox" id="ch3" checked />
          <input type="checkbox" id="ch4" checked />

          <div className="cards-container">
            <div className="description">
              <div className="desc-wrapper">
                <div className="text">
                  <div className="title">
                    <h2>DESCRIPTION</h2>
                  </div>
                  <div>
                    <ul>{descTextComponents}</ul>
                  </div>
                  <div className="spec_images">
                    <ul>{specImageComponents}</ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="specification">
              <div className="spec-wrapper">
                <div className="text">
                  <div className="title">
                    <h2>SPECIFICATION</h2>
                  </div>
                  <div>
                    <ul>{specTextComponents}</ul>
                  </div>
                  <div className="spec_images">
                    <ul>{specImageComponents}</ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="more_images">
              <div className="more_images-wrapper label-container">
                <label className="lbl" htmlFor="ch1" id="lb1">
                  <div className="text">
                    <div className="title">
                      <h2>MORE</h2>
                      <div className="arrow"></div>
                    </div>
                  </div>

                  <div className="text feedbakc-box">
                    <ul>
                      {altComponents}
                      {allImageComponents}
                      {/* <!-- POFHS ERROR CODE 81 --> */}
                    </ul>
                  </div>
                </label>
              </div>
            </div>
            <div className="payment">
              <div className="logo">
                <div className="logo-wrapper">
                  <img
                    src="https://lh5.googleusercontent.com/J5BcIRHsDhdF1d2yDgqnv73zQIJ1BXjXpj0QM8eZt7hsIihKSpWFFKLdSS6K0NTmXc2KObAffM_TBosDT5cgN-Opyg4MBDg2vnVHftD6qmH8zCNJMLzNRIH3bJ89WtBmXZP194Q"
                    alt=""
                  />
                </div>
              </div>
              <div className="text">
                <h2>PAYMENTS</h2>
                <p>We accept paypal only.</p>
              </div>
            </div>
            <div className="satisfaction">
              <div className="logo">
                <div className="logo-wrapper">
                  <img
                    src="https://lh5.googleusercontent.com/4Av1WF6_3WypMxexO8hJD84PHPCwUsl7LMEaRozTOiKtkn7mVkwx5lgAEStteAWic7wvnd080ug8HVvlqrN46QGGNx6sL78i-Q9wm7WUQVORqwNpboKu3F1rHw618K-aYuEZlLA"
                    alt=""
                  />
                </div>
              </div>
              <div className="text">
                <h2>SATISFACTION</h2>
                <p>100% satisfaction guaranteed.</p>
              </div>
            </div>
            <div className="delivery">
              <div className="logo">
                <div className="logo-wrapper">
                  <img
                    src="https://lh4.googleusercontent.com/YqyTUUZu8byz8igwYNOfHxhgMcD-Db8wCn_Hjgvbip7cSgBR9IbhcSMF0Wq3aBEDlieKhNjo38T4Bsd3hCC7QeBdcVE54_WqXpIPp17D9krHnvO8aEE5n2W3ACE-pd5e0p1gkXw"
                    alt=""
                  />
                </div>
              </div>
              <div className="text">
                <h2>FAST DELIVERY</h2>
                <p>Handle within 2 days.</p>
              </div>
            </div>
            <div className="shipping">
              <div className="shipping-wrapper label-container">
                <label className="lbl" htmlFor="ch2" id="lb2">
                  <div className="text">
                    <div className="title">
                      <h2>SHIPPING</h2>
                      <div className="arrow"></div>
                    </div>
                  </div>
                  <div className="text shipping-box">
                    <ul>
                      <li>
                        <p>
                          All orders are handled right away and we usually ship
                          on next one to two business days.
                        </p>
                      </li>
                      <li>
                        <p>
                          It hasn't been changed in any way from its original
                          condition, including packaging.
                        </p>
                      </li>
                      <li>
                        <p>It is stored safely until we ship it.</p>
                      </li>
                      <li>
                        <p>
                          We check your product manually before shipment. (item
                          condition, packing errors etc.)
                        </p>
                      </li>
                      <li>
                        <p>Shipped in secure Bubble Mailer.</p>
                      </li>
                      <li>
                        <p>100% Buyer Satisfaction Guaranteed.</p>
                      </li>
                      <li>
                        <p>
                          We provide you with tracking number,so packages don't
                          get lost.Tracking number is updated same day after
                          shipping.
                        </p>
                      </li>
                      <li>
                        <p>
                          Economy arrival at the destination worldwide is 11-35
                          working days.
                        </p>
                      </li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>
            <div className="return">
              <div className="return-wrapper label-container">
                <label className="lbl" htmlFor="ch3" id="lb3">
                  <div className="text">
                    <div className="title">
                      <h2>RETURN</h2>
                      <div className="arrow"></div>
                    </div>
                  </div>

                  <div className="text return-box">
                    <ul>
                      <li>
                        <p>
                          If you are not satisfied with your item,please return
                          it within 30 days htmlFor a replacement or money
                          back.Please contact us before you return it.
                        </p>
                      </li>
                      <li>
                        <p>
                          Refund will be given as a replacement(Buyers choice)
                          or money back.
                        </p>
                      </li>
                      <li>
                        <p>
                          Return shipping or exchange postage will be paid by
                          buyer.
                        </p>
                      </li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>
            <div className="feedback">
              <div className="feedback-wrapper label-container">
                <label className="lbl" htmlFor="ch4" id="lb4">
                  <div className="text">
                    <div className="title">
                      <h2>FEEDBACK</h2>
                      <div className="arrow"></div>
                    </div>
                  </div>

                  <div className="text feedbakc-box">
                    <ul>
                      <li>
                        <p>
                          As you know, this is very important htmlFor us.if you
                          are happy,we are happy! :){" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          Leave a "Positive Feedback" and "5 perfect Stars: when
                          you receive your items and we will do the same htmlFor
                          you.
                        </p>
                      </li>
                      <li>
                        <p>
                          Please dont hesitate to contact us via massage if you
                          have any problem or question!
                        </p>
                      </li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Informations;
