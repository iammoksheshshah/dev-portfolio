var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919712494409'> <div class='socialItem' id='call'><img class='socialItemI' src='./assets/images/phone.svg'/><label class='number'>9712494409</label></div> </a> <a href='mailto:moksheshshah2311@gmail.com'> <div class='socialItem'><img class='socialItemI' src='./assets/images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/iammoksheshshah'> <div class='socialItem'><img class='socialItemI' src='./assets/images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/919712494409'> <div class='socialItem'><img class='socialItemI' src='./assets/images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/mkshxxh_'> <div class='socialItem'><img class='socialItemI' src='./assets/images/instagram.svg' alt=''> </div> </a> <a href='https://in.linkedin.com/in/mokshesh-shah-9753b3170' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='./assets/images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='./assets/images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='./assets/images/pdf.png'><label>Mokshesh Shah Resume.pdf</label></div><a href='./assets/Mokshesh Shah.pdf' download='Mokshesh_Shah_Resume.pdf'><img class='download' src='./assets/images/downloadIcon.svg'></a></div>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Mokshesh Shah</a>.</span><br><br>I am a Software Engineer and <span class='bold'>Frontend Developer 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the Frontend Development sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently working as a Full Stack Developer.<br><br>I can comfortably write code in following languages :<br><span class='bold'>.Net Core<br>C#<br>CSS 3<br>Tailwind CSS<br>BootStrap 5<br>HTM 5</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Angular<br>NodeJs<br>Javascript<br>Jquery</span><br><br>I've experiance with following databases :<span class='bold'><br>Mongo DB<br>Oracle<br>Sql Server</span></span>");
            break;

        case "education":
            sendTextMessage("Having MCA degree in Computer Science field from Uka Tarsadia University<br>Passing Year : 2020-21<br>Result : <b>8.7 CGPA</b> With <b>5th</b> rank and <b>First Distinction.</b><br><br>I have completed my Secondary school known as <b>M.T.Jariwala</b> High School<br>Passing Year : 2014-15");
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML5, Tailwind CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/mkshxxh_/'><span class='bold'>Mokshesh Shah</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/iammoksheshshah'> <div class='socialItem'><img class='socialItemI' src='./assets/images/github.svg' alt=''></div> </a></div>");
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
