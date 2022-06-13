export default {
    Query: {
        getAnime: () => [
            {
                title: 'One Peace',
                genre: {
                    title: 'Фентези'
                }
            }
        ],
        getAnimeGenres: () => [
            {
                title: 'Фентези'
            }
        ]
    },
}