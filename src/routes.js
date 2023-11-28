import crypto from 'crypto'

const todos = []

export const routes = [
    {
        method: "GET",
        path: "/todos",
        handler: (req, res) =>{
            return res
            .setHeader("Content-type", "application/json")
            .end(JSON.stringify(todos))
        }
    },
    {
        method: "POST",
        path: "/todos",
        handler: (req, res)=>{
            todos.push({
                id:crypto.randomUUID(),
                ...req.body
            })
        }
    }


]