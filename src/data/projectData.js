const projectArr = [
    {
        name: "Interacto",
        techStack: "ReactJS · NodeJS · ExpressJS · Socket.io · Mongo DB",
        imageURL: "/images/Interacto_Banner.webp",
        githubLink: "https://github.com/RaunakGN2001/InteractO",
        description: ["InteractO is a Full Stack Chatting Application that uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.",
        "The features this application offers are Authenticaton, Real Time Chatting with Profile Page for every user, Search Users, One to One Chat, Group Chat with Admin privileges, Add or Remove users from group, Secure Data Transfer via JSON Web Token methodology, Encryption of Sensitive Information using BcryptJS"
        ]
    },  
    {
        name: "Illumination Control Using Computer Vision",
        techStack: "Computer Vision · Hand Gesture Recognition · OpenCV · Arduino",
        imageURL: "/images/Illumination_Banner.webp",
        githubLink: "https://github.com/RaunakGN2001/Illumination-Control-Using-Computer-Vision",
        description:   ["This project focuses on control of brightness of LED Lamp via Hand Gestures through Computer Vision technology thereby rejecting the age old method of switch based control and also demonstrates the potential of Hand Gesture Recognition Technology and its applications in real world scenarios.",
        "The Hand-Gesture Recognition Module has been implemented using Python programming language. It contains a handDetector Class that accepts RGB Images and searches for hands in the same. Also it has the added functionality of figuring out how many fingers are up and distance between any two fingers. OpenCV-Python and Mediapipe are two of the major Python libraries used in the project.",
        "The Arduino Nano (V3) is responsible for maintaining a Serial Communication between the Python program and the electrical appliance ( LEDs in this case )."
        ],
    },
    {
        name: "Createevity",
        techStack: "NextJS · Chakra UI · Strapi Headless CMS · SQLite",
        imageURL: "/images/Createevity_Banner.webp",
        githubLink: "https://github.com/RaunakGN2001/Createevity",
        description: ["Createevity is a full-stack dynamic blog site that has been developed using NextJs, Chakra-UI, and Strapi Headless CMS. The site's backend is built with Strapi, which uses SQLite as its database, and is deployed on Render's free tier.", "Createevity features a search bar that enables users to quickly find the desired blog. Pagination functionality has been provided to ensure that blog posts are displayed in a user-friendly way.", "The app's article list has been optimized for SEO and is initially fetched on the server-side. The list is paginated on the client-side for faster load times.", "Blogs on Createevity can be categorized based on the user's choice, allowing visitors to easily find content that interests them. The site's styling has been done using Chakra-UI, making it visually appealing and easy to navigate."]

    }
]


module.exports = projectArr;