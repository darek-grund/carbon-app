import Service from 'carbon-react/lib/utils/service';

class FormService extends Service {
  constructor() {
    super();
    this.setURL('http://127.0.0.1:8081/api/forms');
  }
}

export default FormService;
