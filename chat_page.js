//YOUR FIREBASE LINKS
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
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_width_tag = "<h4>"+ name +"</h4>"
message_with_tag = "<h4 class='messageh4'>"+message + "</h4>";
like_button ="<button class='btn btn-warning' id-"+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>Likes :"+like+"</button>";
row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg"). value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on like button -"+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_like = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}