import test from 'ava'
import { logic } from '../src/logic'
import { stage }  from '../src/stage'
import { exists } from 'fs';

test(t => {
    return logic({ message: { content: 'taGrandeRace' } }).then(element => {
        t.true(stage.includes(element.message.content))
    })
})
