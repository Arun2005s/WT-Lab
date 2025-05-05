function validateForm(event) {
    event.preventDefault(); 
    let valid = true;
    const name = document.getElementById('name').value.trim();
    const regNo = document.getElementById('regno').value.trim();
    const studyfrom = document.getElementById('studyfrom').value;
    const studyto = document.getElementById('studyto').value;
    const studyerror = document.getElementById('studyerror');


    if (!/^[A-Z]/.test(name)) {
        document.getElementById('nameerror').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('nameerror').style.display = 'none';
    }

    if (!/^\d{2}[a-zA-Z]{3}\d{3}$/.test(regNo)) {
        document.getElementById('regnoerror').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('regnoerror').style.display = 'none';
    }

    if (parseInt(studyfrom) >= parseInt(studyto)) {
        studyerror.style.display = 'block';
        valid = false;
    } else {
        studyerror.style.display = 'none';
    }

    if (valid) {
        window.location.href = "biod.html";  
    } else {
                console.log("Validation Failed.");
            }
}


