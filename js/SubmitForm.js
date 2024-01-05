
window.onload = submitForm

let form_id_js;
let data_js;
let sendButton;
let js_form;

function submitForm() {
    init()
    //update this with your js_form selector
    form_id_js = "form";

    data_js = {
        "access_token": "hl4f5sx9uca76icgfvpt9ouc"
    };

    sendButton = document.getElementById("button");

    sendButton.onclick = js_send;

    js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
}

function js_onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

function js_send() {
    sendButton.value='Sending…';
    sendButton.disabled=true;

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            js_onSuccess();
        } else
        if(request.readyState === 4) {
            js_onError(request.response);
        }
    };

    let subject = document.querySelector("#" + form_id_js + " [name='sujet']").value;

    let message = document.querySelector("#" + form_id_js + " [name='nom']").value;
        message = "NOM Prénom : " + message + "\n" + document.querySelector("#" + form_id_js + " [name='email']").value;
        message = "Courriel : " + message + "\n" + document.querySelector("#" + form_id_js + " [name='company']").value;
        message = "Entreprise : " + message + "\n\n" + document.querySelector("#" + form_id_js + " [name='contenu']").value;

    console.log(message)
    data_js['subject'] = subject;
    data_js['text'] = message;

    let params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}

function toParams(data_js) {
    let form_data = [];
    for ( let key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

