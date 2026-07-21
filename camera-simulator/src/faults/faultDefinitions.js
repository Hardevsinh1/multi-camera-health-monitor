import config from "../config/config.js";

const randomBetween = (min, max) =>
    min + Math.random() * (max - min);

const faultDefinitions = {


    HIGH_CPU: {

        probability: 0.03,

        duration: {
            min: 5,
            max: 10
        },

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

    HIGH_STORAGE: {
        apply(metrics) {

            metrics.storageUsed =
                metrics.storageCapacity * 0.98;

        },

        recover(metrics) {

            metrics.storageUsed =
                randomBetween(50, 55);

        }
    },

    HIGH_LATENCY: {
        apply(metrics) {

            metrics.latency = randomBetween(300, 500);

        },

        recover(metrics) {

            metrics.latency = randomBetween(
                config.healthyRanges.latency.min,
                config.healthyRanges.latency.max
            );

        }
    },

    OFFLINE: {
        apply(metrics) {

            metrics.online = false;

        },
        recover(metrics) {

            metrics.online = true;

        }
    }



};



export const getRandomFault = () => {

    const faults = Object.keys(faultDefinitions);

    return faults[
        Math.floor(Math.random() * faults.length)
    ];

}

export const getFaultDefinition = (faultName) =>
    faultDefinitions[faultName];



export default faultDefinitions;