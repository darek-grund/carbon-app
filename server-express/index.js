import express from 'express';
import cors from 'cors';
import forms from './forms';

const app = express();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/api/forms/:id', (request, response) => {
  const { id } = request.params;
  setTimeout(() => {
    if (forms[id]) {
      response
        .json(forms[id]);
    } else {
      response
        .status(404)
        .json({ message: 'Form not found' });
    }
  }, 500);
});

app.listen(8081);
