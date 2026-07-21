import config from "../config/config.js";
import faultDefinitions from "./faultDefinitions.js";

class FaultEngine {
    constructor() {
        this.currentFault = null;
        this.remainingCycles = 0;
    }

    apply(metrics) {

        // Maybe start a fault
        if (!this.currentFault) {
    
            if (Math.random() < config.faultProbability) {
    
                const faults = Object.keys(faultDefinitions);
    
                this.currentFault =
                    faults[Math.floor(Math.random() * faults.length)];
    
                this.remainingCycles =
                    Math.floor(Math.random() * 6) + 5;
            }
    
        }
    
        // No fault selected
        if (!this.currentFault) {
            return metrics;
        }
    
        const definition =
            faultDefinitions[this.currentFault];
    
        definition.apply(metrics);
    
        this.remainingCycles--;
    
        if (this.remainingCycles <= 0) {
    
            definition.recover(metrics);
    
            this.currentFault = null;
    
        }
    
        return metrics;
    
    }
}

export default FaultEngine;