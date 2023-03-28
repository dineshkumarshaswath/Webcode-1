var div = document.createElement("div");
div.className = "main";
div.style.textAlign="center";
div.style.margin="80px";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "bookname");
input.setAttribute("placeholder", "booknumber");
input.style.margin="10px";
input.style.border="3px solid blue";

var button = document.createElement("button");
button.innerHTML = "search";
button.setAttribute("type","button");
button.classList.add("btn","btn-success");
button.addEventListener("click",find);
  
var div2=document.createElement("div");
div2.classname="result";
div2.style.margin="10px";
div2.style.border="10px solid blue";
div2.style.overflow="scroll";






div.append(input,button,div2);

async function find(){

    try{
    var res = document.getElementById("bookname").value;
      
    if(res<=12){
    var url=`https://anapioficeandfire.com/api/books/${res}`;
    var bo = await fetch(url);
    var book = await bo.json();
     
    var b=[];
    var result1=book.name;
    var result2=book.isbn;
    var result3=book.numberOfPages;
    var result4=book.authors;
    var result5=book.publisher;
    var result6=book.released;
    var result7=book.characters;
    
 div2.innerHTML=(` Book Name : ${result1} <br>

    isbn : ${result2} <br>
      Book Pages : ${result3} <br>

      Book Authors : ${result4}<br>

      Book Publisher :  ${result5}<br>

      Book Released date : ${result6}<br>

      Book Characters : ${result7}<br>`);

}
else{
    div2.innerHTML=(` this is booknumber should not be included this Api <br>`);
}
}catch (error){console.log(error)}
}


document.body.append(div);

