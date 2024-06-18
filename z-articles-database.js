const articles = [
    {
        id: '1',
        title: 'Reality Labs, le rêve oublié de Meta',
        themes:['metaverse', 'big tech'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'reality-labs.png',
        introduction : 'Introduction de l\'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: '',
        content: [
            'Premier paragraphe de l\'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },
    {
        id: '2',
        title: 'Gollum et Triceratops, le monde vu par l\'IA',
        themes:['ia', ' intelligence artificielle'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'OIP.jpg',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: '',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },
    {
        id: '3',
        title: 'IA : Enjeux et acteurs',
        themes:['ia', 'intelligence artificielle', 'french tech'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'IA.jpg',
        introduction: 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: '',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },
    {
        id: '4',
        title: 'La French Tech face a l\'IA',
        themes:['ia', 'intelligence artificielle', 'french tech'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'french-tech.jpg',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: '',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },
    {
        id: '5',
        title: 'Mistral AI, une reussite de la French Tech?',
        themes:['ia','intelligence artificielle', 'french tech'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'mistral.jpg',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: '',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },

    {
        id: '6',
        title: 'L\'Intelligence Artificielle Révolutionne la French Tech : Dernières Innovations et Perspectives?',
        themes:['ia', 'intelligence artificielle', 'french tech'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'ia-s.jpg',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: '',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },

    {
        id: '7',
        title: 'Et si un milliardaire voulait creer une bombe nucleaire',
        themes:[],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'elon-musk.jpg',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: '',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },

    {
        id: '8',
        title: 'La Chine, leader mondial des nouvelles technologies',
        themes:['chine'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'R.png',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: '',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },

    {
        id: '9',
        title: 'GAFAM et immortalite',
        themes:['big tech', 'biotechnologies'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'GAFAM-2.jpeg',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: '',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },

    {
        id: '10',
        title: 'Puces eletroniques',
        themes:['ia','intelligence artificielle', 'electronique'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'R.jpg',
        description: '',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },
    {
        id: '11',
        title: 'IA et Chomage',
        themes:['intelligence artificielle', 'ia'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'ia-emploi.jpg',
        description: '',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },
    {
        id: '12',
        title: 'EdTech',
        themes:['edtech'],
        autresArticles: ['2', '6', '8'],
        date: '2024-06-14',
        image: 'edtech.png',
        description: '',
        introduction : 'Introduction de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            'Premier paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Deuxième paragraphe de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusion de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    },
];
