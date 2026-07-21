import config from "../config/config.js";

import {
    getRandomFault,
    getFaultDefinition
} from "./faultDefinitions.js";

class FaultEngine {

    constructor() {

        this.currentFault = null;

        this.remainingCycles = 0;

    }

    apply(metrics) {

        // Maybe start a new fault
        if (!this.currentFault) {

            if (Math.random() < config.faultProbability) {

                this.currentFault = getRandomFault();

                this.remainingCycles =
                    Math.floor(Math.random() * 6) + 5;
            }

        }

        // No fault active
        if (!this.currentFault) {

            return metrics;

        }

        const definition =
            getFaultDefinition(this.currentFault);

        definition.apply(metrics);

        this.remainingCycles--;

        if (this.remainingCycles <= 0) {

            definition.recover(metrics);

            this.currentFault = null;

        }

        return metrics;

    }

    getCurrentFault() {

        return this.currentFault;

    }

}

export default FaultEngine;