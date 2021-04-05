const addProvider = Provider.create({
    name: this.name,
    specialty: this.specialty,
    contact: {
        phone: this.phone,
        email: this.email
    },
    zip: this.zip
}).then(addProvider.save());

addProvider({
    "name": "Dr. Anita Chartes",
    "specialty": "Pediatrics",
    "contact": { "phone": "444-5698", "email": "achatres@doctorperson.com" },
    "zip": 72712
});
addProvider({
    name: 'Dr. Frida Wilde',
    specialty: 'PTSD',
    contact: { phone: '444-1234', email: 'fwilde@doctorperson.com' },
    zip: 72712
});
