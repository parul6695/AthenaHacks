function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "parulgup@usc.edu",
	Password : "Dreamlive@cali6695",
	To : 'akansha.das28@gmail.com',
	From : "parulgup@usc.edu",
	Subject : "New Offering Match with you",
	Body : "Hi,<br><br>There are new items that become available as per your requirement. <br>Please claim it before it runs out.<br><br>Keep on the ShareOn!",
	}).then(
		message => alert("mail sent successfully")
	);
}
