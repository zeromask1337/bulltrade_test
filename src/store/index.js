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
    },
    mutations: {
        addTodo: (state, input) => {
            state.todos.set(uuidv4(), {
                "content": input,
                "is_active": true
            })
        },
        deleteTodo: (state, id) => {
            state.todos.delete(id)
        },
        markDone: (state, id) => {
            state.todos.set(id, {...state.todos.get(id), "is_active": false})
        },
        updateTodo: (state, payload) => {
            state.todos.set(payload.id, {...state.todos.get(payload.id), "content": payload.content})
        }
    }
})

export default store