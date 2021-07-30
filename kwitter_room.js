var firebaseConfig = {
      apiKey: "AIzaSyDa9wLoSf5mChrUr-nKlamA1k9TS1ogFCE",
      authDomain: "galiceno-5088c.firebaseapp.com",
      databaseURL: "https://galiceno-5088c-default-rtdb.firebaseio.com",
      projectId: "galiceno-5088c",
      storageBucket: "galiceno-5088c.appspot.com",
      messagingSenderId: "207973572998",
      appId: "1:207973572998:web:16984abe25942579118c07"
    };
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("user's name");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";

function addroom()
{
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"This is the roomname(but something will happen!)"
      });
      localStorage.setItem("room name",roomname);
      window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='ReDirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";     
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function ReDirectToRoomName(name)
{
      localStorage.setItem("room name",name);
      window.location="kwitter_page.html";
    
}


function logout()
{
      localStorage.removeItem("user's name");
      localStorage.removeItem("room name");
      window.location="index.html"
}




