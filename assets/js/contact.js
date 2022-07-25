
function submitData(){
    
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value


    if(name == ''){
        return alert("Nama Wajib Diisi")
    } else if(email == ''){
        return alert("Email Wajib Diisi")
    }
     else if(phone == ''){
        return alert("Phone Number Wajib Diisi")
    }
     else if(subject == ''){
        return alert("Subject Number Wajib Diisi")
    }
     else if(message == ''){
        return alert("Message Number Wajib Diisi")
    }
     
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(subject);
    // console.log(message);


    let emailReceiver = "dwiyoga0023@gmail.com"
    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, this my phone number ${phone}, ${message}`
    
    a.click()
}
