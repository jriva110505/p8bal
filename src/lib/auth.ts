export const TOKEN_KEY = "accessToken";

export function saveToken(token: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_KEY, token);
    }
}

export function getToken(): string | null {
    if (typeof window !== "undefined") {
        return localStorage.getItem(TOKEN_KEY);
    }
    return null;
}

export function logoutUser() {
    if (typeof window !== "undefined") localStorage.removeItem(TOKEN_KEY);
}

/**
 * Get the username from the token payload (assuming JWT format)
 */
export function getUsername(): string {
    const token = getToken();
    if (!token) return "";

    try {
        // JWT payload is the middle part
        const payloadBase64 = token.split(".")[1];
        const payload = JSON.parse(atob(payloadBase64));
        return payload.username || "";
    } catch {
        return "";
    }
}

/**
 * Get the barrier token from the token payload (assuming stored in JWT)
 */
export function getBarrierToken(): string {
    const token = getToken();
    if (!token) return "";

    try {
        const payloadBase64 = token.split(".")[1];
        const payload = JSON.parse(atob(payloadBase64));
        return payload.barrier || "";
    } catch {
        return "";
    }
}
