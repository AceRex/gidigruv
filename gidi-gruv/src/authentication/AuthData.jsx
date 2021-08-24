export const StorageKeys = {
    User: "workspace_manager_user",
    AuthToken: "workspace_manager_auth_token",
    tokenkey: 'gidi-token'
}

export function getStorageData(key) {
    try {
        const rawUserData = sessionStorage.getItem(key);
        if (!rawUserData) {
            return null;
        }

        return JSON.parse(rawUserData);
    } catch (e) {
        return null;
    }
}

export function saveStorageData(key, value) {
    try {
        if (!value || !key) {
            return;
        }

        const stringifyValue = JSON.stringify(value);
        sessionStorage.setItem(key, stringifyValue);
    } catch (e) {
        return null;
    }
}