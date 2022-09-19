// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import {withIronSession} from "next-iron-session";


export default function withSession(handler) {
    return withIronSession(handler, {
        cookieName: "movie-api",
        password: process.env.REACT_APP_USER_TOKEN,
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    });
}
