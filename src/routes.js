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
    },
    {
        method: "PUT",
        path: buildRoute("/todos/:id"),
        handler: (req, res)=>{
            const {id} = req.params
            const index = todos.findIndex((row) => row.id === id)
            
            if(index>-1){
                todos[index] = {id, ...req.body}
            }
            return res.writeHead(204).end()
        },
    },
    {
        method: "DELETE",
        path: "/todos/:id",
        handler: (req, res)=>{
            const {id} = req.params

            const index = todos.findIndex(row => row.id === id)
            
            if(id > -1){
                todos.slice(index, 1)
            }
            
            return res.writeHead(204).end()
        }
    }


]