import axios from "axios";
import config from "../config/config.js";

class Sender {

    async send(healthData) {

        try {

            const response = await axios.post(
                config.backendUrl,
                healthData
            );

            console.log(
                `✓ ${healthData.cameraId} sent (${response.status})`
            );

        } catch (error) {

            console.error(
                `✗ Failed to send ${healthData.cameraId}:`,
                error.message
            );

        }

    }

}

export default new Sender();