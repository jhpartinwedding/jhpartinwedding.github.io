guestNum = 1;

        function addGuest() {
            if (document.getElementById("addGuestBtn").value = "Add Additional Guest") {
                document.getElementById("addGuestBtn").value = "Undo Add Guest";
            }
            if (guestNum <= 1) {
                console.log(guestNum);
                var linebreak = document.createElement("br");
                var linebreak2 = document.createElement("br");
                var linebreak3 = document.createElement("br");
                var linebreak4 = document.createElement("br");

                var addGuestHeader = document.createElement("h2");
                addGuestHeader.textContent = "Additional Guest Info";

                var addGuest = document.createElement("span");
                addGuest.textContent = "Guest Name: ";

                var textbox = document.createElement("input");
                textbox.required;
                textbox.type = "text";
                textbox.name = "additionalGuest" + guestNum;

                var addGuestDiet = document.createElement("span");
                addGuestDiet.textContent = "Guest Dietary Needs: ";

                var textboxDiet = document.createElement("input");
                textboxDiet.required;
                textboxDiet.type = "text";
                textboxDiet.name = "guestDiet" + guestNum;

                guestNum++;

                document.getElementById("additionalGuest").appendChild(addGuestHeader);
                document.getElementById("additionalGuest").appendChild(addGuest);
                document.getElementById("additionalGuest").appendChild(textbox);
                document.getElementById("additionalGuest").appendChild(linebreak);
                document.getElementById("additionalGuest").appendChild(linebreak2);

                document.getElementById("additionalGuest").appendChild(addGuestDiet);
                document.getElementById("additionalGuest").appendChild(textboxDiet);
                document.getElementById("additionalGuest").appendChild(linebreak3);
                document.getElementById("additionalGuest").appendChild(linebreak4);
            } else {
                if (document.getElementById("addGuestBtn").value = "Undo Add Guest") {
                    document.getElementById("addGuestBtn").value = "Add Additional Guest";
                    document.getElementById("additionalGuest").innerText = "";
                    guestNum--;
                } else {
                    console.log(guestNum);
                    var guestError = document.createElement("h3");
                    guestError.textContent = "Sorry, but we are limiting everyone to a maximum of 1 guest!";

                    document.getElementById("additionalGuest").appendChild(guestError);
                    document.getElementById("addGuestBtn").disabled = true;
                }
            }
        }