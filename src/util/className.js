export function getClassNames(...args) {
    const classes = [];

    function processArg(arg) {
        if (typeof arg === "string") {
            classes.push(arg);
        } else if (Array.isArray(arg)) {
            arg.forEach((innerArg) => {
                processArg(innerArg);
            });
        } else if (typeof arg === "object" && arg !== null) {
            for (const key in arg) {
                if (arg[key] === true) {
                    classes.push(key);
                }
            }
        }
    }

    args.forEach((arg) => {
        processArg(arg);
    });

    return classes.join(" ");
}