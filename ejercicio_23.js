var string = document.getElementById("p").innerHTML;
string = string.split(' ')
for (let index = 0; index < string.length; index++) {
    if (string[index].length>8) {
        string[index].replace(string, '<span class="mark">' + string[index]+ '</span>')
        
    }
    
}

