const { providerURI } = require('../config/dev');
const mongoose = require('mongoose');
const db = require('../db');
const { URI } = require('../config/dev');

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

db.on('open', async() => { 
  console.log('Magically connected to the providerDB');

//DEFINE SCHEMA
const providerSchema = new mongoose.Schema({
    name:  {
        type: String, 
        required: 'please enter provider name',
        maxlength: 100
    },

    specialty: {
        type: [String],
        required: 'please enter provider specialty',
        maxlength: 100
    },

    contact: {
        phone: { 
            type: String,
            required: 'please enter contact information',
            maxlength: 9
        },
        email: {
            type: String,
            required: 'please enter email',
            maxlength: 100
        } 
    },

    zip: {
        type: Number,
        required: 'please enter zip code',
        length: 5
    }
});
module.exports.Provider = mongoose.model('Provider', providerSchema);
});


/*
[{"_id":1,"name":"Maddie Lavrinov","specialty":"Pediatrics","email":"mlavrinov0@dropbox.com","phoneNumber":"(958) 8895512","diploma":"University of Szczecin"},
{"_id":2,"name":"Kristen Buckam","specialty":"ADD/ADHD","email":"kbuckam1@boston.com","phoneNumber":"(943) 7337025","diploma":"Lander University"},
{"_id":3,"name":"Arri McGlue","specialty":"PTSD","email":"amcglue2@omniture.com","phoneNumber":"(171) 8194680","diploma":"Magnitogorsk State University"},
{"_id":4,"name":"Thibaud Prestland","specialty":"Counselor","email":"tprestland3@addtoany.com","phoneNumber":"(926) 7942353","diploma":"University of Jos"},
{"_id":5,"name":"Antonie Offiler","specialty":"Life Coach","email":"aoffiler4@si.edu","phoneNumber":"(472) 7238704","diploma":"Technological University (Pinlon)"},
{"_id":6,"name":"Karrah Laverty","specialty":"Developmental Delays","email":"klaverty5@tiny.cc","phoneNumber":"(388) 7661839","diploma":"Stockholm University"},
{"_id":7,"name":"Haze Fradson","specialty":"Anxiety","email":"hfradson6@trellian.com","phoneNumber":"(149) 5445301","diploma":"University of Toronto, Scarborough"},
{"_id":8,"name":"Vivie Natwick","specialty":"Hypnosis","email":"vnatwick7@taobao.com","phoneNumber":"(500) 7509810","diploma":"École Polytechnique de Montréal, Université de Montréal"},
{"_id":9,"name":"Desiree Tute","specialty":"Pediatrics","email":"dtute8@dropbox.com","phoneNumber":"(620) 2464287","diploma":"Université d'Auvergne (Clermont-Ferrand I)"},
{"_id":10,"name":"Loree Liversedge","specialty":"Mental Health Coach","email":"lliversedge9@nymag.com","phoneNumber":"(544) 6350826","diploma":"Irkutsk State Technical University"},
{"_id":11,"name":"Tally Bradberry","specialty":"Depression","email":"tbradberrya@newsvine.com","phoneNumber":"(904) 3865954","diploma":"Guru Gobind Singh Indraprastha University"},
{"_id":12,"name":"Adolpho Vint","specialty":"Anxiety","email":"avintb@bing.com","phoneNumber":"(635) 5485645","diploma":"Lithunian Institute of Physical Education"},
{"_id":13,"name":"Gaye Fakeley","specialty":"Anxiety","email":"gfakeleyc@vinaora.com","phoneNumber":"(314) 8928778","diploma":"Kalamazoo College"},
{"_id":14,"name":"Brooks Mowatt","specialty":"ADD/ADHD","email":"bmowattd@youtube.com","phoneNumber":"(794) 1314689","diploma":"Austin Community College"},
{"_id":15,"name":"Regan Broster","specialty":"Accounting Assistant III","email":"rbrostere@sfgate.com","phoneNumber":"(558) 1851779","diploma":"Loyola University New Orleans"},
{"_id":16,"name":"Baryram Noblet","specialty":"Financial Analyst","email":"bnobletf@ucla.edu","phoneNumber":"(340) 5479245","diploma":"Botswana College of Agriculture"},
{"_id":17,"name":"Isabella Drew-Clifton","specialty":"Structural Analysis Engineer","email":"idrewcliftong@opensource.org","phoneNumber":"(991) 9961002","diploma":"Bhavnagar University"},
{"_id":18,"name":"Curran Dethloff","specialty":"Office Assistant I","email":"cdethloffh@123-reg.co.uk","phoneNumber":"(610) 6541560","diploma":"University of Social Welfare and Rehabilitation Scinences"},
{"_id":19,"name":"Corrie D'Adamo","specialty":"Structural Engineer","email":"cdadamoi@meetup.com","phoneNumber":"(752) 6915825","diploma":"Universidad Fundepos Alma Mater"},
{"_id":20,"name":"Bernelle Spellworth","specialty":"Software Engineer III","email":"bspellworthj@npr.org","phoneNumber":"(248) 5056266","diploma":"Pedagogical University of Rzeszow"},
{"_id":21,"name":"Yurik Gaukrodge","specialty":"Cost Accountant","email":"ygaukrodgek@home.pl","phoneNumber":"(660) 3486804","diploma":"Universität Leipzig"},
{"_id":22,"name":"Kerry Wareing","specialty":"Structural Engineer","email":"kwareingl@cnbc.com","phoneNumber":"(658) 7823794","diploma":"State Maritine Academy"},
{"_id":23,"name":"Wolfie Levet","specialty":"Research Associate","email":"wlevetm@nytimes.com","phoneNumber":"(174) 7627223","diploma":"Universidad Adventista Dominicana"},
{"_id":24,"name":"Jereme Desvignes","specialty":"Software Test Engineer IV","email":"jdesvignesn@sbwire.com","phoneNumber":"(551) 8161825","diploma":"Institute of Business Administration (IBA)"},
{"_id":25,"name":"Rhona Shillom","specialty":"Recruiting Manager","email":"rshillomo@smugmug.com","phoneNumber":"(496) 5550971","diploma":"DeVry Institute of Technology, DuPage"}]
*/