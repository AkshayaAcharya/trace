let universities = [
    {
        id: 1,
        name: 'VTU',
        title:"Visweswarayya Technological University",
        streams: 
        [
            {   id: 1, 
                name: "Electrical & Electronics Engineering",
                labs: [
                    {name:"Analog Signals Network and Measurement Lab", code:"18EE32", institute:"Kharagpur", link: "http://vlabs.iitkgp.ernet.in/asnm/"},
                    {name:"Hybrid Electronics Lab", code:"18EE35,18EEL38", institute:"COE PUNE", link: "http://he-coep.vlabs.ac.in/"},
                    {name:"Digital Signal Processing", code:"18EE63, 18EEL67", institute:"IIT Kharagpur", link: "http://vlabs.iitkgp.ernet.in/dsp/"},
                    {name:"Digital Electronic Circuits", code:"18EE35, 18EEL387", institute:"IIT Kharagpur", link: "http://vlabs.iitkgp.ernet.in/dec/"},
                    {name:"Electrical Machines(IITR) Lab", code:"18EEL37, 18EEL47", institute:"IIT Roorkee", link: "http://103.37.201.114/"},
                    {name:"Electrical Machines (COEP) Lab", code:"18EEL37, 18EEL47", institute:"COE Pune", link: "http://em-coep.vlabs.ac.in/"},
                    {name:"Electrical Machines (IITG) Lab", code:"18EEL37, 18EEL47", institute:"IIT Guwahati", link: "http://vem-iitg.vlabs.ac.in/"},
                    {name:"Signals and System Lab", code:"18EE54", institute:"IIT Guwahati", link: "http://ssl-iitg.vlabs.ac.in/"},
                    {name:"Industrial Electric Drives Lab", code:"18EE741", institute:"NITK Surathkal", link: "http://ied-nitk.vlabs.ac.in/"},
                    {name:"Virtual Electric Circuits Lab", code:"18EE32", institute:"Amrita Vishwa Vidyapeetham", link: "http://amrita.vlab.co.in/?sub=1&brch=75"},
                    {name:"Computer Architecture & Organization Lab", code:"18EEL38", institute:"IIT Kharagpur", link: "http://vlabs.iitkgp.ernet.in/coa/"},
                    {name:"Virtual High Voltage Laboratory", code:"18EE56", institute:"IIT Kharagpur", link: "http://vlabs.iitkgp.ernet.in/vhv/"},
                ]
            },
            {   id: 2, 
                name: "Mechanical Engineering",
                labs: [
                    {name:"Mechanics of Materials/ Strength of materials", code:"18ME32, 18MEL37A", institute:"NITK Surathkal", link: "http://sm-nitk.vlabs.ac.in/#"},
                    {name:"Metal Forming Lab", code:"18ME35A, 18MEL38B/48B", institute:"Dayalbagh", link: "http://msvs-dei.vlabs.ac.in/ "},
                    {name:"Workshop and machine shop practice/General purpose lab for production shop simulation ", code:"18MEL38A/B", institute:"IIT Kanpur", link: "http://gssl.iitk.ac.in/pssl/"},
                    {name:"Kinematics of Machines/ Mechanics of Machine ", code:"18ME44", institute:"NITK Surathkal", link: "http://mm-nitk.vlabs.ac.in/ "},
                    {name:"Metallurgy and Materials Engineering/Material response to micro-structural, mechanical, thermal, and biological stimuli", code:"18ME34, 18ME645, 18MEL47A", institute:"IIT Kanpur", link: "http://mrmsmtbs-iitk.vlabs.ac.in/home%20page.html"},
                    {name:"Fluid Mechanics", code:"18ME44, 18MEL57", institute:"NITK Surathkal", link: "http://fm-nitk.vlabs.ac.in/#"},
                    {name:"Applied Thermodynamics/RT Virtual lab on Automotive systems", code:"18ME42, 18MEL58", institute:"IIT Kharagpur", link: "http://vlabs.iitkgp.ernet.in/rtvlas/"},
                    {name:"Turbo Machines / Fluid Machinery", code:"18ME54, 18MEL57", institute:"NITK Surathkal", link: "http://fmc-nitk.vlabs.ac.in/"},
                    {name:"Heat and Mass transfer", code:"18ME63", institute:"Amrita University", link: "http://htv-au.vlabs.ac.in/"},
                    {name:"Dynamics of machines/Machine Dynamics and Mechanical Vibrations Lab", code:"18ME53, 18ME644", institute:"NITK Surathkal", link: "http://mdmv-nitk.vlabs.ac.in/"},
                    {name:"Computer aided design and manufacturing /Mechanisms and robotics lab", code:"18ME72, 18MEL76, 18ME732", institute:"IIT Kharagpur", link: "http://vlabs.iitkgp.ernet.in/mr/"},
                    
                ]
            },
            {   id: 3, 
                name: "Electronics & Communication Engineering",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 4, 
                name: "Computer Science & Engineering",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 5, 
                name: "Civil Engineering",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
        ]
        
    },
    {
        id: 2,
        name: 'NITGujarat',
        title:"Visweswarayya Technological University",
        streams: 
        [
            {   id: 1, 
                name: "CS",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 2, 
                name: "ME",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 3, 
                name: "CV",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 4, 
                name: "EC",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
        ]

    },
    {
        id: 3,
        name: 'NITRoorkela',
        title:"Visweswarayya Technological University",
        streams: 
        [
            {   id: 1, 
                name: "CS",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 2, 
                name: "ME",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 3, 
                name: "CV",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 4, 
                name: "EC",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
        ]
    },
    {
        id: 4,
        name: 'NITPunjab',
        title:"Visweswarayya Technological University",
        streams: 
        [
            {   id: 1, 
                name: "CS",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 2, 
                name: "ME",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 3, 
                name: "CV",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 4, 
                name: "EC",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
        ]
               
    },
    {
        id: 5,
        name: 'NITAssam',
        title:"Visweswarayya Technological University",
        streams: 
        [
            {   id: 1, 
                name: "CS",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 2, 
                name: "ME",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 3, 
                name: "CV",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 4, 
                name: "EC",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
        ]
    },
    {
        id: 6,
        name: 'NITAndhra',
        title:"Visweswarayya Technological University",
        streams: 
        [
            {   id: 1, 
                name: "CS",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 2, 
                name: "ME",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 3, 
                name: "CV",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 4, 
                name: "EC",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
        ]
    },
    {
        id: 7,
        name: 'NITSikkim',
        title:"Visweswarayya Technological University",
        streams: 
        [
            {   id: 1, 
                name: "CS",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 2, 
                name: "ME",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 3, 
                name: "CV",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 4, 
                name: "EC",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
        ]
    },
    {
        id: 8,
        name: 'NITOdissa',
        title:"Visweswarayya Technological University",
        streams: 
        [
            {   id: 1, 
                name: "CS",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 2, 
                name: "ME",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 3, 
                name: "CV",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 4, 
                name: "EC",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
        ]
    },
    {
        id: 9,
        name: 'NITSurat',
        title:"Visweswarayya Technological University",
        streams: 
        [
            {   id: 1, 
                name: "CS",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 2, 
                name: "ME",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 3, 
                name: "CV",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
            {   id: 4, 
                name: "EC",
                labs: [
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"},
                    {name:"Computer Graphics", link: "https://sm-vlabs.nitk.ac.in"}
                ]
            },
        ]
    },

]

