


function Header() {
    return (
    <div>
    <nav  class="navbar navbar-expand-lg bg-body-tertiary bg-dark-subtle" >
  <div class="container-fluid">
  
     <a class="navbar-brand" href="#"> <img className="icono" src="./happy.png"/> <p> RefuCat</p></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse nav-abath" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quienes somos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Michis en adopción</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Contactanos!</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>

      
      )
      
  }






export default Header