export const clients = [
    {
        _id: 1,
        firstName: "Mohamamd",
        lastName: "Hussain",
        phoneNumber: {
            primary: "555-123-5545",
        },
        address: {
            city: "Houston",
        },
    },
    {
        _id: 2,
        firstName: "Luis",
        lastName: "Arroyo",
        phoneNumber: {
            primary: "555-123-5505",
        },
        address: {
            city: "Austin",
        },
    },
    {
        _id: 3,
        firstName: "Chelsea",
        lastName: "N/A",
        phoneNumber: {
            primary: "832-123-5545",
        },
        address: {
            city: "Houston",
        },
    },
    {
        _id: 4,
        firstName: "Susan",
        lastName: "M",
        phoneNumber: {
            primary: "123-123-5545",
        },
        address: {
            city: "Dallas",
        },
    },
];

export const services = [
    {
        _id: 1,
        title: "Adult Education",
        active: true
    },
    {
        _id: 2,
        title: "Financial Literacy",
        active: true
    },
    {
        _id: 3,
        title: "After Class Sessions",
        active: false
    },
    {
        _id: 4,
        title: "Early Childhood Ed.",
        active: true
    },
    {
        _id: 5,
        title: "Wealth Managment",
        active: false
    },
    {
        _id: 6,
        title: "How to Code",
        active: true
    },
];

export const events = [
    {
        address: {
            line1: "3144 Golden Eagle dr",
            line2: "",
            city: "Houston",
            county: "cinco",
            zip: "43378",
        },
        _id: "f1e08980-a4df-11ed-8dad-e721944ea634",
        org: "communitygarden",
        name: "Communit Event at Cinco HTX",
        services: ["Adult Education"],
        date: "2023-02-09T00:00:00.000Z",
        description: "hi",
        attendees: ['a', 'f', 'c'],
        __v: 0,
    },
    {
        address: {
            line1: "",
            line2: "",
            city: "",
            county: "",
            zip: "",
        },
        _id: "d5e71ba0-a718-11ed-b270-41de63d6fc88",
        org: "communitygarden",
        name: "March Townhall",
        services: ["Youth Services Program"],
        date: "2023-02-10T00:00:00.000Z",
        description: "",
        attendees: ['a', 'f', 'ca', 'f', 'c'],
        __v: 0,
    },
    {
        address: {
            line1: "",
            line2: "",
            city: "",
            county: "",
            zip: "",
        },
        _id: "a1f887e0-bc92-11ed-b40c-a36b65670a26",
        org: "communitygarden",
        name: "Cook Off",
        services: ["Early Childhood Education", "Family Support"],
        date: "2023-03-07T00:00:00.000Z",
        description: "",
        attendees: ['a', 'f'],
        __v: 0,
    },

    {
        address: {
            line1: "de",
            line2: "de",
            city: "dede",
            county: "de",
            zip: "de",
        },
        _id: "6eabb0c0-c155-11ed-856b-fb630b6bcf69",
        org: "communitygarden",
        name: "UH Internationals",
        services: [
            "Early Childhood Education",
            "Youth Services Program",
            "Adult Education",
            "Family Support",
        ],
        date: "2023-03-08T00:00:00.000Z",
        description: "",
        attendees: ['a', 'f', 'c', 'a', 'f', 'c', 'a', 'f', 'c'],
        __v: 0,
    },
    {
        address: {
            line1: "4455 University Dr",
            line2: "",
            city: "Houston",
            county: "TX",
            zip: "77204",
        },
        _id: "59a653f0-bd41-11ed-8736-bb2bcd19c6de",
        org: "communitygarden",
        name: "FITP",
        services: [],
        date: "2023-03-09T00:00:00.000Z",
        description: "",
        attendees: ['a', 'f', 'c', 'a', 'f', 'c'],
        __v: 0,
    },
    {
        address: {
            line1: "",
            line2: "",
            city: "",
            county: "",
            zip: "",
        },
        _id: "225e1160-bdd4-11ed-8f76-f19c655beeeb",
        org: "communitygarden",
        name: "Catan Game Event",
        services: [],
        date: "2023-03-09T00:00:00.000Z",
        description: "",
        attendees: ['a', 'f', 'c', 'a'],
        __v: 0,
    },
    {
        address: {
            line1: "",
            line2: "",
            city: "",
            county: "",
            zip: "",
        },
        _id: "226c9050-bdd4-11ed-8f76-f19c655beeeb",
        org: "communitygarden",
        name: "Chess Competition",
        services: [],
        date: "2023-03-09T00:00:00.000Z",
        description: "",
        attendees: [],
        __v: 0,
    },
    {
        address: {
            line1: "",
            line2: "",
            city: "",
            county: "",
            zip: "",
        },
        _id: "227087f0-bdd4-11ed-8f76-f19c655beeeb",
        org: "communitygarden",
        name: "Learn to Code",
        services: [],
        date: "2023-03-09T00:00:00.000Z",
        description: "",
        attendees: ['a', 'f'],
        __v: 0,
    },
    {
        address: {
            line1: "1084 Margot Street",
            line2: "",
            city: "",
            county: "",
            zip: "",
        },
        _id: "0ea87d70-b90d-11ed-a60f-d59c2b3d6810",
        org: "communitygarden",
        name: "Technical Interviews",
        services: ["Family Support"],
        date: "2023-03-10T00:00:00.000Z",
        description: "",
        attendees: ['a', 'f', 'c'],
        __v: 0,
    },
    {
        address: {
            line1: "",
            line2: "",
            city: "",
            county: "",
            zip: "",
        },
        _id: "54ad2690-bb8d-11ed-903f-59a0d7ecc6a9",
        org: "communitygarden",
        name: "Solar Energy",
        services: [],
        date: "2023-03-10T00:00:00.000Z",
        description: "",
        attendees: ['a', 'f', 'c', 'a', 'f'],
        __v: 0,
    },
];
