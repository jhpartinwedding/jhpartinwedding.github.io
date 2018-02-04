guestNum = 1;

        function addGuest() {
            var linebreak = document.createElement("br");
            var linebreak2 = document.createElement("br");
            var addGuestHeader = document.createElement("h3");
            addGuestHeader.textContent = "Additional Guest Info";
            var addGuest = document.createElement("span");
            addGuest.textContent = "Guest Name: ";
            var textbox = document.createElement("input");
            textbox.type = "text";
            textbox.name = "additionalGuest" + guestNum;
            guestNum++;
            document.getElementById("additionalGuest").appendChild(addGuestHeader);
            document.getElementById("additionalGuest").appendChild(addGuest);
            document.getElementById("additionalGuest").appendChild(textbox);
            document.getElementById("additionalGuest").appendChild(linebreak);
            document.getElementById("additionalGuest").appendChild(linebreak2);
        }