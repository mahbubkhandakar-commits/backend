import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    // Connect to database first
    await mongoose.connect(config.database_url as string);
    console.log('Database connection established successfully');

    // Start server after successful database connection
    app.listen(config.port, () => {
      console.log(`KMG Task Server Listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Server initialization failed:', error);
    process.exit(1);
  }
}

main();