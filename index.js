
var container=document.createElement("div")
container.className="container";
var row=document.createElement("div")
row.className="row"
container.append(row)
var res=fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>foo(data1))
 foo=(data1)=>{
    for(var i=0;i<data1.length;i++){
        row.innerHTML +=`<div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-header">${data1[i].name.common}</div>
        <div class="card-body text-primary">
        <h5 class="card-titlt">${data1[i].capital}</h5>
        <p class="card-text">${data1[i].region}</p>
        </div>
        </div>
        </div>`
        document.body.append(container)

    }
 }