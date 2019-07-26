//declarations
const nextBtn = document.getElementById("new-quote");
const nextBody = document.getElementById("new-body");
nextBtn.innerHTML = "NEXT";

//eventlistener
nextBtn.addEventListener('click',onNext);

//function1
function onNext(event){
    const quote = this.parentElement.children[0];
    quote.innerText=" 'One thing I realized is that everything always ends up working out. Sometimes even better than you can imagine.' ";
    const author = this.parentElement.children[1];
    author.innerText ="---Tagore";
    nextBody.setAttribute('id', 'firstbody');
    nextBtn.setAttribute('id', 'first');
    nextBtn.addEventListener("click", onGoClick);
};

//function2
function onGoClick(event){
    const quote = this.parentElement.children[0];
    quote.innerText=" 'Look around you. Appreciate What you have. Nothing will be the same in a Year. Amazing changes are coming your way. Trust' ";
    const author = this.parentElement.children[1];
    author.innerText ="---Bharathi";
    nextBody.setAttribute('id', 'secondbody');
    nextBtn.setAttribute('id', 'second');
    nextBtn.addEventListener("click", goClick);
};

//function3
function goClick(event){
    const quote = this.parentElement.children[0];
    quote.innerText=" 'Sometimes you have to stop being scared and go for it. Either it will work or it won't. That is Life.' ";
    const author = this.parentElement.children[1];
    author.innerText ="---Ravindra";
    nextBody.setAttribute('id', 'new-body');
    nextBtn.setAttribute('id', 'new-quote');
    
}