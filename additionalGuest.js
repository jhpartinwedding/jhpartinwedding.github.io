function addGuest() {
    if (document.getElementById("addGuestBtn").value == "Add Additional Guest") {
        document.getElementById("addGuestBtn").value = "Undo Add Guest";
    } else if (document.getElementById("addGuestBtn").value == "Undo Add Guest") {
        document.getElementById("addGuestBtn").value = "Add Additional Guest";
    }
    
    var x = document.getElementById("additionalGuest");
    if (x.className == "hidden") {
        x.className = "unhidden";
    } else {
        x.className = "hidden";
    }
    
}