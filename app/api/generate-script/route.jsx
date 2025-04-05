import { GenerateScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = `write a two different script ONLY for 30 seconds video on Topic:{topic} ,
Do not add scene description
Do not Add Anything in Braces, Just return the plain story in text
Give me response in JSON format and follow the schema 
-{
scripts:[
{
content:"
},
],
}
`

export async function POST(req) {
    const {topic} = await req.json();

    const PROMPT= SCRIPT_PROMPT.replace('{topic}',topic)

    const result = await GenerateScript.sendMessage(PROMPT)
    const resp = result?.response?.text();

    return NextResponse.json(JSON.parse(resp));
}