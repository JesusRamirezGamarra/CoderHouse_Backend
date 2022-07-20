table = $('#example').DataTable({
    "lengthMenu": [ [15, 50, 100, -1], [15, 50, 100, "All"] ],
    "pagingType": "simple",
    scrollY: 400,
    scrollCollapse: true,
    order: [[ 0, 'asc' ], [3, 'desc' ]],
    ajax: {
        url: '/exampleData',
    },
    columns: [
        { data: 'userId' },
        { data: 'id' },
        { data: 'title' },
        { data: 'completed' }
        ]
    })