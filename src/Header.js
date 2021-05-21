import './Header.css'

function Header(){
 return(

    <header class="header">
   <div className="container">
    <div class="left">
        <img src="https://freepngimg.com/download/logo/93818-and-league-head-premier-black-201617-201819.png" alt="yo" />
        <div id="title">Hornets</div>
    </div>
   <nav>
    <div class="mid">
        <ul class="navbar">
            <li><a href="#" class="li" id="home">Home</a></li>
            <li><a href="#"class="li">About Us</a></li>
            <li><a href="#"class="li">Contact Us</a></li>
        </ul>
    </div>
    </nav>

    
    <div class="right">
        <button class="btn">Call Us Now</button>
        <button class="btn">Email Us</button>
    </div>
    </div>
</header>


 );
}

export default Header;