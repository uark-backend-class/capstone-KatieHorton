const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
host: 'smtp.mailtrap.io',
port: 2525,
auth: { user: 'userName',
	password:'password'
}
});


const mail = {
    from:'me@me.com',
    to: 'test@example.com',
    subject:'our first email!',
    html: '<h1> Hello!</h1>'
    }
    
    transport.sendMail(mail).then(
    info => console.log(info.response)
    )
  
    module.exports = transport;