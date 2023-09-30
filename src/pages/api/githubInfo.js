import { NextResponse } from "next/server";


// handler function to fetch userData of my GitHub Profile 
export default async function handler(req, res) {
    try {
        const username = 'RaunakGN2001';
        const accessToken = process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN;

        const response = await fetch(`https://api.github.com/users/${username}`, {
            // headers: {
            //     'Authorization': `Bearer ${accessToken}`,
            // }
        });
        
        const userData = await response.json();

        // console.log(userData);
        res.status(200).json(userData);


    } catch(error) {
        res.status(500).json({ message: 'An error occurred' });
    }
}

