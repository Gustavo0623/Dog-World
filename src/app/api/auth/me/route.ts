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