import {generateResponse, verifyJwt} from '#utils/api'

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return generateResponse(res, {status: 401, errors: ['token is required'] })
    }

    const token = authorization.split(' ')[1]

    const { payload } = verifyJwt(token)

    if (payload) {
        req.user = payload
        return next()
    }

    return generateResponse(res, {status: 401, errors: ['token is expired'] })
}

export default authMiddleware
