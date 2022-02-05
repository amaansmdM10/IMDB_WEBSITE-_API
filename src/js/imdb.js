const m=document.getElementById('search');
const n=document.getElementById('button');
const form = document.getElementById('form');
 





const url="https://imdb8.p.rapidapi.com/auto-complete?q="

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    handleEvents();
})

function handleEvents(){
    if(window.navigator.onLine){
        const title= m.value;
        if(title){
            showMovies(url+title);
            m.value= ""
        }
    }
}

function showMovies(url){
fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "3ad629bc19msh8b415ea70dae37ep1debecjsn702f531c52e2"
	}
})

.then(response => response.json())
.then(data =>{
    const list =data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const rank=item.rank;
        const cast=item.s;
        const Type=item.q
        const Year=item.y;
        const p=item.v[0].i.imageUrl;
        const q=item.v[1].i.imageUrl;
        const r=item.v[2].i.imageUrl;
        const movie =`<li>
        <div style="border-radius:40px" class="card">
        <div class="card py-3" style="width: 80rem; border-radius:40px">
        <img "class="card-img-center" src="${poster}" alt="Card image cap">
        <div class="card-title">
        <h2 style="color:black"> NAME : ${name}</h2>
        </div>
        </div>
        <h2> RANK : ${rank}</h2>
        <h2> TYPE : ${Type}</h2>
        <h2> CAST : ${cast}</h2>
        <h2> YEAR : ${Year}</h2>
        <h2> IMAGES </h2>
        <div>
        <img src ="${p}">
        <img src ="${q}">
        <img src ="${r}">
        </div>
        </div>
        <br>
        </li>`
        document.querySelector(' .movies').innerHTML += movie;
        console.log(item);

    })
    
})
.catch(err => {
	console.error(err);
}); 
}

