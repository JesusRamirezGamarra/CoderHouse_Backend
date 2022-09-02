//----------* VARIABLES *----------//
let isAdmin = true

//----------* MIDDLEWARE FUNCTIONS *----------//
export const login = (req, res) => {
    isAdmin = true
    res.status(200).json({description: 'User logged in'})
}

export const logout = (req, res) => {
    isAdmin = false
    res.status(200).json({description: 'User logged out'})
}

export const adminAuth = (req, res, next) => {
    if (isAdmin) {
    next()
    } else {
    res.status(403).json({error: -1,description: `Route '${req.originalUrl}' method '${req.method}' not authorized.`,})
    }
}


export default login;

