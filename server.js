import app from './app.js';

const PORT = process.env.PORT || 5001;

app.listen(PORT, (err,data) => {
  console.log(`Server is running on port ${PORT}`);
})
