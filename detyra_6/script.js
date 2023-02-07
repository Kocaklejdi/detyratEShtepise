const user = {
    userName: "Jones Ferdinand",
    profilePicture: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    hasNotifications: true
}

const tickets = [
    {
        name: "Unresolved",
        number: 60
    },
    {
        name: "Overdue",
        number: 16
    },
    {
        name: "Open",
        number: 43
    },
    {
        name: "On Hold",
        number: 64
    },

];

const centerData = [
    {
        name: "Resolved",
        number: 449
    },
    {
        name: "Received",
        number: 429
    },
    {
        name: "Average first response time",
        number: "33m"
    },
    {
        name: "Average response time",
        number: "3h 8m"
    },
    {
        name: "Resolution within SLA",
        number: "94%"
    },
];

const unresolvedTickets = [
    {
        name: "Waiting on Feature Request",
        number: 4238
    },
    {
        name: "Awaiting Customer Response",
        number: 1005
    },
    {
        name: "Awaiting Developer Fix",
        number: 914
    },
    {
        name: "Pending",
        number: 281
    },
]
const tasks = [
    {
        checked: false,
        name: "Finish ticket update",
        status: 1
    },
    {
        checked: false,
        name: "Create new ticket example",
        status: 2
    },
    {
        checked: true,
        name: "Update ticket report",
        status: 3
        }
]

const profile = document.getElementById("user");
const userProfilePic = document.createElement("img");

if (user.hasNotifications) {
    const notifications = document.createElement("img");
    const notificationHolder = document.getElementById("notifications");
    const blueDot = document.createElement("div");
    notifications.src = "assets/Vectorbell.png";
    notifications.className = "bell";
    blueDot.className = "blueDot";
    notificationHolder.appendChild(notifications);
    notificationHolder.appendChild(blueDot)
}
else {
    const notifications = document.createElement("img");
    const notificationHolder = document.getElementById("notifications");
    notifications.src = "assets/Vectorbell.png";
    notifications.className = "bell";
    notificationHolder.appendChild(notifications);
}


userProfilePic.src = user.profilePicture
const userProfileName = document.createElement("span");
userProfileName.innerText = user.userName
userProfilePic.className = "userProfilePic"
profile.appendChild(userProfileName);
profile.appendChild(userProfilePic);

for (let i = 0; i < tickets.length; i++) {
    const ticketHolder = document.getElementById("ticketHolder");
    const ticket = document.createElement("div");
    const ticketName = document.createElement("span");
    const numberOfTickets = document.createElement("span");
    ticket.className = "ticket";
    ticketName.innerText = tickets[i].name;
    numberOfTickets.innerText = tickets[i].number;
    ticketName.className = "ticketName";
    numberOfTickets.className = "numberOfTickets";
    ticket.appendChild(ticketName);
    ticket.appendChild(numberOfTickets);
    ticketHolder.appendChild(ticket);
}
for (let i = 0; i < centerData.length; i++) {
    const centerDataHolder = document.getElementById("contentCenter");
    const centerDataTicket = document.createElement("div");
    centerDataTicket.className = "dataTicket";
    const centerDataTicketName = document.createElement("span");
    const centerDataTicketNumber = document.createElement("span");
    centerDataTicketName.innerText = centerData[i].name;
    centerDataTicketNumber.innerText = centerData[i].number;
    centerDataTicketName.className = "dataTicketName";
    centerDataTicketNumber.className = "dataTicketNumber";
    centerDataTicket.appendChild(centerDataTicketName);
    centerDataTicket.appendChild(centerDataTicketNumber);
    centerDataHolder.appendChild(centerDataTicket);
}
for(let i = 0; i< unresolvedTickets.length;i++){
    const bottomContentWrapper = document.getElementsByClassName("bottomContentWrapper")[0];
    const bottomLeftLeftTicket = document.createElement("div");
    const bottomLeftRightTicket = document.createElement("div");
    const bottomLeftTicketName = document.createElement("span");
    const bottomLeftTicketNumber = document.createElement("span");
    const row = document.createElement("div");
    bottomLeftTicketName.innerText = unresolvedTickets[i].name;
    bottomLeftTicketNumber.innerText = unresolvedTickets[i].number;
    row.className="row"
    bottomLeftLeftTicket.className="bottomLeftLeftTicket"
    bottomLeftRightTicket.className="bottomLeftRightTicket"
    bottomLeftTicketName.className = "bottomLeftTicketName";
    bottomLeftTicketNumber.className = "bottomLeftTicketNumber";
    bottomLeftLeftTicket.appendChild(bottomLeftTicketName);
    bottomLeftRightTicket.appendChild(bottomLeftTicketNumber);
    row.appendChild(bottomLeftLeftTicket);
    row.appendChild(bottomLeftRightTicket);
    bottomContentWrapper.appendChild(row);
}
for(let i = 0; i < tasks.length; i++){
const bottomContentWrapper = document.getElementsByClassName("bottomContentWrapper")[1];
const rightRow = document.createElement("div");
const checkedOrNot = document.createElement("img");
const rowText = document.createElement("span");
const statusHolder = document.createElement("div");
const rowStatus = document.createElement("div");
checkedOrNot.id = i;
if(tasks[i].checked){
    checkedOrNot.src = "assets/check.png"
}else{
    checkedOrNot.src = "assets/noCheck.png"
}
switch(tasks[i].status){
    case 1:
        rowStatus.className = "urgent";
        rowStatus.innerText = "URGENT"
        break;
    case 2:
        rowStatus.className = "new";
        rowStatus.innerText = "NEW"
        break;
    case 3:
        rowStatus.className = "default";
        rowStatus.innerText = "DEFAULT"
        break;
    default:
        rowStatus.className = "default";
        rowStatus.innerText = "DEFAULT"
}

rightRow.className="row";
rightRow.appendChild(checkedOrNot);
rightRow.appendChild(rowText);
rowText.className = "rowText"
rowText.innerText = tasks[i].name;
statusHolder.className = "statusHolder";
statusHolder.appendChild(rowStatus);
rightRow.appendChild(statusHolder);
bottomContentWrapper.appendChild(rightRow)
}
