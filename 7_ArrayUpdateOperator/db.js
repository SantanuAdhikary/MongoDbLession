db.students.insertMany([
    {
        
        name: 'manu',
        hobbies: ['singing', 'dance', 'cricket'],
        bio: 'web developer',
        gender: 'male',
        training_scores:[85,80,80],
        experience: [
            { company: 'qspiders', duration: 1 },
            { company: 'infosys', duration: 1 }
        ]
    },
    
    {
        
        name: 'shashi',
        hobbies: ['coding', 'cricket'],
        bio: 'web developer',
        gender: 'male',
        training_scores:[88,90,92],
        experience: [
            { company: 'qspiders', duration: 9 },
            { company: 'infosys', duration: 2 },
            { company: 'myndset', duration: 1 }
        ]
    },
    {
        
        name: 'girish',
        hobbies: ['football', 'cricket'],
        bio: 'manual testing',
        gender: 'male',
        training_scores:[85,100,90],
        experience: [
            { company: 'qspiders', duration: 17 },
            { company: 'sun micro system', duration: 2 }
        ]
    },
    {
        
        name: 'maanya',
        hobbies: ['singing', 'cricket'],
        bio: 'java developer',
        gender: 'female',
        training_scores:[85,85,80],
        experience: [
            { company: 'qspiders', duration: 10 }
        ]
    }
]);
