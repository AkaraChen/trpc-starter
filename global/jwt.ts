import * as jose from 'jose';
import { config } from '@/env';

const { JWTSECRET } = config;

const secret = new TextEncoder().encode(JWTSECRET);

const alg = 'HS256';
const issuer = 'zhiqiang inc.';
const audience = 'user';

export interface payload {
    username: string
}

export async function signJWT(payload: payload) {
    return new jose.SignJWT(payload as unknown as jose.JWTPayload)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer(issuer)
        .setAudience(audience)
        .setExpirationTime('2h')
        .sign(secret);
}

export async function verifyJWT(token: string): Promise<string | null> {
    try {
        const { payload } = await jose.jwtVerify(token, secret, {
            issuer,
            audience
        });
        return payload.username as string;
    } catch {
        return null;
    }
}
