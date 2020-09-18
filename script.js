var food={
    1:{
        name:"strawberry juice",
        price:"20"
    },
    2:{
        name:"lemon beverage",
        price:"15"
    },
    3:{
        name:"mango beverage",
        price:"30"
    },
    4:{
        name:"choco soda",
        price:"50"
    },
    5:{
        name:"bubble tea",
        price:"100"
    },
    6:{
        name:"mixed juice",
        price:"60"
    },
    7:{
        name:"cocktail",
        price:"50"
    },
    8:{
        name:"liquor",
        price:"80"
    },
    9:{
        name:"bubble tea",
        price:"50"
    },
    10:{
        name:"strawberry shake",
        price:"80"
    },
    11:{
        name:"mixed cocktail",
        price:"90"
    },
    12:{
        name:"icecream cup",
        price:"120"
    },
    13:{
        name:"bubble tea XL",
        price:"120"
    },
    14:{
        name:"pancake",
        price:"200"
    },
    15:{
        name:"choco cake",
        price:"100"
    },
    16:{
        name:"strawberry cake",
        price:"110"
    },
    17:{
        name:"honey cake",
        price:"90"
    },
    18:{
        name:"mango cake",
        price:"90"
    },
    19:{
        name:"berry cake",
        price:"100"
    },
    20:{
        name:"cone icream",
        price:"40"
    },
    21:{
        name:"coffe spl",
        price:"120"
    },
    22:{
        name:"cocktail",
        price:"60"
    },
    23:{
        name:"cup icecream",
        price:"60"
    },
    24:{
        name:"cone icecream",
        price:"70"
    },
    25:{
        name:"icecream cup XL",
        price:"120"
    },
    26:{
        name:"cup cake",
        price:"20"
    },
    27:{
        name:"mocktail",
        price:"120"
    },

}
const click=(e)=>{
    //console.log(i)
    var id;
    if(!e.target.firstChild)
    id=e.target.id
    else
    id=e.target.firstChild.id
    document.getElementById("img").src=`./assets/food/${id}.png`;
    document.getElementById("name").innerHTML=food[id].name
    document.getElementById("price").innerHTML=food[id].price
    document.getElementById("quantity").innerHTML=1;
    document.getElementById("total").innerHTML=food[id].price;

    setprice(food[id].price,1)

}
const incr=()=>{

    document.getElementById("quantity").innerHTML=parseInt(document.getElementById("quantity").innerHTML)+1;
    document.getElementById("total").innerHTML= parseInt(document.getElementById("quantity").innerHTML)*parseInt(document.getElementById("price").innerHTML)
}
const decr=()=>{
    if(parseInt(document.getElementById("quantity").innerHTML)>0)
    document.getElementById("quantity").innerHTML=parseInt(document.getElementById("quantity").innerHTML)-1;
    document.getElementById("total").innerHTML= parseInt(document.getElementById("quantity").innerHTML)*parseInt(document.getElementById("price").innerHTML)
}

const mouseover=(e)=>{
    if(!e.target.firstChild)
    e.target.style.height="110px"
    else
    e.target.firstChild.style.height="110px"
}
const mouseout=(e)=>{
    if(!e.target.firstChild)
    e.target.style.height="90px"
    else
    e.target.firstChild.style.height="90px"
}
console.log("hello")
for( var i=0;i<20;i++){
var node = document.createElement("div");
node.className ="circle";
var parent = document.getElementById("line4");
    console.log(i)
    parent.appendChild(node);
}

for( var i=0;i<10;i++){
    var node = document.createElement("div");
    node.className ="surfaceLine";
    node.style.animationDelay=`${i*0.5}s`
    var parent = document.getElementById("surface");
        console.log(i)
        parent.appendChild(node);
    
    }
for(var i=0;i<27;i++){
    var div =document.createElement("div");
    div.className="food"
    div.onclick=click
    div.onmouseover=mouseover
    div.onmouseout=mouseout
    div.style.animationDelay=`${i}s`
    var node = document.createElement("img");
    node.src=`./assets/food/${i+1}.png`
    node.className="fooditem";
    node.draggable=false;
    node.id=`${i+1}`
    div.appendChild(node);
    var parent = document.getElementById("surface");
        parent.appendChild(div);
}
 const order =()=>{
     window.alert("you have ordered "+document.getElementById("name").innerHTML+"!\n"+"bill amount : "+"₹"+document.getElementById("total").innerHTML);
 }
var i=2;

//<div style="position: absolute;width: 100%;height:100%;z-index: -1; background-image:linear-gradient(to bottom, #56ccf2, #2f80ed);"/>