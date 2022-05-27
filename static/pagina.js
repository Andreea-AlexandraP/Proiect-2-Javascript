

function myFunction1() {
    var element = document.getElementsByTagName("body")[0]; 
    element.classList.toggle("dark-mode");
  }


const myTimeout = setTimeout(Greeting, 3000);

function Greeting() {
    document.getElementById("demo").innerHTML = "~Bine ati venit!~"
  }


setInterval(Timer, 1000);

  function Timer() {
    const d = new Date();
    document.getElementById("ceas").innerHTML = d.toLocaleTimeString();
  }  

  function myFunction2() {
    document.getElementById("cinema").style.color = "red";
    document.getElementById("cinema").style.fontSize = "60px";

  }

  
function myFunction3() {
        // alert("Va rugam sa introduceti o valoare valida");
        document.addEventListener('keypress', (event) => {
            var name = event.key;
            var code = event.code;
            // Alert the key name and key code on keydown
            alert(`Sunteti sigur ca doriti sa cumparati ${name} bilete? Va rugam sa completati cu atentie.`);
          }, false);
}






function ExitLog(event){
  document.getElementsByClassName("LogIn-container")[0].style.display = 'none'    
}

    

    let buttonExit = document.getElementsByClassName("btn-exit")[0]
    buttonExit.addEventListener('click',ExitLog)


    
    let form = document.getElementsByTagName('form')[0]
    form.addEventListener('submit', verifyInput)


    function verifyInput(event){

  
      let username = ""
      let LogInputs = document.getElementsByClassName('LogName')
      for(i = 0; i < LogInputs.length; i++){
          username += LogInputs[i].value + " "
          let ok = re.exec(LogInputs[i].value)
          if(!ok){
              alert(`${username} is not a name`)
              event.preventDefault()
              return
          }
      }
      localStorage.setItem('username', `${username}`)
      alert(`You have successfully logged in!`) 

      if(localStorage.getItem('username'))
            alert(`Element gasit!`) 
        
  }

  document.getElementById("p1").style.color = "blue";
  document.getElementById("p1").style.fontFamily = "Arial";
  document.getElementById("img1").style.height="250px";
  document.getElementById("img1").style.width="400px";


  document.querySelector.onclick = function() {
    var image = document.getElementById('img1');
    image.style.width = '300px';
    image.style.height = '100px';
}


var tag = document.createElement("p");
   var text = document.createTextNode("Program: Luni-Vineri 9:00-23:00 // Sambata-Duminica 12:00-00:00");
   tag.appendChild(text);
   var element = document.getElementById("new");
   element.appendChild(tag);


   function myFunction() {
    const element = document.getElementById("demo");
    element.remove(); }




const filme = ["Avatar 2", "  Avengers Infinity War Part 1", "  Avengers Infinity War Part 2", "  Lost Daughter", "  Plan A",
   "  Infinite", "  Awake", "  Red Notice", "  Aftermath", "  The Fallout"];
filme.push("  La nuit des rois"); 
filme.push("  Dreambuilders"); 
filme.push("  Where is Anne Frank"); 
filme.push("  Firestarter"); 
filme.push("  The Northman"); 
filme.push("  The Bad Guys"); 
filme.push("  The Lost City"); 
filme.push("  Through my window");
filme.push("  Deep Water"); 
filme.push("  All the Old Knives"); 
filme.push("  The Takedown"); 
filme.push("  Run"); 
filme.push("  A Perfect Pairing"); 
filme.push("  Emma"); 



document.getElementById("array").innerHTML = filme;


const filme2 = ["Avatar 2", "  Avengers Infinity War Part 1", "  Avengers Infinity War Part 2", "  Lost Daughter", "  Plan A",
   "  Infinite", "  Awake", "  Red Notice", "  Aftermath", "  The Fallout", "  La nuit des rois", "  Dreambuilders", 
   "  Where is Anne Frank", "  Firestarter", "  The Northman", "  The Bad Guys", "  The Lost City", "  Through my window",
   "  Deep Water", "  All the Old Knives", "  The Takedown", "  Run", "  A Perfect Pairing", "  Emma"];
   for (let i = 0; i <= 13; i++)
      filme2.pop();

document.getElementById("array2").innerHTML = filme2;

filme2.sort();
document.getElementById("array3").innerHTML = filme;


const filme3 = ["Babylon", "  Megan", "  Fast X ", "  Mission: Impossible - Dead Reckoning, Part One", "  John Wick: Chapter 4",
"  Guardians of the Galaxy Vol. 3"]
const filme4 = filme.concat(filme3); 
document.getElementById("array5").innerHTML = filme4;