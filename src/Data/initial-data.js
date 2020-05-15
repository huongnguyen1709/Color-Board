import { v1 as uuidv1 } from 'uuid'

const initialData = {
    colors: {
        'column-1': {
            'color-1': { uid: uuidv1(), color: 'indianred' },
            'color-2': { uid: uuidv1(), color: 'lightcoral' },
            'color-3': { uid: uuidv1(), color: 'salmon' },
            'color-4': { uid: uuidv1(), color: 'darksalmon' },
            'color-5': { uid: uuidv1(), color: 'lightsalmon' },
            'color-6': { uid: uuidv1(), color: 'crimson' },
            'color-7': { uid: uuidv1(), color: 'red' },
            'color-8': { uid: uuidv1(), color: 'firebrick' }
        },

        'column-2': {
            'color-1': { uid: uuidv1(), color: 'darkred' },
            'color-2': { uid: uuidv1(), color: 'pink' },
            'color-3': { uid: uuidv1(), color: 'lightpink' },
            'color-4': { uid: uuidv1(), color: 'hotpink' },
            'color-5': { uid: uuidv1(), color: 'deeppink' },
            'color-6': { uid: uuidv1(), color: 'mediumvioletred' },
            'color-7': { uid: uuidv1(), color: 'coral' },
            'color-8': { uid: uuidv1(), color: 'tomato' }
        },

        'column-3': {
            'color-1': { uid: uuidv1(), color: 'orangered' },
            'color-2': { uid: uuidv1(), color: 'darkorange' },
            'color-3': { uid: uuidv1(), color: 'orange' },
            'color-4': { uid: uuidv1(), color: 'gold' },
            'color-5': { uid: uuidv1(), color: 'yellow' },
            'color-6': { uid: uuidv1(), color: 'moccasin' },
            'color-7': { uid: uuidv1(), color: 'peachpuff' },
            'color-8': { uid: uuidv1(), color: 'palegoldenrod' }
        },

        'column-4': {
            'color-1': { uid: uuidv1(), color: 'khaki' },
            'color-2': { uid: uuidv1(), color: 'darkkhaki' },
            'color-3': { uid: uuidv1(), color: 'thistle' },
            'color-4': { uid: uuidv1(), color: 'plum' },
            'color-5': { uid: uuidv1(), color: 'violet' },
            'color-6': { uid: uuidv1(), color: 'orchid' },
            'color-7': { uid: uuidv1(), color: 'fuchsia' },
            'color-8': { uid: uuidv1(), color: 'mediumorchid' }
        },

        'column-5': {
            'color-1': { uid: uuidv1(), color: 'mediumpurple' },
            'color-2': { uid: uuidv1(), color: 'rebeccapurple' },
            'color-3': { uid: uuidv1(), color: 'blueviolet' },
            'color-4': { uid: uuidv1(), color: 'darkviolet' },
            'color-5': { uid: uuidv1(), color: 'purple' },
            'color-6': { uid: uuidv1(), color: 'indigo' },
            'color-7': { uid: uuidv1(), color: 'slateblue' },
            'color-8': { uid: uuidv1(), color: 'darkslateblue' }
        },

        'column-6': {
            'color-1': { uid: uuidv1(), color: 'mediumslateblue' },
            'color-2': { uid: uuidv1(), color: 'greenyellow' },
            'color-3': { uid: uuidv1(), color: 'chartreuse' },
            'color-4': { uid: uuidv1(), color: 'lime' },
            'color-5': { uid: uuidv1(), color: 'limegreen' },
            'color-6': { uid: uuidv1(), color: 'palegreen' },
            'color-7': { uid: uuidv1(), color: 'mediumspringgreen' },
            'color-8': { uid: uuidv1(), color: 'springgreen' }
        },

        'column-7': {
            'color-1': { uid: uuidv1(), color: 'mediumseagreen' },
            'color-2': { uid: uuidv1(), color: 'seagreen' },
            'color-3': { uid: uuidv1(), color: 'green' },
            'color-4': { uid: uuidv1(), color: 'darkgreen' },
            'color-5': { uid: uuidv1(), color: 'yellowgreen' },
            'color-6': { uid: uuidv1(), color: 'olivedrab' },
            'color-7': { uid: uuidv1(), color: 'olive' },
            'color-8': { uid: uuidv1(), color: 'darkolivegreen' }
        },

        'column-8': {
            'color-1': { uid: uuidv1(), color: 'mediumaquamarine' },
            'color-2': { uid: uuidv1(), color: 'darkseagreen' },
            'color-3': { uid: uuidv1(), color: 'lightseagreen' },
            'color-4': { uid: uuidv1(), color: 'teal' },
            'color-5': { uid: uuidv1(), color: 'cyan' },
            'color-6': { uid: uuidv1(), color: 'turquoise' },
            'color-7': { uid: uuidv1(), color: 'cadetblue' },
            'color-8': { uid: uuidv1(), color: 'steelblue' }
        }
    },

    columns: {
        'column-1': {
            id: 'column-1',
            colorIds: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8']
        },

        'column-2': {
            id: 'column-2',
            colorIds: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8']
        },

        'column-3': {
            id: 'column-3',
            colorIds: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8']
        },

        'column-4': {
            id: 'column-4',
            colorIds: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8']
        },

        'column-5': {
            id: 'column-5',
            colorIds: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8']
        },

        'column-6': {
            id: 'column-6',
            colorIds: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8']
        },

        'column-7': {
            id: 'column-7',
            colorIds: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8']
        },

        'column-8': {
            id: 'column-8',
            colorIds: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8']
        }
    },

    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6', 'column-7', 'column-8']
}

export default initialData