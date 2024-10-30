window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const fromDateInput = document.getElementById("from-date");
    const toDateInput = document.getElementById("to-date");
    const nextBtn = document.getElementById("next-btn");
    const infoList = document.querySelector(".info-list");
    const confirmList = document.querySelector(".confirm-list");
    const status = document.getElementById("status");
    const editBtn = document.getElementById("edit-btn");
    const continueBtn = document.getElementById("continue-btn");
    const confirmBtn = document.getElementById("confirm-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    nextBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const fromDate = new Date(fromDateInput.value);
        const toDate = new Date(toDateInput.value);

        if (firstName && lastName && fromDate < toDate) {
            const listItem = document.createElement("li");
            listItem.textContent = `${firstName} ${lastName} (${fromDate.toDateString()} - ${toDate.toDateString()})`;
            infoList.appendChild(listItem);

            firstNameInput.value = "";
            lastNameInput.value = "";
            fromDateInput.value = "";
            toDateInput.value = "";

            nextBtn.disabled = true;
            editBtn.classList.remove("hidden");
            continueBtn.classList.remove("hidden");
        }
    });

    editBtn.addEventListener("click", function () {
        
        firstNameInput.value = ""; 
        lastNameInput.value = ""; 
        fromDateInput.value = ""; 
        toDateInput.value = ""; 

        nextBtn.disabled = false;
        editBtn.classList.add("hidden");
        continueBtn.classList.add("hidden");
    });

    continueBtn.addEventListener("click", function () {
        const infoItems = infoList.querySelectorAll("li");
        infoItems.forEach((item) => {
            const confirmItem = document.createElement("li");
            confirmItem.textContent = item.textContent;
            confirmList.appendChild(confirmItem);
        });

        infoList.innerHTML = "";

        confirmBtn.classList.remove("hidden");
        cancelBtn.classList.remove("hidden");
    });

    confirmBtn.addEventListener("click", function () {
        confirmList.removeChild(confirmList.firstChild);

        nextBtn.disabled = false;
        status.classList.add("vacation-confirmed");
        status.textContent = "Vacation Requested";
    });

    cancelBtn.addEventListener("click", function () {
        confirmList.removeChild(confirmList.firstChild);

        nextBtn.disabled = false;

        status.classList.add("vacation-cancelled");
        status.textContent = "Cancelled Vacation";
    });

    status.addEventListener("click", function () {
        location.reload();
    });location.reload(); 
    
}



    
    
