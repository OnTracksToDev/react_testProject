import "./Galerie.css";

const Galerie = () => {
  return (
    <section>
      <h2> Galerie </h2>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../../images/namibia.jpg")}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../../images/climat.jpg")}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../../images/nature.jpg")}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../../images/forest-fire.jpg")}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../../images/iceland.jpg")}
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div data-aos="fade-up">
        <h3>Lorem ipsum</h3>

        <p>
          Lorem ipsum dolor sit amet. Aut debitis dolorum{" "}
          <em>Et debitis aut beatae repellat ex facere possimus</em> vel fugiat
          autem At quis dicta. Sed eius voluptatem qui assumenda commodiEt eius
          ut sunt veritatis et quia quisquam id nulla necessitatibus. Et
          dignissimos iusto{" "}
          <strong>Est dolorum in fuga consectetur in dolores molestiae</strong>{" "}
          At voluptate quos aut quis quia qui dolores dolor?{" "}
        </p>
        <p>
          Quo omnis nesciunt <strong>Aut sint</strong> non voluptatem dolorum.
          Quo dignissimos rerum et quasi aspernaturaut nihil hic excepturi rerum
          eum soluta vitae!{" "}
        </p>
        <p>
          Ut quaerat ducimus <em>Et iste</em> aut dignissimos deleniti vel
          voluptate provident. Et deserunt voluptatum{" "}
          <strong>Est laborum cum autem ipsum aut assumenda dolores</strong> ad
          similique fuga ut sapiente magnam? Ab itaque distinctio et animi
          velitnon autem sed iste tempore.{" "}
        </p>
        <ul>
          <li>Ut veniam accusantium vel atque accusantium. </li>
          <li>
            In voluptas impedit quo rerum officiis qui corrupti quasi qui
            mollitia quisquam?{" "}
          </li>
          <li>
            A modi accusamus ut libero quia et rerum iste et rerum placeat.{" "}
          </li>
          <li>
            Eum voluptatem beatae ut architecto aperiam et quasi deserunt.{" "}
          </li>
          <li>
            Aut numquam doloribus ad provident iste aut eligendi voluptatem.{" "}
          </li>
        </ul>

        <p>
          Aut facere autem sit fuga esseEx mollitia. Aut nihil vero aut maiores
          quaerat <em>Ut sapiente qui rerum omnis</em>. Eum soluta eveniet id
          quae enim{" "}
          <strong>
            Et sunt qui itaque consequatur et quaerat fuga et similique beatae
          </strong>
          .{" "}
        </p>
      </div>
      <div className="card-container" data-aos="fade-right">
        <div className="card">
          <img src={require("../../images/honey-bee.jpg")} className="card-img-top" alt="" />
          <div className="card-body">
            <h4 className="card-title">Lorem</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={require("../../images/gas-mask.jpg")} className="card-img-top" alt="" />
          <div className="card-body">
          <h4 className="card-title">Lorem</h4>

            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={require("../../images/polar-bear.jpg")} className="card-img-top" alt="" />
          <div className="card-body">
          <h4 className="card-title">Lorem</h4>

            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <h2 data-aos="fade-up">Video</h2>
      <div className="video-container" data-aos="flip-up">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/HUBj109hS8c"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div data-aos="fade-up">
        <h4>Lorem ipsum</h4>
        <p>
          Lorem ipsum dolor sit amet. Et voluptatibus esse cum harum officiis ut
          tempora autem aut iusto sequi aut expedita officia. Et fugiat
          assumenda est velit voluptate sed repudiandae ducimus qui galisum
          molestiae a sint ducimus ea commodi consequatur est quam similique. Id
          similique enim est autem maxime nam dolor possimus sit praesentium
          recusandae qui officiis quidem. Rem officiis distinctio ut quae dolor
          qui porro doloremque sed fuga aperiam cum repellat saepe.{" "}
        </p>
      </div>
    </section>
  );
};
export default Galerie;
