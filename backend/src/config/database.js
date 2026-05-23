import pg from 'pg';
const { Pool } = pg;

// Pool de connexions PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes('localhost') || process.env.DATABASE_URL.includes('postgres:5432')
        ? false 
        : { rejectUnauthorized: false },
    max: 10,             // Maximum de connexions simultanées
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

// Vérification de connexion au démarrage
const connectDB = async () => {
    try {
        const client = await pool.connect();
        const res = await client.query('SELECT NOW()');
        client.release();
        console.log(`✅ PostgreSQL Connected: ${res.rows[0].now}`);

        // Création de la table si elle n'existe pas
        await initializeDatabase();
    } catch (error) {
        console.error(`❌ PostgreSQL Connection Error: ${error.message}`);
        process.exit(1);
    }
};

// Initialisation du schéma de la base de données
const initializeDatabase = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS contacts (
            id          SERIAL PRIMARY KEY,
            name        VARCHAR(100)  NOT NULL,
            email       VARCHAR(255)  NOT NULL,
            phone       VARCHAR(20),
            subject     VARCHAR(200)  NOT NULL,
            message     TEXT          NOT NULL,
            status      VARCHAR(20)   NOT NULL DEFAULT 'new'
                            CHECK (status IN ('new', 'read', 'replied')),
            created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
        );

        CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts (created_at DESC);
        CREATE INDEX IF NOT EXISTS idx_contacts_status     ON contacts (status);
    `;

    try {
        await pool.query(createTableQuery);
        console.log('📋 Table "contacts" prête.');
    } catch (error) {
        console.error('❌ Erreur création table:', error.message);
        throw error;
    }
};

export { pool };
export default connectDB;
