import jwt from "jsonwebtoken"

const POST = async (req) => {
    const {email,password} = await req.json()
    const token = jwt.sign({
        userId: 1,
    },"secret",{ expiresIn: "1d"})
    console.log(req.cookies.get('token'))
    return Response.json({token},{status: 200})
}

export {POST}
