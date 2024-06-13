var ul = document.querySelector("ul");//<ul id="list">.....</ul>
// console.log(ul);


// NOTE:
// console.log(ul.parentNode);//<div id = "node-list">....</div>
// console.log(ul.children); 

// var a = ul.children;// Html collection(3) [li, li, li]
// console.log(a);

// var b = a.children;//undefined
// console.log(b);



// var ul1 = document.querySelectorAll("ul");//NodeList [ul#list]
// console.log(ul1);

// var ul2 = document.querySelector("ul li");//<li> First Node </li>
// console.log(ul2);

// var ul3 = document.querySelectorAll("ul li");//Node List (3) [li,li,li]
// console.log(ul3);


// var li1 = document.querySelectorAll("li");//Node List (3) [li,li,li]
// console.log(li1);

// var li2 = document.querySelector("li");//<li> First Node </li>
// console.log(li2);

// var li3 = document.getElementsByTagName("li");//Html collection (3) [li,li,li]
// console.log(li3);





// ==========Add Item==========

// var btn = document.getElementById("add-btn");
// btn.addEventListener("click", function (e)
//  {

document.getElementById("add-btn").addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("start");

    var addInput = document.getElementById("add-input");
    if (addInput.value !== "") {
        var li = document.createElement("li");
        // console.log(li);
        var editP = document.createElement("p");
        // console.log(editP);
        var constP = document.createElement("p");
        // console.log(constP);
        var firstI = document.createElement("i");
        // console.log(firstI);
        var secondI = document.createElement("i");
        // console.log(secondI);
        var input = document.createElement("input");
        // console.log(input);

        editP.textContent = addInput.value;
        // console.log(editP);

        firstI.className = "fa-solid fa-pen-to-square";
        // console.log(firstI.className);
        secondI.className = "fa-solid fa-xmark";
        // console.log(secondI.className);
        input.className = "edit-note";
        // console.log(input.className);

        // input.setAttribute("type", "text");//doubt

        constP.appendChild(firstI);
        // console.log(constP);
        constP.appendChild(secondI);
        // console.log(constP);

        li.appendChild(editP);
        // console.log(li);
        li.appendChild(constP);
        li.appendChild(input);

        ul.appendChild(li);
        console.log(ul);

        addInput.value = "";
    }
});


// ===============================Hide List================================

var hideList = document.getElementById("hide");
// console.log(hideList);

hideList.addEventListener("click", function () {
    // console.log(checked);
    var label = document.querySelector("label");

    if (hideList.checked) {
        label.textContent = "Unhide Notes";
        ul.style.display = "none";
        // console.log(ul);

    }
    else {
        label.textContent = "Hide Notes";
        ul.style.display = "block";
    }

});

// ===========================Search note===================================

var search = document.querySelector("#search-note input");
// console.log(search);

search.addEventListener('keyup', function (e) {
    var word = e.target.value.toLowerCase();//target--> to get the value from search
    console.log(word);                      // target--> referse to the clicked element
    //value-->retrieves the current value of an input field in a form.

    var li = ul.getElementsByTagName("li");
    console.log(li);

    Array.from(li).forEach(function (temp)//without array it doesn't considered as a function
    {
        var liValue = temp.firstElementChild.textContent;
        console.log(liValue);

        // var liP = temp.target.value.toLowerCase();
        // console.log(liP);

        // if(liP == word)
        // {
        //     temp.style.display = 'block';
        // }
        // else
        // {
        //     temp.style.display = 'none';
        // }

        // Note: indexOf() example
        // const paragraph = "I think Ruth's dog is cuter than your dog!";
        // const searchTerm = 'dog';
        // const indexOfFirst = paragraph.indexOf(searchTerm);

        // The indexOf() method returns -1 if the value is not found.

        if (liValue.toLowerCase().indexOf(word) !== -1) {
            temp.style.display = 'block';
        }
        else {
            temp.style.display = 'none';
        }
    })
});

// ==========================================================Edit & delete(rough work)=================================================

// var editi = document.getElementsByClassName("fa-pen-to-square");
// var canceli = document.getElementsByClassName("fa-solid fa-xmark");

// console.log(canceli.parentNode);

// var li = document.getElementsByTagName("li");
// console.log(li);

// canceli.addEventListener("click", function(e)
// {
// var list = e.target.li;
// console.log(list);
// list.removeChild(list);
// });

// ==========================================================Edit & delete=================================================

ul.addEventListener('click', function (e) {
    // console.log(e);//pointerEvent
    // console.log(e.target);

    // console.log(e.target.classList[1]);//classList[0]== "fa solid" 
    // classList[1]== "fa-xmark" // classList[1]== "fa-pen-to-square"


    if (e.target.classList[1] == "fa-pen-to-square") {
        var parenti = e.target.parentNode;
        console.log(parenti);

        var editp = parenti.previousElementSibling;
        console.log(editp);

        var input = parenti.nextElementSibling;
        console.log(input);

        // input = editp.textContent;
        // console.log(input);

        input.style.display = "block";

        input.value = editp.textContent; //without value--> input would be empty text box
        console.log(input);              //value-->retrieves the current value of an input field in a form.

        // input.addEventListener("keypress", function (e) {
        //     if (e.key === "Enter")//key-->The key property returns the key that was pressed when the event occured.
        //     {
        //         if (input.value === "") {
        //             input.style.display = "none";
        //             // input.style.display = "block";//in will show entire <input class="edit-note"> b
        //         }
        //         else {
        //             editp.textContent = input.value;
        //             input.style.display = "none";
        //         }
        //     }
        // });

        input.addEventListener("keypress", function (e) {
            // console.log('Hello');
            // console.log(e);
            if (e.keyCode === 13) //keyCode --> gives ascii value 
            {
                // 13 --> Enter key
                if (input.value !== "") {
                    editp.textContent = input.value;
                    parenti.style.display = "block";
                    console.log(parenti);

                    input.style.display = "none";
                    // console.log(input);
                }
                else {
                    var li = input.parentNode;
                    li.parentNode.removeChild(li);
                }
            }
        });

        
    }
    else if (e.target.classList[1] == "fa-xmark") {
        var list = e.target.parentNode.parentNode;
        console.log(list);

        // list.parentNode.removeChild(list);
        ul.removeChild(list)//alternate method
    }
});