import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`First project is listening on port ${config.port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

main();
