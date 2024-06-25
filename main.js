const departamentosYMunicipios = {
	"Amazonas": ["Leticia", "Puerto Nariño"],
	"Antioquia": ["Medellín", "Bello", "Envigado"],
	"Arauca": ["Arauca", "Arauquita"],
	"Atlántico": ["Barranquilla", "Soledad"],
	"Bolívar": ["Cartagena", "Magangué"],
	"Boyacá": ["Tunja", "Duitama"],
	"Caldas": ["Manizales", "Villamaría"],
	"Caquetá": ["Florencia", "San Vicente del Caguán"],
	"Casanare": ["Yopal", "Aguazul"],
	"Cauca": ["Popayán", "Santander de Quilichao"],
	"Cesar": ["Valledupar", "Aguachica"],
	"Chocó": ["Quibdó", "Istmina"],
	"Córdoba": ["Montería", "Lorica"],
	"Cundinamarca": ["Bogotá", "Soacha"],
	"Guainía": ["Inírida"],
	"Guaviare": ["San José del Guaviare"],
	"Huila": ["Neiva", "Pitalito"],
	"La Guajira": ["Riohacha", "Maicao"],
	"Magdalena": ["Santa Marta", "Ciénaga"],
	"Meta": ["Villavicencio", "Acacías"],
	"Nariño": ["Pasto", "Tumaco"],
	"Norte de Santander": ["Cúcuta", "Ocaña"],
	"Putumayo": ["Mocoa", "Puerto Asís"],
	"Quindío": ["Armenia", "Montenegro"],
	"Risaralda": ["Pereira", "Dosquebradas"],
	"San Andrés y Providencia": ["San Andrés", "Providencia"],
	"Santander": ["Bucaramanga", "Floridablanca"],
	"Sucre": ["Sincelejo", "Corozal"],
	"Tolima": ["Ibagué", "Espinal"],
	"Valle del Cauca": ["Cali", "Palmira"],
	"Vaupés": ["Mitú"],
	"Vichada": ["Puerto Carreño"]
  };
  
  const departamentoSelect = document.getElementById('departamento');
  const municipioSelect = document.getElementById('municipio');
  
  departamentoSelect.addEventListener('change', (event) => {
	const municipios = departamentosYMunicipios[event.target.value] || [];
	municipioSelect.innerHTML = '<option value="" disabled selected>Seleccione el municipio</option>';
	municipios.forEach(municipio => {
	  const option = document.createElement('option');
	  option.value = municipio;
	  option.textContent = municipio;
	  municipioSelect.appendChild(option);
	});
  });
  