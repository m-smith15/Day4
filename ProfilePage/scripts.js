function editProfile(){
    var name = document.querySelector(".userName").innerText;
    document.querySelector(".userName").innerText = "Doctor Shrimp";
    return;
}

function acceptRequest(element){
    string = document.querySelector(".num2").innerText;
    var addMe = parseInt(string, 10);
    addMe += 1;
    // console.log(addMe);
    document.querySelector(".num2").innerText = addMe;
    // var q = this;
    // console.log(q);
    document.querySelector(".connectionRequest").remove();
    string = document.querySelector(".num1").innerText;
    var subMe = parseInt(string,10);
    subMe -= 1;
    document.querySelector(".num1").innerText = subMe;
}

function declineRequest(element){
    string = document.querySelector(".num1").innerText;
    var subMe = parseInt(string,10);
    subMe -= 1;
    document.querySelector(".num1").innerText = subMe;
    document.querySelector(".connectionRequest").remove();
}