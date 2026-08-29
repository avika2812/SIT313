const express = require('express');

const app = express();

require('dotenv').config();

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY
});

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/newsletter.html');
});

app.post("/", async (req, res) => {

    let fname = req.body.first;
    let lname = req.body.last;
    let email = req.body.email;

    console.log("name is " + fname + " " + lname);
    console.log(req.body);
    console.log("email is : " + email);

    const listAddress =
        "devdeakin@sandbox7b9f99966c0a4874b1adc771d7a599b6.mailgun.org";

    try {

        // Add subscriber to Mailgun mailing list
        const subscriber = await mg.lists.members.createMember(listAddress, {
            address: email,
            name: fname + " " + lname,
            subscribed: "true",
            upsert: "true"
        });

        console.log("Subscriber added:", subscriber);

        // Send welcome email
        const emailResponse = await mg.messages.create(
            process.env.MAILGUN_DOMAIN,
            {
                from:
                    "postmaster@sandbox7b9f99966c0a4874b1adc771d7a599b6.mailgun.org",

                to: [email],

                subject: "Welcome to DEV@Deakin",

                text:
                    "Hello " + fname + ",\n\n" +
                    "Welcome to DEV@Deakin!\n\n" +
                    "Thank you for subscribing to our newsletter. " +
                    "We are happy to have you as part of the DEV@Deakin community.\n\n" +
                    "Regards,\n" +
                    "DEV@Deakin Team"
            }
        );

        console.log("Email sent successfully:");
        console.log(emailResponse);

        res.status(200).send(
            "Sign up successful! Welcome email sent."
        );

    } catch (error) {

        console.log("Error:", error);

        res.status(500).send("Something went wrong");
    }
});

app.listen(8080, function () {
    console.log("server is running on port 8080");
});