import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

const store = createStore({
    state: {
        todos: new Map([
                [uuidv4(), {
                    "content": "Harvesting crops, plowing fields, and tending to livestock, farmers work hard to feed the world.",
                    "is_active": true
                }],
                [uuidv4(), {
                    "content": "This is content of second todo",
                    "is_active": true}
                ],
                [uuidv4(),{
                    "content": "This is content of third todo",
                    "is_active": false}
                ]
        ])
    }
})

export default store