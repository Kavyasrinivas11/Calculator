function displayNumber(num){
    console.log(num);
    document.getElementById('data').value+=num
}

function clearData(){
    document.getElementById('data').value=""
}

function removeItem(){
    document.getElementById('data').value=
    (document.getElementById('data').value).slice(0,-1)
}

function calc(){
    document.getElementById('data').value=eval(document.getElementById('data').value)
}