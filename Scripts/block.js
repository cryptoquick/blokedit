var scale = 10;

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

// Proper triangle winding thanks to Sean @ http://stuff.seans.com/2008/08/13/drawing-a-cube-in-wpf/
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

private var cubeArray = [
	["cube1", 0, 1, 0],
	["cube2", 1, 1, 0],
	["cube3", 0, 1, 1],
	["cube4", 1, 0, 1],
	["cube5", 0, 1, 1],
	["cube6", 0, 0, 0]
];

function Start () {
	gameObject.AddComponent("MeshFilter");
	gameObject.AddComponent("MeshRenderer");

	var mesh : Mesh = GetComponent(MeshFilter).mesh;
	
	cube = makeCubes ();
	
	mesh.vertices = cube.verts;
	mesh.triangles = cube.tris;
	mesh.RecalculateNormals();
	
//	mesh.vertices = cubeVertices;
//	var vertices = mesh.vertices;
	
	
	
	renderer.material.color = Color.red;
}

function makeCubes () {
	var arrayVerts = new Array();
	var arrayTris = new Array();
	var debugArray = new Array();
	
	var vertCount = 0;
	
	// Translate vertices	
	for (var i = 0; i < cubeArray.length; i++) {
		for (var j = 0; j < cubeVertices.length; j++) {
			arrayVerts[vertCount] = Vector3 (
				cubeVertices[j].x + cubeArray[i][1] * scale,
				cubeVertices[j].y + cubeArray[i][2] * scale,
				cubeVertices[j].z + cubeArray[i][3] * scale
			);
			vertCount++;
		}
	}
	
//	print(arrayVerts.length);
	
	// Assign triangles to new verts (increase the indices by 7)
	for (var k = 0; k < cubeArray.length; k++) {
		for (var l = 0; l < cubeTriangles.length; l++) {
			arrayTris.push(cubeTriangles[j] + 7 * k);
		}
	}
	
//	drawMesh(mesh, arrayVerts, arrayTris);


	var meshData = {verts: arrayVerts, tris: arrayTris};

	return meshData;
}

function drawMesh (mesh, verts, tris) {
//	var mesh = new Mesh ();

}

	/* UV Code */
//	var uvs = new Array(vertices.length);
//	var texscale = Vector2(0.02604, 0.15625);
//	var texscale = Vector2((10/384), (10/64));

//	var uvs = [Vector2(0.0, 0.0),Vector2(0.3, 0.0),Vector2(0.0, 1.6),Vector2(0.3, 1.6),Vector2(0.0, 0.0),Vector2(0.3, 0.0),Vector2(0.0, 1.6),Vector2(0.3, 1.6)];
	/*
	var uvs = new Vector2[vertices.length];

	for (var i = 0; i < uvs.Length; i++) {
		uvs[i] = Vector2 (vertices[i].x * texscale.x, vertices[i].z * texscale.y);
	}
	print(uvs.Length);
	
	mesh.uv = uvs;
	*/
	
	//	mesh.uv = cubeUV;