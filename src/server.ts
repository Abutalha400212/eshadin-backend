import mongoose from 'mongoose'
import app from './app'
import config from '../src/config/index'
async function bootstrap() {
  try {
    await mongoose.connect(config.db_url as string)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })

    console.log('Databese Connected Successfully')
  } catch (error) {
    console.log('Failed to Connect Database', error)
  }
}

bootstrap()
