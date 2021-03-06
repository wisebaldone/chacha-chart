import { Member } from './member';

// export const MEMBERS: Member[] = [
//     { id: 'uq', name: 'The University of Queensland', groups: [], grade: 'HD'},
//     { id: 'qut', name: 'Queensland University of Technology', groups: [], grade: 'D'}
// ];

export const MEMBERS: Member[] = [
    { 
        id: "anu", 
        name: "The Australian National university",
        groups: [
            "All"
        ],
        endpoints: [
            {
                "url": "https://anu.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)",
                            "+25 :: Offers TLSv1.3 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "NA"
    },
    { 
        id: "canberra",
        "name": "University of Canberra",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://canberra.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "C"
    },
    { 
        id: "csu",
        name: "Charles Sturt University",
        groups: [
            "All"
        ],
        endpoints: [
            {
                "url": "https://csu.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 90,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 55,
                        "grade": "P",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+5 :: Offers TLSv1, its better to not offer it",
                            "+10 :: Offers TLSv1.1, its better to not offer it",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "P"
    },
    {
        id: "mq",
        "name": "Macquarie University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "mq.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "P"
    },
    { id: "scu",
        "name": "Southern Cross University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://scu.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 55,
                        "grade": "P",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+5 :: Offers TLSv1, its better to not offer it",
                            "+10 :: Offers TLSv1.1, its better to not offer it",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "P"
    },
    { 
        id: "collaw",
        "name": "The College of Law",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://collaw.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "F"
    },
    { 
        id: "une",
        "name": "The University of New England",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://une.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 90,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "HD"
    },
    { 
        id: "newcastle",
        "name": "The University of Newcastle",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://newcastle.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "C"
    },
    { 
        id: "sydney",
        "name": "The University of Sydney",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://sydney.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 55,
                        "grade": "P",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+5 :: Offers TLSv1, its better to not offer it",
                            "+10 :: Offers TLSv1.1, its better to not offer it",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "HD"
    },
    {
        id: "uts",
        "name": "University of Technology, Sydney",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://uts.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+10 :: Have iodef entry for being alerted to issues.",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "F"
    },
    { 
        id: "uow",
        "name": "University of Wollongong",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://uow.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "HD"
    },
    { 
        id: "unsw",
        "name": "UNSW Sydney",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://unsw.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 90,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "P"
    },
    { 
        id: "utscollege",
        "name": "UTS College",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://utscollege.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "P"
    },
    { 
        id: "westernsydney",
        "name": "Western Sydney University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://westernsydney.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+10 :: Have iodef entry for being alerted to issues.",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "C"
    },
    { 
        id: "cdu",
        "name": "Charles Darwin University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://cdu.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 55,
                        "grade": "P",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+5 :: Offers TLSv1, its better to not offer it",
                            "+10 :: Offers TLSv1.1, its better to not offer it",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "F"
    },
    { 
        id: "bond",
        "name": "Bond University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://bond.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+10 :: Have iodef entry for being alerted to issues.",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)",
                            "+25 :: Offers TLSv1.3 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "F"
    },
    { 
        id: "cqu",
        "name": "Central Queensland University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://cqu.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "D"
    },
    { 
        id: "griffith",
        "name": "Griffith University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://griffith.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 90,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "D"
    },
    { 
        id: "jcu",
        "name": "James Cook University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://jcu.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 55,
                        "grade": "P",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+5 :: Offers TLSv1, its better to not offer it",
                            "+10 :: Offers TLSv1.1, its better to not offer it",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "C"
    },
    { 
        id: "qut",
        "name": "Queensland University of Technology",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://qut.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 90,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "D"
    },
    { 
        id: "uq",
        "name": "The University of Queensland",
        "groups": [
            "Go8",
            "QLD",
            "All"
        ],
        "endpoints": [
            {
                "url": "https://uq.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+10 :: Have iodef entry for being alerted to issues.",
                            "+25 :: Remaining score added",
                            "-10 :: Have more than 6 CAAs on the domain",
                            "-15 :: Have more than 6 CAAs and do not limit Wildcards"
                        ]
                    },
                    "TLS": {
                        "score": 55,
                        "grade": "P",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+5 :: Offers TLSv1, its better to not offer it",
                            "+10 :: Offers TLSv1.1, its better to not offer it",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            },
            {
                "url": "https://auth.uq.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+10 :: Have iodef entry for being alerted to issues.",
                            "+25 :: Remaining score added",
                            "-10 :: Have more than 6 CAAs on the domain",
                            "-15 :: Have more than 6 CAAs and do not limit Wildcards"
                        ]
                    },
                    "TLS": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)",
                            "+25 :: Offers TLSv1.3 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "D"
    },
    { 
        id: "usq",
        "name": "University of Southern Queensland",
        "groups": [
            "QLD",
            "All"
        ],
        "endpoints": [
            {
                "url": "https://usq.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)",
                            "+25 :: Offers TLSv1.3 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "HD"
    },
    { 
        id: "usc",
        "name": "University of the Sunshine Coast",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://usc.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+10 :: Have iodef entry for being alerted to issues.",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 55,
                        "grade": "P",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+5 :: Offers TLSv1, its better to not offer it",
                            "+10 :: Offers TLSv1.1, its better to not offer it",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "F"
    },
    { 
        id: "deakin",
        "name": "Deakin University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://deakin.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "65 :: Having a CAA record is a parsing grade",
                            "+10 :: Have iodef entry for being alerted to issues.",
                            "+25 :: Remaining score added"
                        ]
                    },
                    "TLS": {
                        "score": 100,
                        "grade": "HD",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)",
                            "+25 :: Offers TLSv1.3 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "HD"
    },
    { 
        id: "federation",
        "name": "Federation University Australia",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://federation.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 75,
                        "grade": "D",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+15 :: Not offering TLS1",
                            "+20 :: Not offering TLSv1.1",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "NA"
    },
    { 
        id: "latrobe",
        "name": "La Trobe University",
        "groups": [
            "All"
        ],
        "endpoints": [
            {
                "url": "https://latrobe.edu.au",
                "ratings": {
                    "CAA": {
                        "score": 0,
                        "grade": "F",
                        "log": [
                            "0 :: No CAA records found"
                        ]
                    },
                    "TLS": {
                        "score": 55,
                        "grade": "P",
                        "log": [
                            "0 :: Start at 0",
                            "+15 :: Not offering SSLv2",
                            "+15 :: Not offering SSLv3",
                            "+5 :: Offers TLSv1, its better to not offer it",
                            "+10 :: Offers TLSv1.1, its better to not offer it",
                            "+10 :: Offers TLSv1.2 =)"
                        ]
                    }
                }
            }
        ],
        "grading": "HD"
    }
];