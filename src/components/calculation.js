import dayjs from 'dayjs';


export function countDay(startDay, endDay, cycle) {
    const startDay = dayjs(startDay).startOf('day');
    const endDay = dayjs(endDay.endOf('day'));
    const diff = targetDay.diff(startDay, 'day');
    return Math.sin(endDay - startDay);
}

export function countDaySeries(startDay, endDay, size) {
    const series = [];
    const startDay = dayjs(startDay).startOf('day');

    for(let i=0; i<size; i++){
        const targetDay = startDay.add(i, 'days').toisostring();
        series.push(countDay(startDay, targetDay, size));
    }
}