 (function(){

//store the value of the input 
let input = document.getElementById('todoInput');
let addButton = document.getElementById('toDoAdd');
let resultDiv = document.getElementById('result');
let resultRemove = document.getElementsByClassName('remove');


//event listner click on add item button
addButton.addEventListener('click', printVal);

function printVal() {
    
    //get the value from input after entered by user
    let inputVal = input.value;
    
    //create div inside result to display the value obtained
    let val1 = document.createElement('div');
    
    //adding value inputVal inside the newly created div
    let val1Value = document.createTextNode(inputVal);
    val1.appendChild(val1Value);
    
    //add remove button
    let val1RemoveX = document.createElement('span');
    let val1RemoveXValue = document.createTextNode('x');
    
    //add value remove inside the button
    val1RemoveX.appendChild(val1RemoveXValue)
    
    //add class remove to button
    val1RemoveX.setAttribute('class', 'remove');

    val1.appendChild(val1RemoveX)


    //add the newly created div under result
    resultDiv.appendChild(val1);

    //clear input value after being added to div below
    let clearInput = input.value = '';

    let i
    //remove each item via X span.remove
    //resultRemove.length referes to how many remove in the page
    for(i = 0 ; i < resultRemove.length; i++) {
        resultRemove[i].addEventListener('click', function(e){
            e.currentTarget.parentNode.remove();
        })
    }
}

//when enter key on keyboard is pressed
input.addEventListener('keyup', function(e){
    if(e.keyCode === 13) {
        printVal();
    }
})

})();