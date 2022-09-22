import { NextApiRequest, NextApiResponse } from "next"
import Model from "../../mongodb/models"
import { Model as MODEL } from 'mongoose'

const users = async (req: NextApiRequest, res: NextApiResponse) => {

    const user: MODEL<any> = await Model()

    switch (req.method) {

        case ('GET'): {

            try {
                const allUsers = await user.find()

                res.status(200).json(allUsers)
            }
            catch (err) {
                res.status(400).send("Error :" + err)
            }
        }
            break
        case ('POST'): {

            const { name, email } = req.body

            try {
                const USER = await user.find({ email })

                if (USER.length === 0) {
                    const createNewUser = await user.create({
                        name,
                        email
                    })

                    res.status(201).json(createNewUser)
                }
                else {

                    res.status(200).json(USER[0])
                }

            } catch (err) {
                res.status(400).send("Error :" + err)
            }
        }
            break
        case ("PUT"): {
            const { id } = req.query

            const { records } = req.body

            res.send(id)

            try {
                const updateUser = await user.findOneAndUpdate({ _id: id }, { ...records }, {
                    new: true,
                    upsert: true
                })
                res.status(201).json(updateUser)
            }
            catch (err) {
                res.status(400).send("Error :" + err)

            }
        }
            break
        default: {
            res.status(200).send("Server is Running!!")
        }
    }


}


export default users