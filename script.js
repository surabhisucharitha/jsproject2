// let plusbutton = document.getElementById("plusbutton")
// let popup1 = document.getElementById("popup1")
// plusbutton.addEventListener("click", () =>{
//     popup1.style.display = "block"
//     // popup1.classList.add("mystyle")
//     console.log("its me");
// })
// let btn2 = document.getElementById("btn2")
// btn2.addEventListener("click", () =>{
//     popup1.style.display = "none"
//     console.log("its me2");
// })

// let data=[];
// let cardId;
// console.log("data",data);
// function showpop(){
//     const popup1=document.getElementById('popup1');
//     popup1.style.dispaly="block"
// }

// function closeAddCardpopup(){
//     const popup1=document.getElementById("popup1");
//     popup1.style.display="none;"
// }

// function handleAddCard(){
//     const cardText=document.getElementById("card-input-text").Value;

//     const card={
//         id:new Date().getTimeme().toString(),
//         cardTitle:cardText,
//     };
//     if(cardTitle){
//         data.push(card);
//         renderCards();
//     }else{
//         alert("please add card name");

//     }
//     console.log("datat",data);
//     document.getElementById("card-input-text").value="";
//     closeAddCardpopup();
// }
// function renderContent(){
//     for(let i=0;i<data.length;i++){
//         for(let j=0;j<data[i].content.length;j++){
//             const ulElement=document.getElementById('content_list_${data[i].id}');
//             const child="";
//             for(let j=0;j<data[i].content.length;j++){
//                 const content=data[i].content[j];
//                 child += '<li class="content ${content.done ? "checked":""}" id="content_${content.id}" onclick="doneTask(${content.id},${data[i].id})">${content.contentText}</li>'
//             }
//         }
//     }

// }
// function renderCards() {
//     console.log("rendering cards",data);
//     const cardcontainer = document.getElementById("card-container");
//     let child = "";
//     for (let i = 0; i < data.length; i++) {
//       console.log("data[i]:", data[i]);
//       child += `<div id="card_${data[i].id}" class="card">
//           <p class="p2">${data[i].cardTitle}</p>
//           <hr>
//           <ul id="content_list_${data[i].id}">
  
//           </ul>
//           <div class="container2">
//           <Button onclick="deleteCard(${data[i].id})" class="delete">D</Button>
//           <Button onclick="showAddContentToCardPopup(${data[i].id})" class="add">+</Button>
//           </div>
//           </div>`;
//     }
//     cardcontainer.innerHTML = child;
//     renderContent();
//   }
//   function removeAddContentToCardpopup(){
//     const popup2=document.getElementById("popup2");
//     popup2.style.display="none";

// }

// function showAddContentToCardpopup(){
//     const popup2=document.getElementById("popup2");
//     popup2.style.display="block";
// }


// function addContentToCard(){
//      const contentListId='content_list_${cardId}';
//      const ul=document.getElementById(contentIdlistId);
//      const contectText=document.getElementById("card-container_input").value;
//      if(!contentText){
//     alert("please add task name");
        
//       } else {
//         document.getElementById("card-content-input").value="";
//         const liNode=document.createElement("li");
//         const listId=new Date().getTime().toString();
//         liNode.innerHTML = contentText;
//         liNode.className="content";
//         liNode.id='content_${listId}';
//         liNode.onclick=function(){
//             doneTask(listId,cardId);
//         };
//         Ul.appendChild(liNode);
//         removeAddContentToCardPopup();
//         for(let i=0;i<data.length;i++){
        
//             if(data[i].id === cardId){
//                 const content ={
//                     id:new Date().getTime().toString(),
//                     contextText:contentText,
//                     done:false,
//                 }
//                 data[i].content.push(content);
                
//             }
//         }
//        }
//      }
//      function deleteCard(id){
//         const cardId='card_${id}'
//         const card=document.getElementById("cardId");
//         card.parentNode.removeChild(card);
//         data=data.filter(item.id!==Id);
    
        
//     }
//      function doneTask(listId,cardId){
//         const contentId='content_${id}'
//         const liElement=document.getElementById(contentId);
//         liElement.classList.toggle("checked");
//         for(let i=0;i<data.length;i++){
//             if(data[i].id==cardId){
//                 for(let j=0;j<data[i].content.length;j++){
//                     const content=data[i].content[j];
//                     if(content.id==taskId){
//                         data[i].content[j].done=!data[i].content[j].done;
                    
//                     }
//                 }
//             }
//         }

//      } 

let data = []
let cardid;

let plusbutton = document.getElementById("plusbutton")
let popup1 = document.getElementById("popup1")
plusbutton.addEventListener("click", () =>{
    popup1.style.display = "block"
    // popup1.classList.add("mystyle")
    console.log("its me");
})
let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () =>{
    popup1.style.display = "none"
    console.log("its me2");
})


console.log("data", data);
// let popup2 = document.getElementById("popup2")
let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{

    // popup2.style.display = "block"
    popup1.style.display = "none"
    console.log("its me");
    let mytext = document.getElementById("inp").value

    let mytodo = {
        id: new Date().getTime().toString(),
        text: mytext,
        content: []  
    }
    if(mytext){
        data.push(mytodo)
        addtask()
    }else{
        alert("please enter your destination")
    }
    document.getElementById("inp").value = ""; 
})
function rendercontent(){
    for(let i = 0; i<data.length; i++){
        const ulelement = document.getElementById(`idforcard_${data[i].id}`);
        let child = "";
        for(let j = 0; j<data[i].content.length; j++){
            let content = data[i].content[j]
            child += `<li class="${content.done ? "checked" : ""}" id="content_${content.id}" onclick="doneTask(${content.id}, ${data[i].id})">${content.contenttext}</li>`
        }
        ulelement.innerHTML = child
    }
}
let cardcontainer = document.querySelector("#card")
 let addtask = () =>{
    let child = ""
    for(let i = 0; i<data.length; i++){
        console.log(data);
       child += `<div id = ${data[i].id} class="popup2">
       <p class="p2">${data[i].text}</p>
       <hr>
       <ul id="idforcard_${data[i].id}">
       </ul>
       <div class="container2">
       <Button class="delete" onclick="removesecondpopup(${data[i].id})">D</Button>
       <Button class="add" onclick = "thirdpopup(${data[i].id})">+</Button>
       </div>
       </div>`
       
       console.log(data[i].id);
       console.log(data[i].text);
    }
    cardcontainer.innerHTML = child
    rendercontent()
}

function removesecondpopup(id){
    let cardcontainer = document.querySelector("#card")
    let cardsid = `${id}`
    let cards = document.getElementById(cardsid)
    cards.parentNode.removeChild(cards)
    data = data.filter(item => item.id !=id)
}
function thirdpopup(id){
    let popup3 = document.getElementById("popup3")
    popup3.style.display = "block"
    cardid = id
}

function removethirdpopup(){
    let popup3 = document.getElementById("popup3")
    popup3.style.display = "none"
}

function addcontenttopopup2() {
    // let popup2 = `${data[i].id}`
    // let Rpopup2 = document.getElementById(popup2)
    // Rpopup2.style.display = "none"
    let contentlistid = `idforcard_${cardid}`
    let list = document.getElementById(contentlistid)
    let contenttext = document.getElementById("inp2").value
    if(!contenttext){
    alert("please add your Task");
    }else{
        
        document.getElementById("inp2").value = "";
    const linode = document.createElement("li");
    const listId=new Date().getTime().toString();
    linode.innerHTML = contenttext
    linode.id=`content_${listId}`;
    linode.onclick = function(){
        doneTask(listId,cardid)
    }
    // linode.innerHTML = contenttext
    list.appendChild(linode);
    removethirdpopup()
    for(let i = 0; i<data.length; i++){
        if(data[i].id == cardid){
            const content = {
                id:listId,
                contenttext: contenttext,
                done: false,
            }
            data[i].content.push(content);
        }
    }
}
}

function doneTask(listId,cardid){
            const contentId=`content_${listId}`
             const liElement=document.getElementById(contentId);
             liElement.classList.toggle("checked");
             for(let i=0;i<data.length;i++){
                            if(data[i].id==cardid){
                                for(let j=0;j<data[i].content.length;j++){
                                    const content=data[i].content[j];
                                    if(content.id==listId){
                                        data[i].content[j].done=!data[i].content[j].done;
                                    
                                    }
                                }
                            }
                        }
                
                     } 
    
          