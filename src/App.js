import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid row">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="col-4 px-5 collapse navbar-collapse">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="SEARCH ITEMS" aria-label="Search"/>
              <a href=''><img className="mt-1" width="13" height="20" src='../Rectangle.png'></img></a>
            </form>
          
          </div>

          <div className="col-4 collapse navbar-collapse">
            <img src="../logo.png" class="rounded img-fluid" alt="logo" />
          </div>

          <div class="col-3 text-info collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Card</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Order</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Notification</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      <div class="bg-light">
            <img src="../MOBILEbanner.png" height="70%" alt="Mobile" />
      </div>

      <div className="px-5 bg-light">
        <img className="px-1" src='../Rectangle16.png'></img>
        <img className="px-1" src='../Rectangle.png'></img>
        <img className="px-1" src='../Rectangle.png'></img>
        <img className="px-1" src='../Rectangle.png'></img>
        <img className="px-1" src='../Rectangle.png'></img>
      </div>

      <div className="p-4 bg-light">
        <h3>Categories</h3>
      </div>

      <div class="bg-light">
        <div>
          <img src="../category.png" width='75%'></img>
        </div>
      </div>

      <div className="p-4">
        <h3>Promotions</h3>
      </div>

        <div>
          <img src="../promotions.png" width='75%'></img>
        </div>

        <div class="contianer-fluid bg-info">
          <div class="row">
            <div class="col-4 mt-3">
              <h5>Customer Service</h5>
              <ul class="list-unstyled">
                <li class="mb-2">Terms & Privacy Policy</li>
                <li class="mb-2">Return Policy</li>

              </ul>
            </div>
            <div class="col-4 mt-3">
              <h5>Language</h5>
              <ul class="list-unstyled">
                <li class="mb-2">Myanmar (Unicode)</li>
                <li class="mb-2">Myanmar (Zawgyi)</li>
                <li class="mb-2">English</li>

              </ul>
            </div>
            <div class="col-4 mt-3">
              <h5>Contact Us</h5>
              <ul class="list-unstyled">
                <li class="mb-2">+959 448833467</li>
                <li>No.6, Malar Myaing 4th Street <br/> 16 ward, Hlaing Township,<br/> Yangon, Myanmar</li>
              </ul>
            </div>
          </div>
        </div>


      <div class="bg-primary">
        <p>All right reserved. Made with all the love in the Shopdoora Co.Ltd.,</p>
      </div>
  </div>
  );
}

export default App;
