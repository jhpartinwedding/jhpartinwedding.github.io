guestNum = 1;

        function addGuest() {
            if (guestNum <= 3) {
                console.log(guestNum);
                var linebreak = document.createElement("br");
                var linebreak2 = document.createElement("br");
                var linebreak3 = document.createElement("br");
                var linebreak4 = document.createElement("br");

                var addGuestHeader = document.createElement("h3");
                addGuestHeader.textContent = "Additional Guest Info";

                var addGuest = document.createElement("span");
                addGuest.textContent = "Guest Name: ";

                var textbox = document.createElement("input");
                textbox.type = "text";
                textbox.name = "additionalGuest" + guestNum;

                var addGuestDiet = document.createElement("span");
                addGuestDiet.textContent = "Guest Dietary Needs: ";

                var textboxDiet = document.createElement("input");
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
                console.log(guestNum);
                var guestError = document.createElement("h3");
                guestError.textContent = "Sorry, but we are limiting everyone to a maximum of 3 guests!";

                document.getElementById("additionalGuest").appendChild(guestError);
                document.getElementById("addGuestBtn").disabled = true;
            }
        }