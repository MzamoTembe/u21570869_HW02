/* Updates the cart so that it does not return 0 when page is refreshed*/
function onLoadCartNumbers(){
    let movieNumbers = localStorage.getItem("tickets_in_cart");

    if (movieNumbers){
        document.querySelector(".navbar-brand span").textContent = movieNumbers;
    }
}
/* run the cart refresh code everytime website is loaded*/
onLoadCartNumbers();

/* Movie Information */
let movies = [
    {
        id: 1,
        additionid: "TheBatmanAdd",
        minusid: "TheBatmanSub",
        deleteid: "TheBatmanDelete",
        modalid: "Bat",
        title: "The Batman",
        director: "Matt Reeves",
        runtime: "2h 56m",
        release_year: 2022,
        description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg%22%20class=%22card-img-top",
        cinema_number: 1,
        ticket_price: 80,
        tickets_in_cart: 0,
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
    },
    {
        id: 2,
        additionid: "UNAdd",
        minusid: "UNSub",
        deleteid: "UNDelete",
        modalid: "UN",
        title: "Uncharted",
        director: "Ruben Fleischer",
        runtime: "1h 56m",
        release_year: 2022,
        description: "Treasure hunter Victor Sullivan recruits street-smart Nathan Drake to help him recover a 500-year-old lost fortune amassed by explorer Ferdinand Magellan. What starts out as a heist soon becomes a globe-trotting, white-knuckle race to reach the prize before the ruthless Santiago Moncada can get his hands on it. If Sully and Nate can decipher the clues and solve one of the world's oldest mysteries, they stand to find $5 billion in treasure -- but only if they can learn to work together.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
        cinema_number: 2,
        ticket_price: 80,
        tickets_in_cart: 0,
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
    },
    {
        id: 3,
        additionid: "DOCAdd",
        minusid: "DOCSub",
        deleteid: "DOCDelete",
        modalid: "DOC",
        title: "Doctor Strange in the Multiverse of Madness",
        director: "Sam Raimi",
        runtime: "2h 6m",
        release_year: 2022,
        description: "Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.",
        poster_url: "https://lumiere-a.akamaihd.net/v1/images/image_b342b03e.jpeg?region=0,0,540,810",
        cinema_number: 3,
        ticket_price: 120,
        tickets_in_cart: 0,
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
    },
    {
        id: 4,
        additionid: "SonAdd",
        minusid: "SonSub",
        deleteid: "SonDelete",
        modalid: "SON",
        title: "Sonic the Hedgehog 2",
        director: "Jeff Fowler",
        runtime: "2h 2m",
        release_year: 2022,
        description: "After settling in Green Hills, Sonic is eager to prove that he has what it takes to be a true hero. His test comes when Dr. Robotnik returns with a new partner, Knuckles, in search of a mystical emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
        poster_url: "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/sonic-the-hedgehog-2/images/regions/us/onesheet.jpg",
        cinema_number: 4,
        ticket_price: 80,
        tickets_in_cart: 0,
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
    },
    {
        id: 5,
        additionid: "Lost5Add",
        minusid: "LostSub",
        deleteid: "LostDelete",
        modalid: "Lost",
        title: "The Lost City",
        director: "Aaron and Adam Nee (Nee Brothers)",
        runtime: "1h 52m",
        release_year: 2022,
        description: "Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city's lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMmIwYzFhODAtY2I1YS00ZDdmLTkyYWQtZjI5NDIwMDc2MjEyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        cinema_number: 5,
        ticket_price: 80,
        tickets_in_cart: 0,
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
    },
    {
        id: 6,
        additionid: "FanAdd",
        minusid: "FanSub",
        deleteid: "FanDelete",
        modalid: "Fan",
        title: "Fantastic Beasts: The Secrets of Dumbledore",
        director: "David Yates",
        runtime: "2h 23m",
        release_year: 2022,
        description: "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_.jpg",
        cinema_number: 6,
        ticket_price: 80,
        tickets_in_cart: 0,
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
    },
    {
        id: 7,
        additionid: "ThorAdd",
        minusid: "Thor7Sub",
        deleteid: "ThorDelete",
        modalid: "Thor",
        title: "Thor: Love and Thunder",
        director: "Taika Waititi",
        runtime: "2h 13m",
        release_year: 2022,
        description: "Thor: Love and Thunder is an upcoming American superhero film based on the Marvel Comics character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is intended to be the direct sequel to Thor: Ragnarok and the 29th film in the Marvel Cinematic Universe.",
        poster_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Thor_Love_and_Thunder_poster.jpeg/220px-Thor_Love_and_Thunder_poster.jpeg",
        cinema_number: 7,
        ticket_price: 150,
        tickets_in_cart: 0,
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
    },
    {
        id: 8,
        additionid: "SpiderAdd",
        minusid: "SpiderSub",
        deleteid: "SpiderDelete",
        modalid: "Sdm",
        title: "Spider-Man: Across the Spider-Verse (Part 2)",
        director: "Joaqium Dos Santos, Kemp Powers, Justin Thompson",
        runtime: "1h 55m",
        release_year: 2022,
        description: "Miles Morales embarks on an epic adventure that will transport Brooklyn's full-time, friendly neighbourhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team.",
        poster_url: "https://pics.filmaffinity.com/spider_man_across_the_spider_verse_part_one-524691364-large.jpg",
        cinema_number: 8,
        ticket_price: 150,
        tickets_in_cart: 0,
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
    },
    {
        id: 9,
        additionid: "LightAdd",
        minusid: "LightSub",
        deleteid: "LightDelete",
        modalid: "Light",
        title: "Lightyear",
        director: "Angus MacLane",
        runtime: "1h 40m",
        release_year: 2022,
        description: "Buzz Lightyear embarks on an intergalactic adventure with a group of ambitious recruits and his robot companion.",
        poster_url: "https://media1.popsugar-assets.com/files/thumbor/Gt88ci2_BzAHGpI30HgOJ0yJX_c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/02/18/046/n/48559432/tmp_4Jidgl_a07f3c1a97539ad1_MCDLIGH_WD007.jpg",
        cinema_number: 9,
        ticket_price: 150,
        tickets_in_cart: 0,
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
    },
]

/* Upload Cards To LocalStorage */
localStorage.setItem("Movies", JSON.stringify(movies));
/* Display movie array to card from localStorage */
function displayCards(){
    let movieitems = localStorage.getItem("Movies");
    movieitems = JSON.parse(movieitems);
    //Gets movie card from index page
    let moviecard = document.getElementById("moviecards");
    if(movieitems && moviecard){
        moviecard.innerHTML = "";
        Object.values(movieitems).map(movie => {
            moviecard.innerHTML  += 
                `    
                <!--TheBatman-->
                <!--Card-->
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card  h-100">
                        <div class="card-header">
                        Cinema ${movie.id}
                        </div>
                        <img src="${movie.poster_url}" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">
                                ${movie.title}
                            </h5>
                            <p class="card-text"> ${movie.description} </p>
                            <p> R ${movie.ticket_price} </p>
                        </div>
                        <div class="card-footer">
                            <!--CardFooter-->
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#movie">
                                Details
                            </button>
                            <button type="button" class="btn btn-success">Add to Cart</button>
                            <!-- ActualModal -->
                            <div class="modal fade" id= "movie">
                                <div class="modal-dialog" id = "mo">
                                </div>
                            </div>
                            <!--BookTicket Button-->
                        </div>
                    </div>
                </div>
                <!--EndofCard-->
                           `                             
        });

// Add iinformation to modal
myModalEl = document.getElementById("movie");
Object.values(movieitems).map(modal => {
   myModalEl.addEventListener('shown.bs.modal', function (event) {
       var moviemodal = document.getElementById("mo")
       moviemodal.innerHTML += `
       <div class="modal-content">
                   <div class="modal-header">
                       <h5 class="modal-title" id="movie"> ${modal.title}</h5>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body">
                       <dl class="row">
                           <dt class="col-sm-3">Title</dt>
                           <dd class="col-sm-9">${modal.title}</dd>
                           <dt class="col-sm-3">Director</dt>
                           <dd class="col-sm-9">${modal.director}</dd>
                           <dt class="col-sm-3">Release Year</dt>
                           <dd class="col-sm-9">${modal.release_year}</dd>
                           <dt class="col-sm-3">Runtime</dt>
                           <dd class="col-sm-9"> ${modal.runtime}</dd>
                       </dl>
                   </div>
                   <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   </div>
                   </div>
               `;})  
           });
    }
}
/* Display Cards To LocalStorage */
displayCards();

/* Takes the addcart button and gives them to cart*/
let carts = document.querySelectorAll(".btn-success");
/* Event Listener that grabs all the addcart button and executes the cartNumbers() for each button*/
for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener("click", () => 
    {
        cartNumbers(movies[i]);
        totalCost(movies[i]);
    })
}

// Load tickets numbers and also display on navbar
function cartNumbers(movie){
    let movieNumbers = localStorage.getItem("tickets_in_cart");
    movieNumbers = parseInt(movieNumbers); /* Converts to int since the LocalStorage only takes integer*/
    /* If product numbers are already in LocalStorage then it increments it*/
    if (movieNumbers){
        localStorage.setItem("tickets_in_cart", movieNumbers + 1)
        document.querySelector(".navbar-brand span").textContent = movieNumbers + 1;
        /* Otherwise it is set to one for first click of the addcarts button*/
    }else{
        localStorage.setItem("tickets_in_cart", 1)
        document.querySelector(".navbar-brand span").textContent = 1;
    }
        setItems(movie);
}

/* Setting CartItems in the LocalStorage*/
function setItems(movie){
    let cartItems = localStorage.getItem("moviesInCart");
    cartItems = JSON.parse(cartItems);
    /* Checking cart Item (if theres something or not) */
    if (cartItems != null){      
        /*If theres something in LocalStorage*/
        if (cartItems[movie.id] == undefined){
            cartItems = {
               ...cartItems,
               [movie.id]: movie
        }
        }cartItems[movie.id].tickets_in_cart += 1;
    /*If theres nothing in LocalStorage*/
    }else{
        movie.tickets_in_cart = 1;
        cartItems = {
            [movie.id]: movie
        }
    }localStorage.setItem("moviesInCart", JSON.stringify(cartItems));
}

/* Total Cost*/
function totalCost(total){
    let cartTotal = localStorage.getItem("TotalCost");
    /* Incrementing of TotalCost if theres a total inside */
    if (cartTotal != null){  
        cartTotal = parseInt(cartTotal);
        localStorage.setItem("TotalCost", cartTotal + total.ticket_price)
    /* If theres nothing */
    }else{
        localStorage.setItem("TotalCost", total.ticket_price);
    }
}

/*Check LocalStorage before populating cart table */
function displayCart(){
    let cartItems = localStorage.getItem("moviesInCart");
    cartItems = JSON.parse(cartItems);
    let movietable = document.querySelector(".table-striped");
    let cartTotal = localStorage.getItem("TotalCost");
    /* Populating the table with LocalStorage Content*/
    if(cartItems && movietable){
        movietable.innerHTML = "";
        Object.values(cartItems).map(movie => {
            movietable.innerHTML  += 
            ` 
            <tr id = "row" >
            <td scope="row">
            <i class="fa-solid fa-circle-xmark" id = "${movie.deleteid}"></i>
            <span>${movie.title}</span>
            </td>
            <td>
            R${movie.ticket_price}.00
            </td>
                <td>
                    <i class="fa-solid fa-circle-arrow-left" id = "${movie.minusid}"></i>
                   <span> 
                   ${movie.tickets_in_cart} 
                   </span>
                   <i class="fa-solid fa-circle-arrow-right" id = "${movie.additionid}"></i>
                </td>
                <td>
                R${movie.tickets_in_cart * movie.ticket_price}.00
                </td>   
            </tr>
            </tbody>
            `
                // Increase button
                const tableIn = document.querySelector(".table-striped");
                tableIn.addEventListener("click", onD);
                function onD(e){
                    const id = document.getElementById(movie.additionid);
                    if (!e.target.contains(id)){
                        return;
                    }
                    increase(movie);
                    location.reload();
                }
                // Decrease button
                const tableDe = document.querySelector(".table-striped");
                tableDe.addEventListener("click", onDeleteRow);
                function onDeleteRow(e){
                    const id = document.getElementById(movie.minusid);
                    if (!e.target.contains(id)){
                        return;
                    }
                    decrease(movie);
                    location.reload();
                }
                //Delete Movie in cart
                const tableD = document.querySelector(".table-striped");
                tableD.addEventListener("click", Row);
                function Row(e){
                    const id = document.getElementById(movie.deleteid);
                    if (!e.target.contains(id)){
                        return;
                    }
                    const btn = e.target;
                    btn.closest("tr").remove();
                    deletemovie(movie);
                    removemovie();
                    location.reload();
                }
        });
    }   
    // Total in table
        movietable.innerHTML  += 
        ` 
        <tfooter>
        <tr id="o">
        <th id="total" colspan="3">Total :</th>
        <td style="color :red;"> R${cartTotal}.00 </td>
        </tr>
        </tfooter>
        `;
}
/*Populate function*/
displayCart();

// Increase/Decrease/delete functions
function increase(incremented){
        let movieNumbers = localStorage.getItem("tickets_in_cart");
        movieNumbers = parseInt(movieNumbers);
        let cartItems = localStorage.getItem("moviesInCart");
        cartItems = JSON.parse(cartItems);
        let cartTotal = localStorage.getItem("TotalCost");
        cartTotal = JSON.parse(cartTotal);
        localStorage.setItem("tickets_in_cart", movieNumbers + 1)
        document.querySelector(".navbar-brand span").textContent = movieNumbers + 1;
        cartItems[incremented.id].tickets_in_cart += 1;
        cartTotal = cartTotal + incremented.ticket_price;
        localStorage.setItem("moviesInCart", JSON.stringify(cartItems));
        localStorage.setItem("TotalCost", JSON.stringify(cartTotal));
}
function decrease(decremented){
        let cartItems = localStorage.getItem("moviesInCart");
        cartItems = JSON.parse(cartItems);
        let cartTotal = localStorage.getItem("TotalCost");
        cartTotal = JSON.parse(cartTotal);
        let movieNumbers = localStorage.getItem("tickets_in_cart");
        movieNumbers = parseInt(movieNumbers);
        localStorage.setItem("tickets_in_cart", movieNumbers - 1)
        document.querySelector(".navbar-brand span").textContent = movieNumbers - 1; 
        cartItems[decremented.id].tickets_in_cart = cartItems[decremented.id].tickets_in_cart - 1;
        cartTotal = cartTotal - decremented.ticket_price;
        localStorage.setItem("moviesInCart", JSON.stringify(cartItems));
        localStorage.setItem("TotalCost", JSON.stringify(cartTotal))
}
function deletemovie(cartmovies){
    let cartItems = localStorage.getItem("moviesInCart");
    cartItems = JSON.parse(cartItems);
    let cartTotal = localStorage.getItem("TotalCost");
    cartTotal = JSON.parse(cartTotal);
    let tickets = localStorage.getItem("tickets_in_cart");
    tickets = JSON.parse(tickets);
    // Update Total 
    cartTotal = cartTotal - (cartmovies.ticket_price * cartItems[cartmovies.id].tickets_in_cart) ;
    localStorage.setItem("TotalCost", JSON.stringify(cartTotal));
    //Update Tickets
    newtickets = tickets - cartItems[cartmovies.id].tickets_in_cart;
    localStorage.setItem("tickets_in_cart", newtickets)
    cartItems[cartmovies.id].tickets_in_cart = cartItems[cartmovies.id].tickets_in_cart - cartItems[cartmovies.id].tickets_in_cart;
    localStorage.setItem("moviesInCart", JSON.stringify(cartItems));
}

// Remove movie from movies in cart key
function removemovie(){
    console.log("movie has been removed");
}

/*Extra Code----------------------------------------------------------------------------------------------------------
// {Problem to be solved is the parentclass thing}
/* Deletes certain values in localStorage Values (iTems)
      const list = Object.keys(cartItems).map(key => ({
        [key]: cartItems[key]
      }));
      const filteredList = list.filter(item => Object.keys(item)[0] !== '1');
      console.log(filteredList)
      localStorage.setItem("Movies", JSON.stringify(filteredList))*/ 
/* Delete certain value in Array
    function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
/* Delete Row
const tableEL = document.querySelector("table");
tableEL.addEventListener("click", onDeleteRow);
function onDeleteRow(e){
    if (!e.target.classList.contains("dope")){
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
    deletemovie();
}
*/