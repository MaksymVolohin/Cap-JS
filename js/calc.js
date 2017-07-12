
function id(a){
    return document.getElementById(a);
}

function sel(a) {
    return document.querySelector(a);
}

var result = '';
var lastResult = '0';
id('lastResult').innerHTML = lastResult;
function element(clicked_id){
    var x = id(clicked_id).value;
    if(x == '='){
        lastResult = eval(result);
        id('finalResult').innerHTML = result + ' = ' + lastResult;
        result = lastResult;
        id('lastResult').innerHTML = lastResult;
    } else if(x=='<'){
        var splittedResult = result.split('');
        //console.log(result.split(''));
        splittedResult.splice(splittedResult.length-1, 1);
        console.log(splittedResult);
        var masBack = splittedResult.join('');
        result = masBack;
        id('finalResult').innerHTML = result;
    } else if(x=='C'){
        result = 0;
        id('finalResult').innerHTML = result;
        id('lastResult').innerHTML = result;
    } else{
        if(result==0){
            result = '';
        }
        result = result + x;
        id('finalResult').innerHTML = result;
    }

}