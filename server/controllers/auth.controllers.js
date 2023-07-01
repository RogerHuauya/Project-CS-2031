import User from '../models/user.module.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'


export const register = async (req, res) => {
    const {username, password} = req.body
    try {
        
        const userFound = await User.findOne({username});
        if(userFound) return res.status(400).json(['The username already exists'])

        const pass_hash = await bcrypt.hash(password, 8)

        const newUser = new User({
            username,
            password : pass_hash,
        });

        const userSaved = await newUser.save();
        console.log(userSaved)
        const token = await createAccessToken({id: userSaved._id});

        res.cookie('token', token)
            res.json({
                id: userSaved._id,
                username: userSaved.username,
                createdAt: userSaved.createdAt,
                updatedAt: userSaved.updatedAt,
            });
    
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
  const {username, password} = req.body
  
  try {
      
    const userFound = await User.findOne({username})
    
    if (!userFound) return res.status(400).json({message: 'User not found'})

    const matchPassword = await bcrypt.compare(password, userFound.password) 
    if (!matchPassword) return res.status(400).json({message: 'Invalid Credentials'})

    const token = await createAccessToken({id: userFound._id});

    res.cookie('token', token)
    res.json({
        id: userFound._id,
        username: userFound.username,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });
  
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const logout = (req, res) => {
  res.cookie('token', " ", {
    expires: new Date(0),
  })
  return res.sendStatus(200)
}


export const profile = async(req, res) => {

    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({message: 'User not found'})


    return res.json({
      id: userFound._id,
      username: userFound.username,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    })

    // console.log(req.user)  
    // res.send('profile')
  }





