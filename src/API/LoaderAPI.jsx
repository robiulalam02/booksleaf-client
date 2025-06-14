export const myBooksPromise = email => {
    return fetch(`http://localhost:3000/books?user_email=${email}`)
        .then(res => res.json());
}