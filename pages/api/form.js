export default function FormData(req, res) {

    if(req.method==='POST'){
        const reqValues=req?.body
        console.log("Req values",reqValues)
        return res.json({out:'Success response'})
    }
    return res.status(500).json({
        out:'This needs to be a post request'

    })

  }