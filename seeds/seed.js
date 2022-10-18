require('dotenv').config()

const mongoose =require('mongoose')

const Course = require('../models/course.js')


// mongoose.connect('mongodb://localhost:27017/Freecodecamp')
//     .then(data => console.log('Database connected'))
//     .catch(err => console.log('Database connection failed'))

mongoose.connect(process.env.ATLAS_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });

    titles = [
        '(New) Responsive Web Design Certification',
        'Legacy Responsive Web Design Certification',
        'JavaScript Algorithms and Data Structures Certification',
        'Front End Development Libraries Certification ',
        'Data Visualization Certification',
        'Back End Development and APIs Certification',
        'Quality Assurance Certification',
        
    ]

const seedDB = async () => {
    await Course.deleteMany({})

    titles.forEach(async (title) => {
        let course = new Course({
            title,
            duration: Math.floor(Math.random() * 60) + 1
        })
        await course.save()
    })

    console.log('Done seeding')
}

seedDB()