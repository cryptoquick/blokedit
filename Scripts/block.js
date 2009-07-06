var scale = 1.0;

private var cubeVertices = [
	Vector3(0, 0, 0),
	Vector3(10, 0, 0),
	Vector3(0, 10, 0),
	Vector3(10, 10, 0),
	Vector3(0, 0, 10),
	Vector3(10, 0, 10),
	Vector3(0, 10, 10),
	Vector3(10, 10, 10)
];

private var cubeTriangles = [
2, 3, 1, 
2, 1, 0,
7, 1, 3,
7, 5, 1,
6, 5, 7,
6, 4, 5,
6, 2, 0,
6, 0, 4,
2, 7, 3,
2, 6, 7,
0, 1, 5,
0, 5, 4
];

function Start () {
	var mesh = new Mesh ();
	GetComponent (MeshFilter).mesh = mesh;
	mesh.vertices = cubeVertices;
	var vertices = mesh.vertices;
	
//	var uvs = new Array(vertices.length);
	var texscale = Vector2(0.02604, 0.15625);
//	var texscale = Vector2((10/384), (10/64));

	var uvs = new Vector2[vertices.length];

//	var uvs = [Vector2(0.0, 0.0),Vector2(0.3, 0.0),Vector2(0.0, 1.6),Vector2(0.3, 1.6),Vector2(0.0, 0.0),Vector2(0.3, 0.0),Vector2(0.0, 1.6),Vector2(0.3, 1.6)];

	for (var i = 0; i < uvs.Length; i++) {
		uvs[i] = Vector2 (vertices[i].x * texscale.x, vertices[i].z * texscale.y);
	}
	
	print(uvs.Length);
	
	mesh.uv = uvs;
	
	mesh.triangles = cubeTriangles;
	//	mesh.uv = cubeUV;
	mesh.RecalculateNormals();
}
/*
function cubeTriangles (cubeVertices) {
	var cubeTris = new Array();
	
	for (var x = 0; x < 4; x++) {
		for (var y = 0; y < 4; y++) {
			for (var z = 0; z < 4; z++) {
				cubeTris.push (x, y + 1, z + 2);
			}
		}
	}
	print(cubeTris);
	return cubeTris;
}*/