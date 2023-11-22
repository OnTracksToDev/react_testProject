import "./Contact.css";

// import facebook from 'C:\Users\STE-CM04-SG03-Admin\Desktop\react-projet\react-projet\src\images\facebook_icon.png';
// import twitter from 'C:\Users\STE-CM04-SG03-Admin\Desktop\react-projet\react-projet\src\images\twitter_icon.png';
// import instagram from 'C:\Users\STE-CM04-SG03-Admin\Desktop\react-projet\react-projet\src\images\instagram_icon.png';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section>
      <h2 className="d-flex justify-content-center"> Contact </h2>

      <section id="container-contact" className="d-flex justify-content-evenly">
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d304.5246043981827!2d4.8910941430855495!3d52.3668508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ea7fe8a8f1%3A0x62b6d79a863316f2!2sAviflora!5e0!3m2!1sfr!2sfr!4v1690285400170!5m2!1sfr!2sfr"
            width="100%"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div id="formulaire-contact">
          <form className="row g-3">
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>

            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>

            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="col-md-4">
              <label for="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-2">
              <label for="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </section>

      <div id="contact-media" className="d-flex justify-content-center">
        <Link to="#">
          <img src={require("../../images/home_icon.png")} />: Singel 616, 1017
          AZ Amsterdam, Pays-Bas
        </Link>

        <Link to="#">
          <img src={require("../../images/call_icon.png")} /> : +31206226592
        </Link>

        <Link to="#">
          <img src={require("../../images/facebook_icon.png")} />
        </Link>

        <Link to="#">
          <img src={require("../../images/instagram_icon.png")} />
        </Link>

        <Link to="#">
          <img src={require("../../images/twitter_icon.png")} />
        </Link>
      </div>
    </section>
  );
};
export default Contact;
