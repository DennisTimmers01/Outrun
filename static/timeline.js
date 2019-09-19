// Don't forget to restart the server after
// adding a component to the ../components/vj folder

export const timelineSegments = [
    {
        duration: 5000,
        components: [
            {
                name: 'ground',
                change: [
                    {
                        type: 'opacity',
                        from: 0,
                        to: 1,
                    },
                ]
            },
            /*
            {
                name: 'mountain',
                change: [
                    {
                        type: 'opacity',
                        from: 0,
                        to: 1,
                    },
                ]
            },
            */
        ]
    }, // END OF SEGMENT ---------------
    /*
    {
        duration: 2000,
        components: [
            {
                name: 'monolith',
                change: [
                    {
                        type: 'opacity',
                        from: 0,
                        to: 1,
                    },
                ]
            },
        ]
    }, // END OF SEGMENT ---------------
    {
        duration: 3000,
        components: [
            {
                name: 'freakydots',
                change: [
                    {
                        type: 'opacity',
                        from: 0,
                        to: 1,
                    },
                ]
            },
        ]
    }, // END OF SEGMENT ---------------
    */
];
