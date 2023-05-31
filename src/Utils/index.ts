import {TaskObject} from '../Types'

export const statusTaskCounter = (tasks: TaskObject[]) => tasks.reduce((accumulator, obj) => {
    if (obj.status === false) {
        accumulator.activeCount++
    } else {
        accumulator.completedCount++
    }
    return accumulator
}, {activeCount: 0, completedCount: 0})
