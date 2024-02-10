import { verifyJwt } from '#utils/api'

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        req.user = null
        return next()
    }

    const token = authorization.split(' ')[1]

    const { payload } = verifyJwt(token)

    if (payload) {
        req.user = payload
        return next()
    }

    return res.status(401).json('token expired')
}

export default authMiddleware