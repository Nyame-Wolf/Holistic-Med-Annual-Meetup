const openToggle = document.getElementById('open-toggle');
const logo = document.querySelector('.visible');
const navigation = document.querySelector('.nav-navbar');

openToggle.addEventListener('click', () => {
    navigation.classList.toggle('open');
    openToggle.style.display = 'none';
    logo.style.display = 'none';
});
navigation.addEventListener('click', () => {
    openToggle.style.display = 'block';
    logo.style.display = 'block';
    navigation.classList.toggle('open');
});

const speakers = [
    {
        displayPic: {
            src: 'https://randomuser.me/api/portraits/men/83.jpg',
            alt: 'Damarco passport photo',
        },
        name: 'Damarco Hunter',
        designation: 'Chief attending Utopia General',
        description: ` Graduate of Johns Hopkins University School of Medicine neurosurgery program, and is involved in clinical research projects.
        Assistant Professor Wayne State Department of neurosurgery. He has extensive experience in nerve repair as well as diagnostic medicine.`,
    },
    {
        displayPic: {
            src: 'https://randomuser.me/api/portraits/women/90.jpg',
            alt: 'Duan Ju passport photo'
        },
        name: 'Duan Ju',
        designation: 'Resident Acupuncturist Wuhan National Hospital',
        description: `Was a resident for three years at Chicago Med before deciding to go back
         to China and practice acupuncture. She is licenced by Chinese medical board as well as 
         American FDA. She has an MBA in diagnostic medicine and is well versed in alternative treatment regimen.`
    },
    {
        displayPic: {
            src: 'https://randomuser.me/api/portraits/men/34.jpg',
            alt: 'Michel Marques passport photo'
        },
        name: 'Michel Marques Passos',
        designation: 'Premier Concierge Doctor Hamptons USA ',
        description: `Michel is a doctor without a hospital. He goes to the patients offering responsive and specialised care to his patients.
        He graduated from Guam university and did his residency at International Boston Hospital. He has worked for doctors without borders for more than 10 years.`,

    },
    {
        displayPic: {
            src: 'https://randomuser.me/api/portraits/men/11.jpg',
            alt: 'Ellis passport photo'
        },
        name: 'Aaron Ellis',
        designation: 'Chair Sport performance department Hansard University Washington D.C ',
        description: `Has headed several sport departments for american foodball teams such as the Utah Rakers as well as Dodger Clarets. Was mostly recently head of sport science at Arsenal football club before taking up a teaching position.
        has Worked with athletes including marathon world record holder Eliud Kipchoge`,
    },
    {
        displayPic: {
            src: 'https://randomuser.me/api/portraits/men/78.jpg',
            alt: 'Ernest Moss'
        },
        name: 'Ernest Moss',
        designation: 'Best Selling Author, psychedelic science advocate, turned mindfulness and spiritual teacher',
        description: `Featured among the ten best mindfulness teachers of this century, he has chaged the lives of billions of people. 
        He has authored several mindfulness books some which have been best selling. 
        Founder mindfulness center Kenya hub where he teaches people from all over the world.`,
    },
    {
        displayPic: {
            src: 'https://randomuser.me/api/portraits/women/3.jpg',
            alt: 'Abigail Weaver'
        },
        name: 'Abigail Weaver',
        designation: 'Chief psychiatric department MINT University',
        description: `Has chaired psychiatric departments at Havard, MIT and Michigan university. Has her own private practice in Michigan `,
    },
]
function createImage(image) {
    const img = document.createElement('img');
    img.textContent = image;
    return img;
}
function createH4(h) {
    const h4 = document.createElement('h4');
    h4.textContent = h;
    return h4;
}
function createSmall(sm) {
    const small = document.createElement('small');
    small.textContent = sm;
    return small;
}
function createp(para) {
    const p = document.createElement('p');
    p.textContent = para;
    return p;
}

// function createButton(cbutton) {
//     const button = document.createElement('button');
//     button.classList.add('button-orange', 'is-link', 'grid-buttons');
//     button.textContent = cbutton;
//     return button;
// }

function createArticle(articleContent) {
    const article = document.createElement('article');
    article.classList.add('speaker');


    const speakerPic = document.createElement('div');
    speakerPic.classList.add('speaker-pic');

    const profilePic = createImage(articleContent.displayPic);
    profilePic.src = articleContent.displayPic.src
    profilePic.alt = articleContent.displayPic.alt
    speakerPic.appendChild(profilePic);

    const speakerContent = document.createElement('div');
    speakerContent.classList.add('speaker-content');

    const h4Tag = createH4(articleContent.name);
    const smallTag = createSmall(articleContent.designation)
    const para = createp(articleContent.description);


    speakerContent.appendChild(h4Tag);
    speakerContent.appendChild(smallTag);
    speakerContent.appendChild(para);

    article.appendChild(speakerPic)
    article.appendChild(speakerContent);

    return article;
}

const grid = document.querySelector('.speakers');

function createArticles(content) {
    content.forEach((article) => {
        const art = createArticle(article);
        grid.appendChild(art);
    });
}

createArticles(speakers);