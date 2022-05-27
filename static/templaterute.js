function Bilete1(parametru){
    window.location.href="http://localhost:3000/"+parametru;
     console.log("ok")
 }
 let array
 function Afisare(){
     fetch("http://localhost:3000/sendObject")
     .then((response)=>response.json())
     .then(function(response){
         let elem=document.getElementById("afisare1")
         let array=response
         let varrr=JSON.stringify(array).split("}").length-1
         elem.innerHTML="<h2>Avem:</h2>\n"
         for(let i=0; i<varrr; i++){
             let p=document.createElement("p")  
             p.innerHTML="<h4>Nume bilet "+(i+1)+" :</h4>"
             elem.append(p)
             elem.append(JSON.stringify(array[i].nume))
             let p1=document.createElement("p")  
             p1.innerHTML="<h4>Pret bilet "+(i+1)+" :</h4>"
             elem.append(p1)
             elem.append(JSON.stringify(array[i].price))
             let p2=document.createElement("p")  
             p2.innerHTML="<h4>Disponibilitate bilet "+(i+1)+" :</h4>"
             elem.append(p2)
             elem.append(JSON.stringify(array[i].disponibilitate))
             elem.append(document.createElement('br'))
             elem.append(document.createElement('br'))
             elem.append(document.createElement('br'))
 
         }
         console.log(JSON.stringify(array).length)
     })
 }


