import jwt from 'jsonwebtoken'
import env from "dotenv";

env.config({ path: `./.env.${process.env.NODE_ENV}` })

const ACCESS_PRIVATE_KEY=`-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAit50a5USfWj7i3NQML9li/VXmFdf57Coa4lR8/kAtcqfagzp
vnVez3rEqaddYrazlzIWS0odAZW03LsUYduaNZ8wyosBy+SW5GtUUYIoVcSjBjHf
rqjEYjRBybkBZHRWvUBxnlniSpMDEkB9TlCmCGyAtNR1qJWfZHXnAhRbAplEx9MH
fHbFKjoljkRLAgZDENnGRFHjwCOGoL/mfiMsjmSv8cTJmYyuAfRH2ttqyW/556Ds
UBWEib8u7xhdf8Rg0bOEjMb6M2509F4oWvxCSBhDw8JgtGFuYYwyHhFdfiqIapqT
dtUl/Ofsbe/l3sDfWWJWMak59Hr1zMdX1/9vwQIDAQABAoIBAFrDPnA6RJV3EkF4
osbZsbMiLZhCM0qpKcrvO4MsEgy/XCXiPrve1pLg+LyxyNWF+Ccv82ZOEFtCz60d
ERtMfqPhYfBfnlL3GrA8fiWv3lEAblTUMBBl+cT9xqnjo0dWyoJzJk+LC94V7AH3
6G5RQ9Npp02JN0VyVXVBojS3vSwaqT5lT/o5ePwLf6IvRgzhqKXQcUQQABe/nxdN
LUWBuycEggzHPuo0DXEmqUm2XniQ0x9lMlaOtrapP4sU7JZa0Py1t0Te4Hl3ki2N
W7sk3jaS1iLRK3mkr4XwzjMtqSZaitTvbbG+526NfxqFHF09PvQOOw0HpIcQtJ/w
OFTmwAECgYEA5zcxNtQiwMc9JJjqa83ed+zy+3ilc3SpN++cqTqTfrwU78LeIRFK
YM20rFk25RYNXovIEgJJwyFqAiJEdlCfTsCnILEUKyqj6XcXYkGVWZIIT3jlAsPj
3RgonkYvmxQup7KT7cpXx7fDihvDyjv4xX2wK8PVLfe9yR9mUyIAxEECgYEAmcEr
ntDXMgbNjUELdUAWHh84qiL7y2QdZxg+YaUnCZTHZSP65ZSEYWvs7NI+nu2c8KGL
OASQl4cNbl96UP9cG08nEc73r8A/V0iKxHh5OZz9h7+LFHVuoZAmROSc3yMjvACC
FVIk+tXXT/kMbUkZhkb0ySu/T5Dj+eiT5ra9y4ECgYEAoyydS898U0aIzQop7jjU
txf/Bx/Gy+tZ/QLaMcgIDZnYwLhqoTWdoyGpTzSK/DOK7d2CLct1mQM82BKs9D7D
nwVxLS4rSKeIFBya4Rndt9/Kg6OTI1dxuTfyeniX4j7lCi6KHXf+aRE0K4SasV+P
mniwWsKS8ST0yDqjsSm/FsECgYAJptioJY/8sfShU132xEkfJvKVq5CG2ggGer0f
wBBNR6ukq7eKReJxgybiTuhjbaMWb+2fXJn/CRlMvm2dPAp6JGPdeFKQE89mGUWs
w6tIdJRtuxZt+Fkzhyr/1CIM19XcbWO9FuT/YgEcIhQnoBkcFsQzBK4DvqKxA2qV
Zw9PAQKBgH7hrARwErGvG5G900P0xTlDVQ1FRaBUNx73IYcJddSEm8rT7RQeP296
upHOYCXv4QnkXFmzCD5FzA/CY9Ubdz72hyxvlGPxSGnLLW8n/w4tMm3oSAQd/jJG
BBvPWISdkc1y6u64OVtZaY73vDZsGKT9VRVwZk+uJyZrwGLkFWCA
-----END RSA PRIVATE KEY-----`

const ACCESS_PUBLIC_KEY=`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAit50a5USfWj7i3NQML9l
i/VXmFdf57Coa4lR8/kAtcqfagzpvnVez3rEqaddYrazlzIWS0odAZW03LsUYdua
NZ8wyosBy+SW5GtUUYIoVcSjBjHfrqjEYjRBybkBZHRWvUBxnlniSpMDEkB9TlCm
CGyAtNR1qJWfZHXnAhRbAplEx9MHfHbFKjoljkRLAgZDENnGRFHjwCOGoL/mfiMs
jmSv8cTJmYyuAfRH2ttqyW/556DsUBWEib8u7xhdf8Rg0bOEjMb6M2509F4oWvxC
SBhDw8JgtGFuYYwyHhFdfiqIapqTdtUl/Ofsbe/l3sDfWWJWMak59Hr1zMdX1/9v
wQIDAQAB
-----END PUBLIC KEY-----`

export const generateResponse = (response, payload) => {
    const { status, errors, content } = payload

    if (errors) {
        return response.status(status).json({ errors })
    }

    return response.status(status).json({ content })
}

export const signJwt = (payload, expiresIn) => jwt.sign(payload, ACCESS_PRIVATE_KEY, { expiresIn, algorithm: "RS256" })

export const verifyJwt = (token) => {
    try {
        const decoded = jwt.verify(token, ACCESS_PUBLIC_KEY)

        return { payload: decoded, expired: false }
    } catch (e) {
        return { payload: null, expired: true}
    }
}
