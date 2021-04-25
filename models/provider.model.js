const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//DEFINE SCHEMA
const providerSchema = new mongoose.Schema({
    name:  {
        type: String,
        //required: 'please enter provider name',
        maxlength: 100
    },

    profession: String,

    specialty: {
        type: [String],
        //required: 'please enter provider specialty',
        maxlength: 100
    },
    
    email: {
            type: String,
            //required: 'please enter provider email',
            maxlength: 30
        },
    
    phone: {
            type: String,
            //required: 'please enter provider phone number',
            maxlength: 10
        },

    address: {
            type: String,
            //required: 'Please enter Practice address',
            
        },

    comments: [
        {
            body: String,
            date: Date,
        }
    ],

});

//EXPORT PROVIDER MODEL
module.exports = mongoose.model('Provider', providerSchema);

//const providerSchema = new(mongoose.Schema)

/*
({ 'name': 'Laurie Finstrom', 'profession': 'Counselor', 'specialty': ['anxiety', 'mood disorders', 'coping skills'], 'email': '', 'phone': '(479) 439-1350', 'address': '3102 Southeast J Street, Bentonville, AR 72712' })
({ 'name': 'Emily Johnson', 'profession': 'Counselor', 'specialty': ['pediatrics', 'peer relationships'], 'email': '', 'phone': '(479) 239-8594 ', 'address': '108 East Central Avenue, Suite 210, Bentonville, AR 72712' })
({ 'name': 'Dr. Aaron Shaw', 'profession': 'Marriage Therapist', 'specialty': ['anxiety', 'depression', 'relationship issues'], 'email': '', 'phone': '(479) 431-6574', 'address': '12 Mckissic Creek Rd, Bentonville, AR 72712' })
({ 'name': 'Shawnte Farmer', 'profession': 'Nurse Practitioner', 'specialty': ['testing and evaluation', 'medication management'], 'email': 'shawnte@ncicares.com', 'phone': ' (479) 329-1410', 'address':'701 North Walton Boulevard, Bentonville, AR 72712' })
({ 'name': 'Dr. Hyatt', 'profession': 'Psychiatrist', 'specialty': ['medication management', 'depression', 'adhd'], 'email': 'info@pinnaclepsychiatry.net', 'phone': '(479) 252-9891', 'address': '3300 South Market Street #118, Rogers, AR 72758' })
({ 'name': 'Cheryl Williams', 'profession': 'Counselor', 'specialty': ['anxiety', 'depression', 'eating disorders','personality disorders', 'trauma'], 'email': 'Info@Bridges2Wellbeing.com', 'phone': '479.301.2284', 'address': '28 W Sunbridge Drive, Fayetteville, AR 72703' })
({ 'name': 'Kimberly Shuler', 'profession': 'Social Work', 'specialty': ['therapy', 'behavioral health'], 'email': 'shuler.kim@gmail.com', 'phone': '(479)871-3611', 'address': '28 W Sunbridge Drive, Fayetteville, AR 72703' })
({ 'name': 'Matthew Sweetser', 'profession': 'Counselor', 'specialty': ['anxiety', 'depression', 'anger', 'relationship issues'], 'email': 'ncicares.com/contact', 'phone': '(479) 439-1350', 'address': 'Finstrom Counseling PLLC, 3102 Southeast J Street, Bentonville, AR 72712' })
({ 'name': 'Robyn Thurman', 'profession': 'Counselor', 'specialty': ['anxiety', 'depression', 'parenting'], 'email': 'robyn@brookwaycounseling.com', 'phone': '(479) 334-0929', 'address': '801 Carlton St. Springdale, AR, 72762' })
({ 'name': 'Dr. Lance Foster', 'profession': 'Psychiatrist', 'specialty': ['pediatrics', 'depression', 'adults'], 'email': 'https://www.mana.md/northwest-arkansas-psychiatry/', 'phone': '(479) 571-6363', 'address': '4700 Thompson Ste C-103, Springdale, Ar, 72764' })
({ 'name': 'Nick Hopkins', 'profession': 'Nurse Practitioner', 'specialty': ['medication management', 'pediatrics', 'adults'], 'email': 'https://www.mana.md/northwest-arkansas-psychiatry/', 'phone': '(479)571-6363', 'address': '4700 Thompson Ste C-103, Springdale, Ar, 72764' })
*/