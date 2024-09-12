function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tayyaba.cutie.2002@gmail.com",
        Password : "0FDEDF79476486EF58836A7DF6325870415F",
        To : 'tayyabaaly2002@gmail.com',
        From : "tayyaba.cutie.2002@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

