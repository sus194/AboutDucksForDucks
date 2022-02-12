const Ducklist = document.getElementById('ducklist');
const searchbar = document.getElementById('searchbar');
let ducks = [];
console.log(searchbar);
searchbar.addEventListener('keyup', (e)=>{
    const searchstring= e.target.value;
    ducks.filter(duck =>{
        
    })
});
const loadducks = async () => {
    try{
        const res = await fetch("https://cse.google.com/cse.js?cx=7d29b0a299e7cbf9b");


    }
}

let userinput = 

function setup(){
    noCanvas();
    userinput = select('#userinput');
    userinput.changed(gowiki);
    gowiki();
    function gowiki(){
        let term = userinput.value();
        console.log(term);

    }
}