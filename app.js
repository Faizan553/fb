function data(){


var name=document.getElementById("name");
var pass=document.getElementById("pass");

var data={
    name:name.value,
    pass:pass.value,
}
firebase.database().ref('store/').push(data).then(function() {
    alert("data saved")
}).catch(function (err) {
    alert(err)
})
}

