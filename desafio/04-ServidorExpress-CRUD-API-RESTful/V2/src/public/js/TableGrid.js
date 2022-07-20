const CargarTabla = async () => {

table = $('#example').DataTable({
    "lengthMenu": [ [15, 50, 100, -1], [15, 50, 100, "All"] ],
    "pagingType": "simple",
    scrollY: 400,
    scrollCollapse: true,
    order: [[ 0, 'asc' ], [3, 'desc' ]],
    ajax: {
        url: 'http://localhost:8080/api/productos/',
    },
    columns: [
        { data: 'id' },
        { data: 'title' },
        { data: 'price' },
        { data: 'thumbnail' }
        // { data: 'userId' },
        // { data: 'id' },
        // { data: 'title' },
        // { data: 'completed' }        
        ]
    })
}

CargarTabla();