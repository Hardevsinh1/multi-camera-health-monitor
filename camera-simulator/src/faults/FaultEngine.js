import config from "../config/config.js";

class FaultEngine {
    constructor() {
        this.currentFault = null;
        this.remainingCycles = 0;
    }

    apply(metrics) {

        // No active fault
        if (!this.currentFault) {

            // Randomly start HIGH_CPU fault
            if (Math.random() < config.faultProbability) {

                this.currentFault = "HIGH_CPU";

                // Fault lasts between 5 and 10 cycles
                this.remainingCycles =
                    Math.floor(Math.random() * 6) + 5;
            }

            // return metrics;
        }

        // Apply active fault
        if (this.currentFault === "HIGH_CPU") {

            // 95–100%
            metrics.cpu = 95 + Math.random() * 5;

            this.remainingCycles--;

            if (this.remainingCycles <= 0) {

                this.currentFault = null;
            }
        }

        return metrics;
    }
}

export default FaultEngine;