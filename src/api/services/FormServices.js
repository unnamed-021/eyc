import axios from "axios";
import { handleError, throwErrorIfWrongStatus } from "./utils";

class FormService {
  websiteForm = async (requestData) => {
    try {
      const response = await axios.post(
        "https://eycrowd-server.qa.eycrowd.com/api/feedback/website-form",
        requestData
      );
      throwErrorIfWrongStatus(response, 201);
      return response.data;
    } catch (err) {
      throw handleError(err, "Error occurred while posting form request.");
    }
  };
}

const formService = new FormService();

export default formService;
