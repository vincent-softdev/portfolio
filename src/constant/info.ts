import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vinh (Vincent)",
    lastName: "Ly",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the South Australia'
        },
        {
            emoji: "💼",
            text: "Seeking for job"
        },
        {
            emoji: "📧",
            text: "vinh.ly.softdev@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/vincent-softdev",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/the-vinh-ly/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Vincent. I'm a Full Stack Developer. I studied Software Engineer at Swinbourne University of Technology and Torrens University Australia, I enjoy long walks on the beach with my dogs, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'scss', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'typescript', 'next js', 'docker'],
            exposedTo: ['nodejs', 'python', 'FastAPI', 'RESTful API']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Facebook Clone",
            live: "https://facebook-clone-hosting-55491.firebaseapp.com/",
            source: "https://github.com/vincent-softdev/facebook-clone-hosting.git",
            image: mock2
        },
        {
            title: "Smart Novel",
            live: "https://smartnovel-e0696.firebaseapp.com/",
            source: "https://github.com/vincent-softdev/smart_novel",
            image: mock1
        }
    ]
}