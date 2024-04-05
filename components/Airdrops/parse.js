function e(e) {
    if (!e) return null;
    const t = "==".slice(0, (4 - e.length % 4) % 4), n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
        r = window.atob(n);
    return Uint8Array.from(r, (e => e.charCodeAt(0)))
}

function t(e) {
    if (!e) return null;
    const t = [];
    for (const n of new Uint8Array(e)) t.push(String.fromCharCode(n));
    return window.btoa(t.join("")).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}

function n(e) {
    return {
        id: e.id,
        type: e.type,
        rawId: t(e.rawId),
        response: {attestationObject: t(e.response.attestationObject), clientDataJSON: t(e.response.clientDataJSON)},
        clientExtensionResults: e.getClientExtensionResults()
    }
}

function r(e) {
    return {
        id: e.id,
        type: e.type,
        rawId: t(e.rawId),
        response: {
            authenticatorData: t(e.response.authenticatorData),
            clientDataJSON: t(e.response.clientDataJSON),
            signature: t(e.response.signature),
            userHandle: t(e.response.userHandle)
        },
        clientExtensionResults: e.getClientExtensionResults()
    }
}

function a(t) {
    return {
        ...t,
        user: {...t.user, id: e(t.user.id)},
        challenge: e(t.challenge),
        excludeCredentials: (t.excludeCredentials || []).map((t => ({...t, id: e(t.id)})))
    }
}

function i(t) {
    return {
        ...t,
        challenge: e(t.challenge),
        allowCredentials: (t.allowCredentials || []).map((t => ({...t, id: e(t.id)})))
    }
}

export {
    t as arrayBufferToBase64UrlString,
    e as base64UrlStringToUint8Array,
    a as decodePublicKeyCredentialCreateOptions,
    i as decodePublicKeyCredentialRequestOptions,
    r as encodeLoginCredential,
    n as encodeRegisterCredential
};
