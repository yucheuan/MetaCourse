export default function CurrentMessage({day}) {
    const theDay = day ?? new Date().getDay(); // if day is undefined or null, use today's date

    const weekday = (theDay >= 1 && theDay <= 5);
    const weekend = !weekday;
    let message;

    if (weekday) {
        message = <Workdays />
    } else if (weekend) {
        message = <Weekends />
    } else {
        message = <ErrorComponent />
    }

    return (
        <>
            {message}
        </>
    )
}

export const Workdays = () => <h1> Today is a workday</h1>
export const Weekends = () => <h1> Today is a weekend</h1>
export const ErrorComponent = () => <h1> Error for Current Message</h1>