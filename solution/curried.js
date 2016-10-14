function curried(func) {
    if (typeof func !== 'function') return false

    const LENGTH = func.length;

    const NEXT = (args, ...new_args) => {
        args = [...args, ...new_args];
        if (args.length < LENGTH) return NEXT.bind(null, args)
        return func.apply(this, args)
    }

    return NEXT.bind(null, [])
}

module.exports = curried;
