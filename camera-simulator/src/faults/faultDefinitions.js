import config from "../config/config.js";

const randomBetween = (min, max) =>
    min + Math.random() * (max - min);

const faultDefinitions = {

    HIGH_CPU: {

        apply(metrics) {

            metrics.cpu = randomBetween(95, 100);

        },

        recover(metrics) {

            metrics.cpu = randomBetween(
                config.healthyRanges.cpu.min,
                config.healthyRanges.cpu.max
            );

        }

    },

    HIGH_MEMORY: {

        apply(metrics) {
    
            metrics.memory = randomBetween(92, 98);
    
        },
    
        recover(metrics) {
    
            metrics.memory = randomBetween(
                config.healthyRanges.memory.min,
                config.healthyRanges.memory.max
            );
    
        }
    
    },

    

};

export default faultDefinitions;