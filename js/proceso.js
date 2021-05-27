async function leerJSON(url) {

    try {
      let response = await fetch(url);
      let user = await response.json();
      return user;
    } catch(err) {
      
      alert(err);
    }
  }

  function mostrar(){
    
    var url = "https://raw.githubusercontent.com/FelipeM09/Notas_Sitpre/main/json/datos.json";
        
    leerJSON(url).then(datos => {
        
        console.log("hola");
        drawTable();
  
        // des.innerHTML = drawTableDescripcion(descripcion);
        // resultado.innerHTML = drawTable(alumnos) ;
    })
  }

  function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Salary');
    data.addColumn('boolean', 'Full Time Employee');
    data.addRows([
      ['Mike',  {v: 10000, f: '$10,000'}, true],
      ['Jim',   {v:8000,   f: '$8,000'},  false],
      ['Alice', {v: 12500, f: '$12,500'}, true],
      ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
  }

  mostrar();