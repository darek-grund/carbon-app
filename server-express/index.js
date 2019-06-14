import express from 'express';
import cors from 'cors';
import forms from './forms';

const app = express();
const corsOptions = {
  origin: 'http://127.0.0.1:8080',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/api/forms/:id', (request, response) => {
  const { id } = request.params;
  if (forms[id]) {
    response
      .json(forms[id]);
  } else {
    response
      .status(404)
      .json({ error: 'Form not found' });
  }
});

app.listen(8081);
