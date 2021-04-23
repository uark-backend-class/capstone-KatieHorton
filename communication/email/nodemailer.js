const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e2623d35835010",
      pass: "182a19a11ce287"
    }
  });

const mail = {
    from:'me@me.com',
    to: 'test@example.com',
    subject:'New Appointment Request',
    html: '<h1> Hello!</h1>'
    }
    
    transport.sendMail(mail).then(
    info => console.log(info.response)
    )
  
    module.exports = transport;