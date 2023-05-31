import { statusTaskCounter } from "."
import { TaskObject } from "../Types"

const arrayF = (falseNum: number, trueNum: number) => {
    let array: TaskObject[] = []
    const sum = falseNum + trueNum
    for (let i = 0; i < sum; i++) {
        array.push({
            status: i < trueNum ? true : false,
            task: ''
        })
    }
    return array
}


describe('Utils', () => {
    it('statusTaskCounter', () => {
        const falseNum = 3
        const trueNum = 4

        const arr = arrayF(falseNum, trueNum)

        const {activeCount, completedCount} = statusTaskCounter(arr)

        expect(activeCount).toEqual(falseNum)
        expect(completedCount).toEqual(trueNum)
    })
})