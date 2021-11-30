require('dotenv').config()

interface IConfigSettings {
    host: string;
    user: string;
    port: string;
    password: string;
    database: string;
    SECRET_KEY: string;
    AUTH_SECRET_KEY: string;
}

interface IConfig {
    [key: string]: IConfigSettings
}

const config: IConfig = {
    dev: {
        host: "localhost",
        user: "postgres",
        password: "1",
        port: "5432",
        database: "Test",
        SECRET_KEY: "d342k324k23j4",
        AUTH_SECRET_KEY: "dsfdsfdsfds8f79f79sdf789ds7"
    },
    qa: {
        host: "localhost",
        user: "postgres",
        password: "1",
        port: "5432",
        database: "Test",
        SECRET_KEY: "d342k324k23j4",
        AUTH_SECRET_KEY: "dsfdsfdsfds8f79f79sdf789ds7"
        
    },
    uat: {
        host: "localhost",
        user: "postgres",
        password: "1",
        port: "5432",
        database: "Test",
        SECRET_KEY: "d342k324k23j4",
        AUTH_SECRET_KEY: "dsfdsfdsfds8f79f79sdf789ds7"
    },
    prod: {
        host: "localhost",
        user: "postgres",
        password: "1",
        port: "5432",
        database: "Test",
        SECRET_KEY: "d342k324k23j4",
        AUTH_SECRET_KEY: "dsfdsfdsfds8f79f79sdf789ds7"
    }
}

export default config[process.env.NODE_ENV || "dev"]