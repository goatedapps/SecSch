// Researched Google Maps transit snapshot for the confirmed date.
// Save only route facts and public source links, never page session data.
export const commutePlan = {
  "origin": "Yew Tee Primary School",
  "departure": "2026-10-13T07:00:00+08:00",
  "timeZone": "Asia/Singapore",
  "source": "Google Maps",
  "checkedOn": "2026-10-12",
  "selection": "Earliest arrival among returned public-transport options leaving no earlier than 7am.",
  "note": "Dated estimates, not live predictions. Total includes walking, transfers and waiting from 7am. Rounded to the nearest minute."
};

export const commutes = [
  {
    "schoolId": 1,
    "totalMinutes": 56,
    "arrival": "2026-10-13T07:56:08+08:00",
    "routeStart": "2026-10-13T07:00:04+08:00",
    "waitMinutes": 9,
    "steps": [
      {
        "mode": "walk",
        "minutes": 9,
        "durationLabel": "8 min"
      },
      {
        "mode": "bus",
        "minutes": 8,
        "durationLabel": "8 min",
        "from": "Bef Choa Chu Kang Lk",
        "to": "Aft Bt Panjang Stn",
        "services": [
          {
            "kind": "Bus",
            "service": "979",
            "towards": "Bt Panjang Int",
            "name": "979"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 14,
        "durationLabel": "14 min",
        "from": "Bukit Panjang",
        "to": "Tan Kah Kee",
        "services": [
          {
            "kind": "Subway",
            "service": "DT",
            "towards": "Expo",
            "name": "Downtown Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 15,
        "durationLabel": "15 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Hwa%20Chong%20Institution%20High%20School%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Hwa Chong Institution (High School Section)",
    "resolvedAddress": "661 Bukit Timah Rd, Singapore 269734",
    "alternativesCompared": 6
  },
  {
    "schoolId": 2,
    "totalMinutes": 50,
    "arrival": "2026-10-13T07:50:03+08:00",
    "routeStart": "2026-10-13T07:00:04+08:00",
    "waitMinutes": 9,
    "steps": [
      {
        "mode": "walk",
        "minutes": 9,
        "durationLabel": "8 min"
      },
      {
        "mode": "bus",
        "minutes": 8,
        "durationLabel": "8 min",
        "from": "Bef Choa Chu Kang Lk",
        "to": "Aft Bt Panjang Stn",
        "services": [
          {
            "kind": "Bus",
            "service": "979",
            "towards": "Bt Panjang Int",
            "name": "979"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 12,
        "durationLabel": "12 min",
        "from": "Bukit Panjang",
        "to": "Sixth Avenue",
        "services": [
          {
            "kind": "Subway",
            "service": "DT",
            "towards": "Expo",
            "name": "Downtown Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Nanyang%20Girls%E2%80%99%20High%2C%202%20Linden%20Drive%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Nanyang Girls' High School",
    "resolvedAddress": "2 Linden Dr, Singapore 288683",
    "alternativesCompared": 4
  },
  {
    "schoolId": 3,
    "totalMinutes": 58,
    "arrival": "2026-10-13T07:58:16+08:00",
    "routeStart": "2026-10-13T07:00:29+08:00",
    "waitMinutes": 0,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 37,
        "durationLabel": "37 min",
        "from": "Yew Tee",
        "to": "Braddell",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Marina South Pier",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 10,
        "durationLabel": "10 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Raffles%20Girls%20School%2C%202%20Braddell%20Rise%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Raffles Girls’ School (Secondary)",
    "resolvedAddress": "2 Braddell Rise, Singapore 318871",
    "alternativesCompared": 6
  },
  {
    "schoolId": 4,
    "totalMinutes": 61,
    "arrival": "2026-10-13T08:00:34+08:00",
    "routeStart": "2026-10-13T07:00:29+08:00",
    "waitMinutes": 0,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 35,
        "durationLabel": "35 min",
        "from": "Yew Tee",
        "to": "Bishan",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Marina South Pier",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 14,
        "durationLabel": "14 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Raffles%20Institution%20%28Secondary%29%2C%201%20Raffles%20Institution%20Lane%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Raffles Institution",
    "resolvedAddress": "1 Raffles Institution Ln, Singapore 575954",
    "alternativesCompared": 6
  },
  {
    "schoolId": 5,
    "totalMinutes": 55,
    "arrival": "2026-10-13T07:55:05+08:00",
    "routeStart": "2026-10-13T07:00:11+08:00",
    "waitMinutes": 5,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 12,
        "durationLabel": "11 min",
        "from": "Yew Tee",
        "to": "Jurong East",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Jurong East",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 1,
        "durationLabel": "1 min"
      },
      {
        "mode": "mrt",
        "minutes": 6,
        "durationLabel": "6 min",
        "from": "Jurong East",
        "to": "Dover",
        "services": [
          {
            "kind": "Subway",
            "service": "EW",
            "towards": "Pasir Ris",
            "name": "East–West Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 20,
        "durationLabel": "21 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Anglo-Chinese%20%28Independent%29%20%28Secondary%29%2C%20121%20Dover%20Road%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "ACS (Independent)",
    "resolvedAddress": "121 Dover Rd, Singapore 139650",
    "alternativesCompared": 6
  },
  {
    "schoolId": 6,
    "totalMinutes": 52,
    "arrival": "2026-10-13T07:51:50+08:00",
    "routeStart": "2026-10-13T07:02:23+08:00",
    "waitMinutes": 6,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 9,
        "durationLabel": "9 min",
        "from": "Yew Tee",
        "to": "Woodlands",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Marina South Pier",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 3,
        "durationLabel": "3 min"
      },
      {
        "mode": "mrt",
        "minutes": 12,
        "durationLabel": "12 min",
        "from": "Woodlands",
        "to": "Mayflower",
        "services": [
          {
            "kind": "Subway",
            "service": "TE",
            "towards": "Bayshore",
            "name": "Thomson–East Coast Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "10 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/CHIJ%20St.%20Nicholas%20Girls%E2%80%99%20%28Secondary%29%2C%20501%20Ang%20Mo%20Kio%20Street%2013%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "CHIJ St Nicholas Girls' School",
    "resolvedAddress": "501 Ang Mo Kio Street 13, Singapore 569405",
    "alternativesCompared": 6
  },
  {
    "schoolId": 7,
    "totalMinutes": 60,
    "arrival": "2026-10-13T08:00:29+08:00",
    "routeStart": "2026-10-13T07:00:29+08:00",
    "waitMinutes": 0,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 35,
        "durationLabel": "35 min",
        "from": "Yew Tee",
        "to": "Bishan",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Marina South Pier",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 14,
        "durationLabel": "14 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Catholic%20High%20%28Secondary%29%2C%209%20Bishan%20Street%2022%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Catholic High School",
    "resolvedAddress": "9 Bishan Street 22, Singapore 579767",
    "alternativesCompared": 6
  },
  {
    "schoolId": 8,
    "totalMinutes": 79,
    "arrival": "2026-10-13T08:19:26+08:00",
    "routeStart": "2026-10-13T07:02:46+08:00",
    "waitMinutes": 11,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 11,
        "durationLabel": "12 min",
        "from": "Yew Tee",
        "to": "Jurong East",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Jurong East",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 1,
        "durationLabel": "1 min"
      },
      {
        "mode": "mrt",
        "minutes": 21,
        "durationLabel": "21 min",
        "from": "Jurong East",
        "to": "Outram Park",
        "services": [
          {
            "kind": "Subway",
            "service": "EW",
            "towards": "Pasir Ris",
            "name": "East–West Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 1,
        "durationLabel": "1 min"
      },
      {
        "mode": "mrt",
        "minutes": 14,
        "durationLabel": "14 min",
        "from": "Outram Park",
        "to": "Katong Park",
        "services": [
          {
            "kind": "Subway",
            "service": "TE",
            "towards": "Bayshore",
            "name": "Thomson–East Coast Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 9,
        "durationLabel": "9 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Dunman%20High%20%28Secondary%29%2C%2010%20Tanjong%20Rhu%20Road%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Dunman High School",
    "resolvedAddress": "10 Tanjong Rhu Rd, Singapore 436895",
    "alternativesCompared": 6
  },
  {
    "schoolId": 9,
    "totalMinutes": 44,
    "arrival": "2026-10-13T07:43:52+08:00",
    "routeStart": "2026-10-13T07:00:04+08:00",
    "waitMinutes": 9,
    "steps": [
      {
        "mode": "walk",
        "minutes": 9,
        "durationLabel": "8 min"
      },
      {
        "mode": "bus",
        "minutes": 8,
        "durationLabel": "8 min",
        "from": "Bef Choa Chu Kang Lk",
        "to": "Aft Bt Panjang Stn",
        "services": [
          {
            "kind": "Bus",
            "service": "979",
            "towards": "Bt Panjang Int",
            "name": "979"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 9,
        "durationLabel": "10 min",
        "from": "Bukit Panjang",
        "to": "King Albert Park",
        "services": [
          {
            "kind": "Subway",
            "service": "DT",
            "towards": "Expo",
            "name": "Downtown Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 7,
        "durationLabel": "6 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Methodist%20Girls%E2%80%99%20%28Secondary%29%2C%2011%20Blackmore%20Drive%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Methodist Girls' School",
    "resolvedAddress": "11 Blackmore Dr, Singapore 599986",
    "alternativesCompared": 6
  },
  {
    "schoolId": 10,
    "totalMinutes": 54,
    "arrival": "2026-10-13T07:54:26+08:00",
    "routeStart": "2026-10-13T07:00:04+08:00",
    "waitMinutes": 9,
    "steps": [
      {
        "mode": "walk",
        "minutes": 9,
        "durationLabel": "8 min"
      },
      {
        "mode": "bus",
        "minutes": 8,
        "durationLabel": "8 min",
        "from": "Bef Choa Chu Kang Lk",
        "to": "Aft Bt Panjang Stn",
        "services": [
          {
            "kind": "Bus",
            "service": "979",
            "towards": "Bt Panjang Int",
            "name": "979"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 14,
        "durationLabel": "14 min",
        "from": "Bukit Panjang",
        "to": "Tan Kah Kee",
        "services": [
          {
            "kind": "Subway",
            "service": "DT",
            "towards": "Expo",
            "name": "Downtown Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 13,
        "durationLabel": "13 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/National%20Junior%20College%20%28Secondary%29%2C%2037%20Hillcrest%20Road%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "National Junior College",
    "resolvedAddress": "37 Hillcrest Rd, Singapore 288913",
    "alternativesCompared": 6
  },
  {
    "schoolId": 11,
    "totalMinutes": 48,
    "arrival": "2026-10-13T07:47:34+08:00",
    "routeStart": "2026-10-13T07:00:04+08:00",
    "waitMinutes": 9,
    "steps": [
      {
        "mode": "walk",
        "minutes": 9,
        "durationLabel": "8 min"
      },
      {
        "mode": "bus",
        "minutes": 8,
        "durationLabel": "8 min",
        "from": "Bef Choa Chu Kang Lk",
        "to": "Aft Bt Panjang Stn",
        "services": [
          {
            "kind": "Bus",
            "service": "979",
            "towards": "Bt Panjang Int",
            "name": "979"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 18,
        "durationLabel": "18 min",
        "from": "Bukit Panjang",
        "to": "Stevens",
        "services": [
          {
            "kind": "Subway",
            "service": "DT",
            "towards": "Expo",
            "name": "Downtown Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Singapore%20Chinese%20Girls%E2%80%99%2C%20190%20Dunearn%20Road%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Singapore Chinese Girls' School",
    "resolvedAddress": "190 Dunearn Rd, Singapore 309437",
    "alternativesCompared": 6
  },
  {
    "schoolId": 12,
    "totalMinutes": 53,
    "arrival": "2026-10-13T07:53:29+08:00",
    "routeStart": "2026-10-13T07:00:11+08:00",
    "waitMinutes": 6,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 2,
        "durationLabel": "1 min",
        "from": "Yew Tee",
        "to": "Choa Chu Kang",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Jurong East",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "bus",
        "minutes": 28,
        "durationLabel": "29 min",
        "from": "Lot 1/Choa Chu Kang Stn",
        "to": "Bef Stevens Stn Exit 4",
        "services": [
          {
            "kind": "Bus",
            "service": "190",
            "towards": "Kampong Bahru Ter",
            "name": "190"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 4,
        "durationLabel": "4 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/St.%20Joseph%E2%80%99s%20Institution%20%28Secondary%29%2C%2038%20Malcolm%20Road%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "St. Joseph's Institution",
    "resolvedAddress": "38 Malcolm Rd, Singapore 308274",
    "alternativesCompared": 6
  },
  {
    "schoolId": 13,
    "totalMinutes": 91,
    "arrival": "2026-10-13T08:30:34+08:00",
    "routeStart": "2026-10-13T07:02:23+08:00",
    "waitMinutes": 10,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 35,
        "durationLabel": "35 min",
        "from": "Yew Tee",
        "to": "Bishan",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Marina South Pier",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 12,
        "durationLabel": "12 min",
        "from": "Bishan",
        "to": "MacPherson",
        "services": [
          {
            "kind": "Subway",
            "service": "CC",
            "towards": "Clockwise (via Serangoon)",
            "name": "Circle Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 14,
        "durationLabel": "15 min",
        "from": "MacPherson",
        "to": "Tampines East",
        "services": [
          {
            "kind": "Subway",
            "service": "DT",
            "towards": "Expo",
            "name": "Downtown Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 5,
        "durationLabel": "4 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Temasek%20Junior%20College%2C%202%20Tampines%20Avenue%209%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Temasek Junior College",
    "resolvedAddress": "2 Tampines Ave 9, Singapore 529564",
    "alternativesCompared": 6
  },
  {
    "schoolId": 14,
    "totalMinutes": 57,
    "arrival": "2026-10-13T07:56:48+08:00",
    "routeStart": "2026-10-13T07:00:00+08:00",
    "waitMinutes": 9,
    "steps": [
      {
        "mode": "walk",
        "minutes": 13,
        "durationLabel": "12 min"
      },
      {
        "mode": "bus",
        "minutes": 33,
        "durationLabel": "33 min",
        "from": "Opp Heavy Veh Pk",
        "to": "Anglo-Chinese Sch",
        "services": [
          {
            "kind": "Bus",
            "service": "960",
            "towards": "Promenade Stn/Pan Pacific",
            "name": "960"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 3,
        "durationLabel": "2 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Anglo-Chinese%20%28Barker%20Road%29%2C%2060%20Barker%20Road%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "ACS (Barker Road)",
    "resolvedAddress": "60 Barker Rd, Singapore 309919",
    "alternativesCompared": 2
  },
  {
    "schoolId": 15,
    "totalMinutes": 76,
    "arrival": "2026-10-13T08:15:54+08:00",
    "routeStart": "2026-10-13T07:00:04+08:00",
    "waitMinutes": 12,
    "steps": [
      {
        "mode": "walk",
        "minutes": 9,
        "durationLabel": "8 min"
      },
      {
        "mode": "bus",
        "minutes": 8,
        "durationLabel": "8 min",
        "from": "Bef Choa Chu Kang Lk",
        "to": "Aft Bt Panjang Stn",
        "services": [
          {
            "kind": "Bus",
            "service": "979",
            "towards": "Bt Panjang Int",
            "name": "979"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 23,
        "durationLabel": "23 min",
        "from": "Bukit Panjang",
        "to": "Little India",
        "services": [
          {
            "kind": "Subway",
            "service": "DT",
            "towards": "Expo",
            "name": "Downtown Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 3,
        "durationLabel": "3 min"
      },
      {
        "mode": "mrt",
        "minutes": 6,
        "durationLabel": "6 min",
        "from": "Little India",
        "to": "Potong Pasir",
        "services": [
          {
            "kind": "Subway",
            "service": "NE",
            "towards": "Punggol Coast",
            "name": "North East Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 14,
        "durationLabel": "13 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Cedar%20Girls%E2%80%99%2C%201%20Cedar%20Avenue%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Cedar Girls' Secondary School",
    "resolvedAddress": "1 Cedar Ave, S 349692",
    "alternativesCompared": 6
  },
  {
    "schoolId": 16,
    "totalMinutes": 52,
    "arrival": "2026-10-13T07:52:27+08:00",
    "routeStart": "2026-10-13T07:00:11+08:00",
    "waitMinutes": 12,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 9,
        "durationLabel": "8 min",
        "from": "Yew Tee",
        "to": "Bukit Batok",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Jurong East",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 5,
        "durationLabel": "5 min"
      },
      {
        "mode": "bus",
        "minutes": 13,
        "durationLabel": "14 min",
        "from": "Aft Bt Batok Stn/Blk 628",
        "to": "River Valley High Sch",
        "services": [
          {
            "kind": "Bus",
            "service": "174",
            "towards": "Boon Lay Int",
            "name": "174"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 3,
        "durationLabel": "3 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/River%20Valley%20High%20%28Secondary%29%2C%206%20Boon%20Lay%20Avenue%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "River Valley High School",
    "resolvedAddress": "6 Boon Lay Ave, Singapore 649961",
    "alternativesCompared": 6
  },
  {
    "schoolId": 17,
    "totalMinutes": 69,
    "arrival": "2026-10-13T08:09:09+08:00",
    "routeStart": "2026-10-13T07:00:04+08:00",
    "waitMinutes": 12,
    "steps": [
      {
        "mode": "walk",
        "minutes": 9,
        "durationLabel": "8 min"
      },
      {
        "mode": "bus",
        "minutes": 8,
        "durationLabel": "8 min",
        "from": "Bef Choa Chu Kang Lk",
        "to": "Aft Bt Panjang Stn",
        "services": [
          {
            "kind": "Bus",
            "service": "979",
            "towards": "Bt Panjang Int",
            "name": "979"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 23,
        "durationLabel": "23 min",
        "from": "Bukit Panjang",
        "to": "Little India",
        "services": [
          {
            "kind": "Subway",
            "service": "DT",
            "towards": "Expo",
            "name": "Downtown Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 3,
        "durationLabel": "3 min"
      },
      {
        "mode": "mrt",
        "minutes": 6,
        "durationLabel": "6 min",
        "from": "Little India",
        "to": "Potong Pasir",
        "services": [
          {
            "kind": "Subway",
            "service": "NE",
            "towards": "Punggol Coast",
            "name": "North East Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 7,
        "durationLabel": "7 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/St.%20Andrew%E2%80%99s%2C%2015%20Francis%20Thomas%20Drive%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "St Andrew's School (Secondary)",
    "resolvedAddress": "15 Francis Thomas Dr, Singapore 359342",
    "alternativesCompared": 6
  },
  {
    "schoolId": 18,
    "totalMinutes": 82,
    "arrival": "2026-10-13T08:21:50+08:00",
    "routeStart": "2026-10-13T07:02:46+08:00",
    "waitMinutes": 11,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 11,
        "durationLabel": "12 min",
        "from": "Yew Tee",
        "to": "Jurong East",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Jurong East",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 1,
        "durationLabel": "1 min"
      },
      {
        "mode": "mrt",
        "minutes": 21,
        "durationLabel": "21 min",
        "from": "Jurong East",
        "to": "Outram Park",
        "services": [
          {
            "kind": "Subway",
            "service": "EW",
            "towards": "Pasir Ris",
            "name": "East–West Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 1,
        "durationLabel": "1 min"
      },
      {
        "mode": "mrt",
        "minutes": 22,
        "durationLabel": "22 min",
        "from": "Outram Park",
        "to": "Siglap",
        "services": [
          {
            "kind": "Subway",
            "service": "TE",
            "towards": "Bayshore",
            "name": "Thomson–East Coast Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 3,
        "durationLabel": "3 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Victoria%2C%202%20Siglap%20Link%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Victoria School",
    "resolvedAddress": "2 Siglap Link, Singapore 448880",
    "alternativesCompared": 6
  },
  {
    "schoolId": 19,
    "totalMinutes": 60,
    "arrival": "2026-10-13T08:00:13+08:00",
    "routeStart": "2026-10-13T07:00:29+08:00",
    "waitMinutes": 0,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 39,
        "durationLabel": "39 min",
        "from": "Yew Tee",
        "to": "Toa Payoh",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Marina South Pier",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 10,
        "durationLabel": "10 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/CHIJ%20Secondary%20%28Toa%20Payoh%29%2C%20626%20Lorong%201%20Toa%20Payoh%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "CHIJ Secondary School",
    "resolvedAddress": "626 Lor 1 Toa Payoh, Singapore 319764",
    "alternativesCompared": 6
  },
  {
    "schoolId": 20,
    "totalMinutes": 82,
    "arrival": "2026-10-13T08:21:49+08:00",
    "routeStart": "2026-10-13T07:00:04+08:00",
    "waitMinutes": 10,
    "steps": [
      {
        "mode": "walk",
        "minutes": 9,
        "durationLabel": "8 min"
      },
      {
        "mode": "bus",
        "minutes": 8,
        "durationLabel": "8 min",
        "from": "Bef Choa Chu Kang Lk",
        "to": "Aft Bt Panjang Stn",
        "services": [
          {
            "kind": "Bus",
            "service": "979",
            "towards": "Bt Panjang Int",
            "name": "979"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 28,
        "durationLabel": "28 min",
        "from": "Bukit Panjang",
        "to": "Promenade",
        "services": [
          {
            "kind": "Subway",
            "service": "DT",
            "towards": "Expo",
            "name": "Downtown Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 5,
        "durationLabel": "5 min"
      },
      {
        "mode": "mrt",
        "minutes": 7,
        "durationLabel": "7 min",
        "from": "Promenade",
        "to": "Dakota",
        "services": [
          {
            "kind": "Subway",
            "service": "CC",
            "towards": "Prince Edward Road",
            "name": "Circle Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 13,
        "durationLabel": "13 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Chung%20Cheng%20High%20%28Main%29%2C%2050%20Goodman%20Road%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Chung Cheng High School (Main)",
    "resolvedAddress": "50 Goodman Rd, Singapore 439012",
    "alternativesCompared": 6
  },
  {
    "schoolId": 21,
    "totalMinutes": 46,
    "arrival": "2026-10-13T07:45:34+08:00",
    "routeStart": "2026-10-13T07:00:11+08:00",
    "waitMinutes": 12,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 12,
        "durationLabel": "11 min",
        "from": "Yew Tee",
        "to": "Jurong East",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Jurong East",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 1,
        "durationLabel": "1 min"
      },
      {
        "mode": "mrt",
        "minutes": 3,
        "durationLabel": "3 min",
        "from": "Jurong East",
        "to": "Clementi",
        "services": [
          {
            "kind": "Subway",
            "service": "EW",
            "towards": "Pasir Ris",
            "name": "East–West Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 1,
        "durationLabel": "1 min"
      },
      {
        "mode": "bus",
        "minutes": 5,
        "durationLabel": "5 min",
        "from": "Clementi Stn Exit B",
        "to": "Opp Nan Hua High Sch",
        "services": [
          {
            "kind": "Bus",
            "service": "189",
            "towards": "Bt Batok Int",
            "name": "189"
          }
        ]
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Nan%20Hua%20High%2C%2041%20Clementi%20Avenue%201%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Nan Hua High School",
    "resolvedAddress": "41 Clementi Ave 1, Singapore 129956",
    "alternativesCompared": 6
  },
  {
    "schoolId": 22,
    "totalMinutes": 79,
    "arrival": "2026-10-13T08:18:47+08:00",
    "routeStart": "2026-10-13T07:00:29+08:00",
    "waitMinutes": 16,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 35,
        "durationLabel": "35 min",
        "from": "Yew Tee",
        "to": "Bishan",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Marina South Pier",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 2,
        "durationLabel": "2 min"
      },
      {
        "mode": "mrt",
        "minutes": 4,
        "durationLabel": "4 min",
        "from": "Bishan",
        "to": "Serangoon",
        "services": [
          {
            "kind": "Subway",
            "service": "CC",
            "towards": "Dhoby Ghaut",
            "name": "Circle Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 3,
        "durationLabel": "3 min"
      },
      {
        "mode": "bus",
        "minutes": 5,
        "durationLabel": "5 min",
        "from": "S'goon Stn Exit C/Blk 201",
        "to": "Blk 126",
        "services": [
          {
            "kind": "Bus",
            "service": "53",
            "towards": "Bishan Int",
            "name": "53"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 3,
        "durationLabel": "3 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Paya%20Lebar%20Methodist%20Girls%E2%80%99%20%28Secondary%29%2C%20296%20Lorong%20Ah%20Soo%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Paya Lebar Methodist Girls' Secondary School",
    "resolvedAddress": "296 Lor Ah Soo, Singapore 536742",
    "alternativesCompared": 6
  },
  {
    "schoolId": 23,
    "totalMinutes": 54,
    "arrival": "2026-10-13T07:54:12+08:00",
    "routeStart": "2026-10-13T07:00:29+08:00",
    "waitMinutes": 0,
    "steps": [
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "11 min"
      },
      {
        "mode": "mrt",
        "minutes": 31,
        "durationLabel": "31 min",
        "from": "Yew Tee",
        "to": "Ang Mo Kio",
        "services": [
          {
            "kind": "Subway",
            "service": "NS",
            "towards": "Marina South Pier",
            "name": "North–South Line"
          }
        ]
      },
      {
        "mode": "walk",
        "minutes": 11,
        "durationLabel": "12 min"
      }
    ],
    "sourceUrl": "https://www.google.com/maps/dir/Yew%20Tee%20Primary%20School%2C%20Singapore/Anderson%2C%2010%20Ang%20Mo%20Kio%20Street%2053%2C%20Singapore/data=!4m6!4m5!2m3!6e0!7e1!8j1791846000!3e3?hl=en",
    "resolvedDestination": "Anderson Secondary School",
    "resolvedAddress": "10 Ang Mo Kio Street 53, Singapore 569206",
    "alternativesCompared": 6
  }
];

export function getCommute(schoolId) {
  return commutes.find(commute => commute.schoolId === schoolId);
}
