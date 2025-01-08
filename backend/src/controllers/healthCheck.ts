import { Request, Response } from "express"



const sayHello = (req: Request, res: Response) => {
    res.json({messages: "Hello"})
}


export default sayHello