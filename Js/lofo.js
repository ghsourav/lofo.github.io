


function year(){
    let time=new Date();
    var year1= time.getFullYear();
    document.getElementById('develop').innerHTML=`<p>&copy;${year1} All Rights Reserved by <a href="https://twitter.com/ghsourav" target="_blank">ghsourav</a></p>`;
}
year()

let preloader = document.getElementById('loader');

function loader(){
    preloader.style.display='none';
}