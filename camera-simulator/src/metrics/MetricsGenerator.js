class MetricsGenerator {
    // convert invalid value to valid value 
    // return value if value is already valid
    static clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    // float value change allowed in range 
    static randomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    // current value to next value with restriction
    static getNextValue(current, minChange, maxChange, min, max) {
        const change = this.randomFloat(minChange, maxChange);
        const next = current + change;

        return this.clamp(next, min, max);
    }

    static generate(current) {
        return {

            cpu: this.getNextValue(
                current.cpu,
                -3,
                3,
                0,
                100
            ),

            memory: this.getNextValue(
                current.memory,
                -1,
                2,
                0,
                100
            ),

            storageUsed: this.getNextValue(
                current.storageUsed,
                0.01,
                0.10,
                0,
                current.storageCapacity
            ),

            latency: this.getNextValue(
                current.latency,
                -2,
                2,
                1,
                1000
            )

        };
    }

}

export default MetricsGenerator;