function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById("delete");

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function Deleting(evt) {
        socket.emit("uzum em jnjem messagenery");
    }
    del.onclick = Deleting;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    function deleteTags(){
        var lis = chatDiv.getElementsByTagName("P");
        for (var i in lis){
            i.getElementsByTagName("P") = "";


        }

    }

    socket.on('display message', handleMessage);
    socket.on("jnjeq dzer p tagery", deleteTags);
} // main closing bracket

window.onload = main;