const firebaseConfig = {
      apiKey: "AIzaSyCU2SM7RMlemsVks7mBabVyFytydmJOidE",
      authDomain: "social-website-kwitter-aa7d6.firebaseapp.com",
      databaseURL: "https://social-website-kwitter-aa7d6-default-rtdb.firebaseio.com",
      projectId: "social-website-kwitter-aa7d6",
      storageBucket: "social-website-kwitter-aa7d6.appspot.com",
      messagingSenderId: "24829314778",
      appId: "1:24829314778:web:cbcb5408fd9e12202607e3",
      measurementId: "G-F19E1EVJQT"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom()
 {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html";
      }

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "chat_page.html";
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_Names = childKey;
      //Start code
      console.log("Room Name - " + Room_Names);
      row = "<div class='room_name' id=" +Room_Names+"onclick='redirectToRoomName(this.id)' >#" +Room_Names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
