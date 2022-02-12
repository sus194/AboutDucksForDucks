window.addEventListener('load', randomPics);

function randomPics(){
    fetch("https://google-search3.p.rapidapi.com/api/v1/images/q=ducks+animal", {
    "method": "GET",
    "headers": {
        "x-user-agent": "desktop",
        "x-proxy-location": "EU",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "b1e1ab1091mshcc9d4bcef44cbf0p1f1095jsn68c0743c6ce6"
    }
})
.then(response => response.json())
.then(response => {
    let num = Math.floor((Math.random() * 20));
    let picUrl = response['image_results'][num]['image']['src'];
    console.log(picUrl);
    document.getElementById('randomDuckPics').style.backgroundImage = 'url('+picUrl+')';

})
// .then(response => {
//     console.log(response);
// })

.catch(err => {
    console.error(err);
});
}

document.querySelector('#musicSearchButton').addEventListener('click', triggerMusic);

function triggerMusic(){
    var e = document.getElementById('dropdownMusic');
    var chosen = e.value;
    var toSearch;
    if(chosen === '0'){
        console.log("FAULTY NOTHING CHOSEN");
        document.getElementById('errorMessage').innerHTML = "*** Vibe must be chosen before we quack it up ***";
    }
    else{
        document.getElementById('errorMessage').innerHTML ="";
        if(chosen === 'home'){
            toSearch = 'many%20quacking%20sound';
        }
        else if(chosen === 'songs'){
            toSearch = 'duck%20songs';
        }
        else if(chosen === 'solo'){
            toSearch = 'river%20music';
        }
        else if(chosen === 'zen'){
            toSearch = 'not%20live%20zen%20music';
        }
    }
    if(chosen !== '0'){
        fetch(`https://youtube-v31.p.rapidapi.com/search?q=${toSearch}&part=snippet%2Cid&regionCode=US&maxResults=20`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
            "x-rapidapi-key": "b1e1ab1091mshcc9d4bcef44cbf0p1f1095jsn68c0743c6ce6"
        }
        })
        .then(response => response.json())
        .then(response => {
            let numSong = Math.floor((Math.random() * 20));
            let songId = response['items'][numSong]['id']['videoId'];
            var url = `https://www.youtube.com/watch?v=${songId}`;
            console.log(response['items'][numSong]['id']['videoId']);
        })
        .catch(err => {
            console.error(err);
        });
    }

}