Final Project

Mental Health Connect


I am building a site for users to find mental health providers by specialty or zip code, and have an option to request an appointment(sends contact info to provider).

I'm planning to use MongoDB to store the data.

Providers will be including the uniqueId, name, specialty, zip, and contact info (phone, email). The providers will possibly include reviews, an array of reviews objects that each include (Id, date, user and content). Providers will need to be able to receive the scheduling requests privately, perhaps by email or text. 

Users will have a collection to store the uniqueId, user name, and contact info(phone, email). Users will have the option to search by specialty and location. They will be able to read the provider name, specialty, and possibly reviews. Users will have an option to request an appointment.

This site will also need to use authentication for users. Many of the fields will be required.

KHorton

{
  "fields": [
    {
      "name": "_id",
      "path": "_id",
      "count": 27,
      "types": [
        {
          "name": "ObjectID",
          "bsonType": "ObjectID",
          "path": "_id",
          "count": 27,
          "values": [
            "6067a9b1a75aec386cf1ca73",
            "6067aa34a75aec386cf1ca74",
            "606bda1f8169211f90a3c696",
            "606bda1f8169211f90a3c697",
            "606bda1f8169211f90a3c698",
            "606bda1f8169211f90a3c699",
            "606bda1f8169211f90a3c69a",
            "606bda1f8169211f90a3c69b",
            "606bda1f8169211f90a3c69c",
            "606bda1f8169211f90a3c69d",
            "606bda1f8169211f90a3c69e",
            "606bda1f8169211f90a3c69f",
            "606bda1f8169211f90a3c6a0",
            "606bda1f8169211f90a3c6a1",
            "606bda1f8169211f90a3c6a2",
            "606bda1f8169211f90a3c6a3",
            "606bda1f8169211f90a3c6a4",
            "606bda1f8169211f90a3c6a5",
            "606bda1f8169211f90a3c6a6",
            "606bda1f8169211f90a3c6a7",
            "606bda1f8169211f90a3c6a8",
            "606bda1f8169211f90a3c6a9",
            "606bda1f8169211f90a3c6aa",
            "606bda1f8169211f90a3c6ab",
            "606bda1f8169211f90a3c6ac",
            "606bda1f8169211f90a3c6ad",
            "606bda1f8169211f90a3c6ae"
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 27,
          "has_duplicates": false
        }
      ],
      "total_count": 27,
      "type": "ObjectID",
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "contact",
      "path": "contact",
      "count": 27,
      "types": [
        {
          "name": "Document",
          "bsonType": "Document",
          "path": "contact",
          "count": 27,
          "fields": [
            {
              "name": "email",
              "path": "contact.email",
              "count": 27,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "contact.email",
                  "count": 27,
                  "values": [
                    "fwilde@doctorperson.com",
                    "achatres@doctorperson.com",
                    "mlavrinov0@dropbox.com",
                    "kbuckam1@boston.com",
                    "amcglue2@omniture.com",
                    "tprestland3@addtoany.com",
                    "aoffiler4@si.edu",
                    "klaverty5@tiny.cc",
                    "hfradson6@trellian.com",
                    "vnatwick7@taobao.com",
                    "dtute8@dropbox.com",
                    "lliversedge9@nymag.com",
                    "tbradberrya@newsvine.com",
                    "avintb@bing.com",
                    "gfakeleyc@vinaora.com",
                    "bmowattd@youtube.com",
                    "rbrostere@sfgate.com",
                    "bnobletf@ucla.edu",
                    "idrewcliftong@opensource.org",
                    "cdethloffh@123-reg.co.uk",
                    "cdadamoi@meetup.com",
                    "bspellworthj@npr.org",
                    "ygaukrodgek@home.pl",
                    "kwareingl@cnbc.com",
                    "wlevetm@nytimes.com",
                    "jdesvignesn@sbwire.com",
                    "rshillomo@smugmug.com"
                  ],
                  "total_count": 0,
                  "probability": 1,
                  "unique": 27,
                  "has_duplicates": false
                }
              ],
              "total_count": 27,
              "type": "String",
              "has_duplicates": false,
              "probability": 1
            },
            {
              "name": "phone",
              "path": "contact.phone",
              "count": 2,
              "types": [
                {
                  "name": "Undefined",
                  "type": "Undefined",
                  "path": "contact.phone",
                  "count": 25,
                  "total_count": 0,
                  "probability": 0.9259259259259259,
                  "unique": 1,
                  "has_duplicates": true
                },
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "contact.phone",
                  "count": 2,
                  "values": [
                    "444-1233",
                    "444-5698"
                  ],
                  "total_count": 0,
                  "probability": 0.07407407407407407,
                  "unique": 2,
                  "has_duplicates": false
                }
              ],
              "total_count": 27,
              "type": [
                "Undefined",
                "String"
              ],
              "has_duplicates": true,
              "probability": 0.07407407407407407
            },
            {
              "name": "phoneNumber",
              "path": "contact.phoneNumber",
              "count": 25,
              "types": [
                {
                  "name": "String",
                  "bsonType": "String",
                  "path": "contact.phoneNumber",
                  "count": 25,
                  "values": [
                    "(958) 8895512",
                    "(943) 7337025",
                    "(171) 8194680",
                    "(926) 7942353",
                    "(472) 7238704",
                    "(388) 7661839",
                    "(149) 5445301",
                    "(500) 7509810",
                    "(620) 2464287",
                    "(544) 6350826",
                    "(904) 3865954",
                    "(635) 5485645",
                    "(314) 8928778",
                    "(794) 1314689",
                    "(558) 1851779",
                    "(340) 5479245",
                    "(991) 9961002",
                    "(610) 6541560",
                    "(752) 6915825",
                    "(248) 5056266",
                    "(660) 3486804",
                    "(658) 7823794",
                    "(174) 7627223",
                    "(551) 8161825",
                    "(496) 5550971"
                  ],
                  "total_count": 0,
                  "probability": 0.9259259259259259,
                  "unique": 25,
                  "has_duplicates": false
                },
                {
                  "name": "Undefined",
                  "type": "Undefined",
                  "path": "contact.phoneNumber",
                  "count": 2,
                  "total_count": 0,
                  "probability": 0.07407407407407407,
                  "unique": 1,
                  "has_duplicates": true
                }
              ],
              "total_count": 27,
              "type": [
                "String",
                "Undefined"
              ],
              "has_duplicates": true,
              "probability": 0.9259259259259259
            }
          ],
          "total_count": 0,
          "probability": 1
        }
      ],
      "total_count": 27,
      "type": "Document",
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "name",
      "path": "name",
      "count": 27,
      "types": [
        {
          "name": "String",
          "bsonType": "String",
          "path": "name",
          "count": 27,
          "values": [
            "Dr. Frida Wilde",
            "Dr. Anita Chartes",
            "Maddie Lavrinov",
            "Kristen Buckam",
            "Arri McGlue",
            "Thibaud Prestland",
            "Antonie Offiler",
            "Karrah Laverty",
            "Haze Fradson",
            "Vivie Natwick",
            "Desiree Tute",
            "Loree Liversedge",
            "Tally Bradberry",
            "Adolpho Vint",
            "Gaye Fakeley",
            "Brooks Mowatt",
            "Regan Broster",
            "Baryram Noblet",
            "Isabella Drew-Clifton",
            "Curran Dethloff",
            "Corrie D'Adamo",
            "Bernelle Spellworth",
            "Yurik Gaukrodge",
            "Kerry Wareing",
            "Wolfie Levet",
            "Jereme Desvignes",
            "Rhona Shillom"
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 27,
          "has_duplicates": false
        }
      ],
      "total_count": 27,
      "type": "String",
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "specialty",
      "path": "specialty",
      "count": 27,
      "types": [
        {
          "name": "Array",
          "bsonType": "Array",
          "path": "specialty",
          "count": 25,
          "types": [
            {
              "name": "String",
              "bsonType": "String",
              "path": "specialty",
              "count": 31,
              "values": [
                "Pediatrics",
                "ADD",
                "ADHD",
                "PTSD",
                "Counselor",
                "Life Coach",
                "Developmental Delays",
                "Anxiety",
                "Depression",
                "Hypnosis",
                "Pediatrics",
                "Mental Health Coach",
                "Depression",
                "Anxiety",
                "Nutritionist",
                "Meditation",
                "ADD",
                "ADHD",
                "Meditation",
                "yoga",
                "Dissociative disorders",
                "Behavior disorders",
                "Teenagers",
                "Meditation",
                "Credit counseling",
                "Pediatrics",
                "Geriatrics",
                "Geriatrics",
                "Personality disorders",
                "Counseling",
                "Counseling"
              ],
              "total_count": 0,
              "probability": 1,
              "unique": 21,
              "has_duplicates": true
            }
          ],
          "lengths": [
            1,
            2,
            1,
            1,
            1,
            1,
            2,
            1,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            1,
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "total_count": 31,
          "probability": 0.9259259259259259,
          "average_length": 1.24
        },
        {
          "name": "String",
          "bsonType": "String",
          "path": "specialty",
          "count": 2,
          "values": [
            "PTSD",
            "Pediatrics"
          ],
          "total_count": 0,
          "probability": 0.07407407407407407,
          "unique": 2,
          "has_duplicates": false
        }
      ],
      "total_count": 27,
      "type": [
        "Array",
        "String"
      ],
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "zip",
      "path": "zip",
      "count": 27,
      "types": [
        {
          "name": "Int32",
          "bsonType": "Int32",
          "path": "zip",
          "count": 27,
          "values": [
            72712,
            72712,
            72712,
            72719,
            72756,
            72745,
            72712,
            72756,
            72712,
            72756,
            72756,
            72745,
            72712,
            72712,
            72756,
            72756,
            72756,
            72719,
            72712,
            72712,
            72712,
            72756,
            72712,
            72756,
            72712,
            72745,
            72719
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 4,
          "has_duplicates": true
        }
      ],
      "total_count": 27,
      "type": "Int32",
      "has_duplicates": true,
      "probability": 1
    }
  ],
  "count": 27
}