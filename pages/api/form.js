import formData from "../../components/formdata"

export default function FormData(req, res) {

    if(req.method==='POST'){
        const reqValues=req?.body
        
        const newData={
            id:Date.now(),
            name:reqValues.name,
            mail:reqValues.mail,
            sub:reqValues.sub,
            message:reqValues.message

        }
        formData.push(newData)
        console.log(formData.length)
        console.log("Req values",reqValues.name)
        console.log(formData)
        return res.status(200).json(newData)
    }
   

    }

  