// Route that authenticates the user based on the server jwt secret 
// To be used with the getUser() in [user]/layout.tsx.
// Was able to successfully select the cookie but did not allow me to pass it to server component due to security issues. (not recommended)
// Will change the code logic for login to not authenticate with this page after this commit DATE: Dec 21 7:14PM Philipppine Standard Time

import { GetServerSidePropsContext } from "next";
import { NextResponse } from "next/server";

export async function GET({req}: GetServerSidePropsContext) {

    const token = req.headers.cookie || '';

    if(!token) {
        return NextResponse.json(
            {
                message:"Unauthorized",
            },{
                status:401,
            }
        );
    };

    // TODO: Verify Token Logic with validate depending on jwt from server that i dont have access to...
    const response = {
        user: "Valid User"
    }
    return new Response(JSON.stringify(response), {
        status: 200,
    })


}