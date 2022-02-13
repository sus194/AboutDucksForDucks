window.addEventListener('load', randomPics);

function randomPics(){
    fetch("https://google-search3.p.rapidapi.com/api/v1/images/q=ducks+animal", {
    "method": "GET",
    "headers": {
        "x-user-agent": "desktop",
        "x-proxy-location": "EU",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        // "x-rapidapi-key": "7a2b213bc5mshc7fd0f47cf2f3e8p1ce969jsn3f470cb49067"
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
            let numSong = Math.floor((Math.random() * 17));
            let songId1 = response['items'][numSong]['id']['videoId'];
            let songId2 = response['items'][numSong+1]['id']['videoId'];
            let songId3 = response['items'][numSong+2]['id']['videoId'];

            var url1 = `https://www.youtube.com/embed/${songId1}`;
            var url2 = `https://www.youtube.com/embed/${songId2}`;
            var url3 = `https://www.youtube.com/embed/${songId3}`;

            document.getElementById('videos').style.display = "block";
            document.getElementById('vid1').src = url1;
            document.getElementById('vid2').src = url2;
            document.getElementById('vid3').src = url3;

            let name1 = response['items'][numSong]['snippet']['title'];
            let name2 = response['items'][numSong+1]['snippet']['title'];
            let name3 = response['items'][numSong+2]['snippet']['title'];

            document.getElementById('youtubeTitle').style.display = "block";
            document.getElementById('title1').innerHTML = name1;
            document.getElementById('title2').innerHTML = name2;
            document.getElementById('title3').innerHTML = name3;

            console.log(response['items'][numSong]['snippet']['title']);
        })
        .catch(err => {
            console.error(err);
        });
    }

}