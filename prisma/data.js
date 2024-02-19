const techsData = [
    { name: 'Javascript', image_path: 'js.svg', type: 'language', level: 3 },
    { name: 'Laravel', image_path: 'laravel.png', type: 'framework', level: 3 },
    { name: 'Django', image_path: 'django.png', type: 'framework', level: 2 },
    { name: 'Next.js', image_path: 'nextjs.svg', type: 'framework', level: 1 },
    { name: 'Ranorex Studio', image_path: 'ranorex.svg', type: 'utils', level: 4 },
    { name: 'React', image_path: 'react.png', type: 'framework', level: 2 },
    { name: 'Vue', image_path: 'vue.png', type: 'framework', level: 2 },
    { name: 'PHP', image_path: 'php.png', type: 'language', level: 3 },
    { name: 'HTML', image_path: 'html.png', type: 'language', level: 4 },
    { name: 'CSS', image_path: 'css.png', type: 'language', level: 3 },
    { name: 'Python', image_path: 'python.png', type: 'language', level: 2 },
    { name: 'Selenium', image_path: 'selenium.png', type: 'utils', level: 1 },
    { name: 'C#', image_path: 'csharp.png', type: 'language', level: 2 },
    { name: 'C++', image_path: 'c++.png', type: 'language', level: 1 },
    { name: 'C', image_path: 'c.png', type: 'language', level: 2 },
    { name: 'Docker', image_path: 'docker.svg', type: 'utils', level: 2 },
    { name: 'Git', image_path: 'git.png', type: 'utils', level: 3 },
    { name: 'Java', image_path: 'java.png', type: 'language', level: 2 },
    { name: 'Linux', image_path: 'linux.png', type: 'utils', level: 3 },
    { name: '.Net', image_path: 'net.png', type: 'framework', level: 1 },
    { name: 'Node', image_path: 'node.png', type: 'framework', level: 2 },
    { name: 'Ruby On Rails', image_path: 'rails.png', type: 'framework', level: 1 },
    { name: 'React Native', image_path: 'react-native.png', type: 'framework', level: 2 },
    { name: 'Springboot', image_path: 'springboot.svg', type: 'framework', level: 1 },
    { name: 'Symfony', image_path: 'symfony.png', type: 'framework', level: 1 },
];

const projectsData = [
    {name: 'Pictyours On Web', description: 'PictYours is a web-based image sharing application designed to allow users to upload, share, and interact with photos. \n' +
            'It offers a similar experience to Instagram.', short_description: 'Social network like Instagram', demo_path: '', github_path: 'https://github.com/ThomasWILHEM/PictYours-On-Web', slug: ''},
    {name: 'Recipe Website Backend', description: 'This is the backend part of the recipe website. This website allows users to share their recipes with others. Theses recipes can then be seen by everyone.', short_description: 'Recipe website', demo_path: '', github_path: '', slug: ''},
    {name: 'Recipe Website Frontend', description: 'This is the frontend part of the recipe website. This website allows users to share their recipes with others. Theses recipes can then be seen by everyone.', short_description: 'Recipe website', demo_path: '', github_path: '', slug: ''},
];

const experiencesData = [
    {name: 'Web Professional Licence', dates: 'Sept 2022 - Sept 2023', institution: 'IUT Informatique', city: 'Bordeaux, France', infos: '<li>Licence “DAWIN” : Développement en applications web et innovation numérique</li><li>Workand-Study program</li>', type: 'study'
        , techs: [1, 2, 6, 7, 8, 9, 10, 13, 16, 18, 20, 21, 22, 23, 24]},
    {name: 'DUT Informatique', dates: 'Sept 2020 - Sept 2022', institution: 'IUT Informatique', city: 'Clermont-Ferrand, France', infos: '<li>4th semester at the Université du Québec à Chicoutimi (UQAC)</li>', type: 'study'
        , techs: [1, 8, 9, 10, 13, 14, 15, 17, 18, 19, 20]},
    {name: 'Web Developer', dates: 'Sept 2022 - Sept 2023', institution: 'Planning-Services.fr', city: 'Saint Jean d’Illac, France', infos: '<li>Fullstack developement with HTML/CSS, Javascript, PHP and Smarty</li><li>Automated functional tests developpement with Python and Selenium</li>', type: 'work'
        , techs: [1, 8, 9, 10, 11, 12]},
    {name: 'Tests Developer', dates: 'May 2022 - July 2022', institution: 'Quantel Medical', city: 'Clermont-Ferrand, France', infos: '<li>Internship at the end of the DUT Informatique</li><li>Automated functional tests development on a firmware with Ranorex Studio</li>', type: 'work'
        , techs: [5, 13]},
];

module.exports = { techsData, projectsData, experiencesData };
