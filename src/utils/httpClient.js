const API = "https://api.themoviedb.org/3";


export function get(path) {

    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2IzYWEzNTBkNmNiNDM1MTdiYTA4NTc4NDA5YTJkYSIsInN1YiI6IjYyN2IwMGVjZWVjNGYzMDA5ZDI4ZGMyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_rp18LLQInHCLwTNOVgMvj7rOPxeQeQtObRN-GbTk4",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
        .then((result) => result.json());
}