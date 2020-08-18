let page = document.getElementById('buttonDiv');
const buttonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructorOptions(buttonColor){
    for (let item of buttonColor){
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function(){
            chrome.storage.sync.get({color:item}, function(){
                console.log('color is ' + item);
            })
        });
        page.appendChild(button);
    }
}
constructorOptions(buttonColors);