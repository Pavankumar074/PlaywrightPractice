import dotenv from 'dotenv';
dotenv.config();

function getEnvVariable(key: string): string {
    const value=process.env[key];
    if (!value) {
        throw new Error(`Environment variable not found: ${key}`);
    }
    return value;
}

export const env={
    userName: getEnvVariable('USERNAME'),
    password: getEnvVariable('PASSWORD'),
    baseUrl: getEnvVariable('BASE_URL'),
    apibaseUrl: getEnvVariable('API_URL')
}