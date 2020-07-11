const movies = [
  {
    id: 1,
    title: "Back to The Future",
    date: " 3 July 1985",
    runtime: "1h 56min",
    genre: " Adventure, Comedy, Sci-Fi",
    plot:
      "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,643,1000_AL_.jpg",
    trailer: "https://www.youtube.com/embed/qvsgGtivCgs",
    type: "Adventure",
  },
  {
    id: 2,
    title: "Inception",
    date: " 16 July 2010",
    runtime: "2h 28min ",
    genre: "Action, Adventure, Sci-Fi",
    plot:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    type: "Action",
  },
  {
    id: 3,
    title: "The Lord of the Rings: The Fellowship of the Ring ",
    date: " 19 December 2001",
    runtime: "2h 58min",
    genre: " Action, Adventure, Drama ",
    plot:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",

    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg",
    trailer: "https://www.youtube.com/embed/V75dMMIW2B4",
    type: "Adventure",
  },
  {
    id: 4,
    title: "The Butterfly's Dream",
    date: "14 March 2013",
    runtime: "2h 18min",
    genre: " Biography, Drama, History",
    plot:
      "In a small Turkish town, two young tuberculous poets try to survive while publishing their poems. As they both fall in love, their life would never be the same.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI2ZTc4NzQtNmI0OS00ODI0LTgyMmYtZWY1MjJiMzc2NzkzXkEyXkFqcGdeQXVyNjIxMDkyODY@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/AtHirtYl0v0",
    type: "Drama",
  },

  {
    id: 5,
    title: "Forrest Gump",
    date: " 6 July 1994 ",
    runtime: " 2h 22min ",
    genre: " Drama, Romance ",
    plot:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart..",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/bLvqoHBptjg",
    type: "Drama",
  },
  {
    id: 6,
    title: "The Godfather",
    date: " 24 March 1972",
    runtime: "2h 55min",
    genre: " Crime, Drama",
    plot:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
    trailer: "https://www.youtube.com/embed/sY1S34973zA",
    type: "Drama",
  },
  {
    id: 7,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    date: " 15 July 2011",
    runtime: " 2h 10min",
    genre: "Adventure, Drama, Fantasy ",
    plot:
      "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX667_CR0,0,667,999_AL_.jpg",
    trailer: "https://www.youtube.com/embed/5NYt1qirBWg",
    type: "Adventure",
  },
  // {
  //   id: ,
  //   title: "Harry Potter and the Deathly Hallows: Part 2",
  //   date: " 15 July 2011",
  //   runtime: " 2h 10min",
  //   genre: "Adventure, Drama, Fantasy ",
  //   plot:
  //     "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
  //   image:
  //      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  //   trailer: "https://www.youtube.com/embed/5NYt1qirBWg",
  //   type: "Adventure",
  //   ,
  // },
];

export default movies;
