const config = {
    express: {
        port: process.env.PORT || 8000
    },
    database: {
        host: process.env.HOST_DB || 'localhost',
        port: process.env.PORT_DB || 3306,
        user: process.env.USER_DB || 'root',
        password: process.env.PASS_DB || 'joaquin#2116',
        database: process.env.DB_NAME || 'apptasks'
    }
};

export default config;